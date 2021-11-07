import Vue from 'vue';
import Router from 'vue-router'
import config from './config';
import guards from './guards';

Vue.use(Router);

const router = new Router(config);

const {beforeEach, afterEach} = guards;
beforeEach.forEach(guard => {
    if (guard && typeof guard === 'function') {
        router.beforeEach(guard)
    }
});
afterEach.forEach(guard => {
    if (guard && typeof guard === 'function') {
        router.afterEach(guard)
    }
});

export default router;