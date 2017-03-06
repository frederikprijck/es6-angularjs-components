export default class CategoriesController {
    constructor(CategoriesModel) {
        'ngInject';

        this.CategoriesModel = CategoriesModel;
    }

    $onInit() {
        console.log('Adding the navigation to the DOM...');

        this.CategoriesModel.getCategories()
            .then(result => this.categories = result);
    }

    $onDestroy() {
        console.log('Removing the navigation from the DOM...');
    }

    onCategorySelected(category) {
        console.log(`Selected: ${category.name}`);
    }
}