class SearchRepository {
	
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

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (keyword.length % 2 === 0) {
					resolve(data);
				} else {
					reject('some error');
				}
			}, 2000);
		});
	
	}
}