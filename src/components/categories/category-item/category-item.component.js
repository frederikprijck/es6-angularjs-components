import template from './category-item.html';
import './category-item.less';

const categoryItemComponent = {
    bindings: {
        category: '<',
        selected: '&'
    },
    template,
    controllerAs: 'categoryItem'
};

export default categoryItemComponent;