class SearchService {

	constructor (searchRepository) {
		this.searchRepository = searchRepository;
	}

	getSearchResults (keyword) {
		if (!keyword) {
			return [];
		}

		var promise = this.searchRepository.search(keyword);
		return promise.then(data => this.transformData_(data),
			error => this.onRejectHandler_(error))
			.catch(error => {
				console.log('what error?');
			});
	}

	onRejectHandler_(error) {
		console.log('rejected', error);
	}

	transformData_(data) {
		return data.map(val => `${val.firstName} ${val.lastName}`);
	}

}

module.exports = SearchService;