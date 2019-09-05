import App from '../app.vue';
import index from '../views/base/index.vue';
import list from '../views/base/list.vue';
import demo from '../views/demo.vue';
import error from '../views/base/error.vue';
import building from '../views/base/building.vue';

import mobile from './mobile';
import web from './web';

import chart from '../views/web/chart.vue';


let routes = [
  {
    path: '/',
    component: index,
    redirect: '/list',
    name: 'Index',
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
        path: 'building',
        component: building,
        name: 'building'
      },
      {
        path: 'chart',
        component: chart,
        name: 'chart'
      },
      // {
      //   path: '/*',
      //   component: error,
      //   name: 'error'
      // }
    ]
  },
]

routes[0].children = [...routes[0].children, ...mobile, ...web]
export default routes
