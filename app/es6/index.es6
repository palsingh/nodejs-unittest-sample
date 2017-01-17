class SearchService {

	constructor (searchRepository) {
		this.searchRepository = searchRepository;
	}

	getSearchResults (keyword) {
		if (!keyword) {
			return [];
		}

		var promise = this.searchRepository.search(keyword);
		return promise.then(this.transformData_, this.onRejectHandler_)
			.catch(this.errorHandler_);
	}

	onRejectHandler_(error) {
		console.log('rejected', error);
	}

	errorHandler_(error) {
		console.error(error);
	}

	transformData_(data) {
		return data.map(val => `${val.firstName} ${val.lastName}`);
	}

}

module.exports = SearchService;