import angular from 'angular';
import BookmarksComponent from './bookmarks/bookmarks.component';
import CategoriesComponent from './categories/categories.component';
import CategoryItemComponent from './categories/category-item/category-item.component';

const ComponentsModule = angular.module('ComponentsModule', [])
    .component('bookmarks', BookmarksComponent)
    .component('categories', CategoriesComponent)
    .component('categoryItem', CategoryItemComponent);

export default ComponentsModule;