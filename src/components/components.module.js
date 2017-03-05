import angular from 'angular';
import CategoriesComponent from './categories/categories.component';

const ComponentsModule = angular.module('ComponentsModule', [])
    .component('categories', CategoriesComponent);

export default ComponentsModule;