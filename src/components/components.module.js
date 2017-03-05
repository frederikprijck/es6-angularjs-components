import angular from 'angular';
import CategoriesComponent from './categories/categories.component';
import CategoryItem from './categories/category-item/category-item.component';

const ComponentsModule = angular.module('ComponentsModule', [])
    .component('categories', CategoriesComponent)
    .component('categoryItem', CategoryItem);

export default ComponentsModule;