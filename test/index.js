var expect = require('chai').expect;
var SearchService = require('../app/index.js');
var q = require('q');
var sinon = require('sinon');

describe("SearchService", function () {
	var mockData = [{
			firstName: 'foo',
			lastName: 'bar'
		}, {
			firstName: 'foo1',
			lastName: 'bar1'
		}, {
			firstName: 'foo2',
			lastName: 'bar2'
		}, {
			firstName: 'foo3',
			lastName: 'bar3'
		}],
		mockResult = ['foo bar', 'foo1 bar1', 'foo2 bar2', 'foo3 bar3'],
		deferred,
		searchRepository,
		searchService;

	beforeEach(function() {
		deferred = q.defer();
		searchRepository = {
			search: sinon.stub().returns(deferred.promise)
		}
		searchService = new SearchService(searchRepository);
	});

	afterEach(function () {
		deferred = null;
		searchRepository = null;
		searchService = null;
	});

	it("should return empty array if `keyword` is false", function () {
		expect(searchService.getSearchResults()).to.deep.equal([]);
		expect(searchService.getSearchResults('')).to.deep.equal([]);

		expect(searchService.getSearchResults(false)).to.be.array;
		expect(searchService.getSearchResults(undefined)).to.deep.equal([]);
	});

	it("should return search result for given `keyword`", function (done) {
		var result = searchService.getSearchResults('keyword');
		result.then(function (data) {
			expect(data).to.deep.equal(mockResult);
			done();
		});
		deferred.resolve(mockData);
	});

	it("should execute reject handler when promise is rejected", function (done) {
		var spy = sinon.spy(searchService,'onRejectHandler_');
		var result = searchService.getSearchResults('keyword');
		
		result.then(function () {
			expect(spy.calledOnce).to.be.true;
			expect(spy.calledWith('some error')).to.be.true;
			searchService.onRejectHandler_.restore();
			done();
		});
		
		deferred.reject('some error');
	});
});