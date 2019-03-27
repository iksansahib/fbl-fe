import Vue from 'vue';
import Router from 'vue-router';
import Submission from './components/Submission';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'submission',
            component: Submission
        },
        {
            path: '/list',
            name: 'product_list',
            component: ProductList
        },
        {
            path: '/detail/:id',
            name: 'product_detail',
            component: ProductDetail
        }
    ]
})