class SearchService {

	constructor (searchRepository) {
		this.searchRepository = searchRepository;
	}

	getSearchResults (keyword) {
		if (!keyword) {
			return [];
		}

		var promise = this.searchRepository.search(keyword);
		return promise.then(data => this.transformData_(data));
	}

	transformData_(data) {
		return data.map(val => `${val.firstName} ${val.lastName}`);
	}

}

module.exports = SearchService;