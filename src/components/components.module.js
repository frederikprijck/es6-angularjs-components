import angular from 'angular';
import CategoriesComponent from './categories/categories.component';
import CategoryItemComponent from './categories/category-item/category-item.component';

const ComponentsModule = angular.module('ComponentsModule', [])
    .component('categories', CategoriesComponent)
    .component('categoryItem', CategoryItemComponent);

export default ComponentsModule;