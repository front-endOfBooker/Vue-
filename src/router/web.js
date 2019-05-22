import web from '..//views/web.vue'
import webIndex from '../views/web/index.vue'

export default [
  {
    path: 'web',
    component: web,
    name: 'web',
    redirect: '/web',
    children: [
      {
        path: '',
        component: webIndex,
        name: 'webIndex'
      }
    ]
  }
]
