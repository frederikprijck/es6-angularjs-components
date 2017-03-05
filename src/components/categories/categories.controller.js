export default class CategoriesController {
    constructor(CategoriesModel) {
        'ngInject';

        this.CategoriesModel = CategoriesModel;
    }

    $onInit() {
        this.CategoriesModel.getCategories()
            .then(result => this.categories = result);
    }

    onCategorySelected(category) {
        console.log(`Selected: ${category.name}`);
    }
}