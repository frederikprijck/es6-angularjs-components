import 'normalize.css';

import angular from 'angular';
import appComponent from './app.component';
import ComponentsModule from './components/components.module';
import CommonModule from './common/common.module';

angular.module('app', [
    CommonModule.name,
    ComponentsModule.name
])
    .component('app', appComponent);