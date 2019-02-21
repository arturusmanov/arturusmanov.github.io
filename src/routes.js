import VueRouter from 'vue-router'

const Home = resolve => {
  require.ensure(['./pages/home.vue'], () => {
    resolve(
      require('./pages/home.vue')
    )
  })
}

const Maps = resolve => {
  require.ensure(['./pages/maps.vue'], () => {
    resolve(
      require('./pages/Maps.vue')
    )
  })
}

const Timer = resolve => {
  require.ensure(['./pages/timer.vue'], () => {
    resolve(
      require('./pages/timer.vue')
    )
  })
}

export default new VueRouter({
  routes:[
    {
      path: '',
      component: Home
    },
    {
      path: '/maps',
      component: Maps,
      name: 'maps'
    },
    {
      path: '/timer',
      component: Timer

    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history',

})
