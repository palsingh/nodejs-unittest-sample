var expect = require('chai').expect;
var SearchService = require('../app/index.js');
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
		}];
	var mockResult = ['foo bar', 'foo1 bar1', 'foo2 bar2', 'foo3 bar3']
	var fakeResolve = {
		then: function(cb) {
			return cb(mockData);
		}
	}
	var searchRepository = {
		search: sinon.stub().returns(fakeResolve)
	}
	var searchService = new SearchService(searchRepository);

	it("should return empty array if `keyword` is false", function () {
		expect(searchService.getSearchResults()).to.deep.equal([]);
		expect(searchService.getSearchResults('')).to.deep.equal([]);

		expect(searchService.getSearchResults(false)).to.be.array;
		expect(searchService.getSearchResults(undefined)).to.deep.equal([]);
	});

	it("should return search result for given `keyword`", function () {
		expect(searchService.getSearchResults('keyword')).to.deep.equal(mockResult);
	});
});