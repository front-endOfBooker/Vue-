import App from '../app.vue';
import index from '../views/index.vue';
import demo from '../views/demo.vue';
import test from '../views/test.vue';
import error from '../views/base/error.vue';

export default [
  {
    path: '/',
    component: App,
    redirect: '/index',
    children: [
      {
        path: 'index',
        component: index,
        name: 'index'
      },
      {
        path: 'demo',
        component: demo,
        name: 'demo'
      },
      {
        path: 'test',
        component: test,
        name: 'test'
      },
      // {
      //   path: '/*',
      //   component: error,
      //   name: 'error'
      // }
    ]
  },
]
