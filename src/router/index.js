import App from '../app.vue';
import index from '../views/base/index.vue';
import list from '../views/base/list.vue';
import demo from '../views/demo.vue';
import web from '../views/web.vue';
import mobile from '../views/mobile.vue';
import error from '../views/base/error.vue';
import building from '../views/base/building.vue';

export default [
  {
    path: '/',
    component: index,
    redirect: '/list',
    children: [
      {
        path: 'list',
        component: list,
        name: 'list'
      },
      {
        path: 'demo',
        component: demo,
        name: 'demo'
      },
      {
        path: 'web',
        component: web,
        name: 'web'
      },
      {
        path: 'mobile',
        component: mobile,
        name: 'mobile'
      },
      {
        path: 'building',
        component: building,
        name: 'building'
      },
      // {
      //   path: '/*',
      //   component: error,
      //   name: 'error'
      // }
    ]
  },
]
