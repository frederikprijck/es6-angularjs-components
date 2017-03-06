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
        this.CategoriesModel.setCurrentCategory(category);
    }

    isCurrentCategory(category) {
        return this.CategoriesModel.getCurrentCategory() &&
            this.CategoriesModel.getCurrentCategory().id === category.id;

        console.log(category);
    }
}