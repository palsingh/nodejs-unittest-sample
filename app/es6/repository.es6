var q = require('q');

class SearchRepository {

	constructor (db) {
		this.db = db;
	}
	
	search (keyword) {
		// Sample data
		var data = [{
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
		var promise = q.defer();

		db.find({
			'name': keyword
		})
		.then(data => {
			promise.resolve(data);
		}, error => {
			promise.reject(error);
		});

		return promise.defer;

		/*return new Promise((resolve, reject) => {
			var promise = db.find({});

			promise.then(data => {
				resolve(data);
			});
			
			setTimeout(() => {
				if (keyword.length % 2 === 0) {
					resolve(data);
				} else {
					reject('some error');
				}
			}, 2000);
		});*/
	
	}
}