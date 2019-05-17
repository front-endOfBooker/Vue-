import App from '../app.vue';
import demo from '../views/demo.vue';
import test from '../views/test.vue'

export default [
  {
    path: '/',
    component: App,
    name: 'app',
    children: [
      {
        path: 'demo',
        component: demo,
        name: 'demo'
      },
      // {
      //   path: 'test',
      //   component: test,
      //   name: 'test'
      // }
    ]
  },
]
