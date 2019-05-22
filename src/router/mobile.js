import mobile from '../views/mobile';
import mobileIndex from '../views/mobile/index';
import footerTip from '../views/mobile/components/footerTip/index';
import calendar from '../views/mobile/components/calendar/calendar';

export default [
  {
    path: 'mobile',
    component: mobile,
    name: 'mobile',
    redirect: '/mobile',
    children: [
      {
        path: '',
        component: mobileIndex,
        name: 'mobileIndex',
      },
      {
        path: 'footerTip',
        component: footerTip,
        name: 'footerTip',
      },
      {
        path: 'calendar',
        component: calendar,
        name: 'calendar',
      }
    ]
  },
  
];
