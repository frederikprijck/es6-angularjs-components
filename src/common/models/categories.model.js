export default class CategoriesModel {
    constructor($q) {
        'ngInject';

        this.$q = $q;
        this.categories = [
            { id: 0, name: 'Development' },
            { id: 1, name: 'Design' },
            { id: 2, name: 'Technology' },
            { id: 3, name: 'Motorcycles' }
        ];
    }

    getCategories() {
        return this.$q.when(this.categories);
    }
}