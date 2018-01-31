import Vue from 'vue';
import Router from 'vue-router';
import VeeValidate from 'vee-validate';

// Pages
import Home from '@/pages/Home';
import MarcaCIC from '@/pages/MarcaCIC';
import Descargas from '@/pages/Descargas';
import actualidad from '@/pages/actualidad';
import singlePost from '@/pages/SinglePost';
import actualidadCategory from '@/pages/actualidadCategory';

// Components
import navigation from '@/components/navigation';
import footerComponent from '@/components/footerComponent';
import singlePostMC from '@/components/singlePostMC';
import singlePostDownloads from '@/components/singlePostDownloads';
import defaultMC from '@/components/defaultMC';
import defaultDownloads from '@/components/defaultDownloads';

Vue.component('navigation', navigation);
Vue.component('footerComponent', footerComponent);

Vue.use(VeeValidate);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/actualidad',
      name: 'actualidad',
      component: actualidad,
    },
    {
      path: '/identidad_corporativa',
      name: 'MarcaCIC',
      component: MarcaCIC,

      children: [
        {
          path: '',
          name: 'defaultMC',
          component: defaultMC,
        },
        {
          path: '/identidad_corporativa/:postMCSlug',
          name: 'singlePostMC',
          component: singlePostMC,
        },
      ],
    },
    {
      path: '/descargas',
      name: 'Descargas',
      component: Descargas,

      children: [
        {
          path: '',
          name: 'defaultDownloads',
          component: defaultDownloads,
        },
        {
          path: '/descargas/:postMCSlug',
          name: 'singlePostDownloads',
          component: singlePostDownloads,
        },
      ],
    },
    /*
    {
      path: '*',
      name: 'Not found',
      component: notFound,
    },
    */
    {
      path: '/actualidad/:postSlug',
      name: 'post',
      component: singlePost,
    },
    {
      path: '/actualidad/:catSlug',
      name: 'cat',
      component: actualidadCategory,
    },
  ],
});
