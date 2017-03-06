export default class CategoriesController {
    constructor(BookmarksModel) {
        'ngInject';

        this.BookmarksModel = BookmarksModel;
    }

    $onInit() {
        this.BookmarksModel.getBookmarks()
            .then(result => this.bookmarks = result);
    }
}