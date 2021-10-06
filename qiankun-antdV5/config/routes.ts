let qiankunmain = '/qiankunmain'
export default [
  {
    path: qiankunmain+'/user',
    layout: false,
    routes: [
      {
        path: qiankunmain+'/user',
        routes: [
          {
            name: 'login',
            path: qiankunmain+'/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },
  {
    path: qiankunmain+'/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: qiankunmain+'/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: qiankunmain+'/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: qiankunmain+'/list',
    component: './TableList',
  },
  {
    path:  qiankunmain+'/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
