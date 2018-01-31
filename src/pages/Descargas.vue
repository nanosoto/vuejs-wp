<template>
  <div class="content hero__two-columns">
    <div class="hero">
      <parallax :speedFactor="0.30">
        <img class="hero__img" src="../assets/bg.jpg">
      </parallax>
      <ul class="breadcrumbs">
        <li><a href="#">Descargas</a></li>
      </ul>
    </div>
    <div class="sidebar one_third">

      <sidebar-downloads></sidebar-downloads>
      
    </div>
    <div class="content two_thirds">

      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
      
    </div>
  </div>
</template>

<script>
  import Parallax from 'vue-parallaxy';
  import sidebarPostDownloads from '@/components/sidebarPostDownloads';

  export default {
    name: 'marcaCIC',
    data() {
      return {
        logo__title: 'descargas',
      };
    },
    created() {
      this.updateLogoTitle();
    },
    watch: {
      $route: 'updateLogoTitle',
    },
    methods: {
      updateLogoTitle() {
        this.$eventHub.$emit('change-logo__title', this.logo__title);
      },
    },
    components: {
      Parallax,
      'sidebar-downloads': sidebarPostDownloads,
    },
  };
</script>

<style lang="scss">
  .one_third {
    grid-area: one_third;
    padding: 0 0 0 45px;
  }
  .two_thirds {grid-area: two_thirds;}
  .hero {
    grid-area: hero;
    overflow: hidden;
    border-radius: 10px;
    max-height: 350px;
    margin: 0 0 45px;
    position: relative;

    .Masthead {min-height: unset !important; height: 350px !important;}
    .hero__img {
      object-fit: cover;
      width: 100%;
    }
  }
  .hero__two-columns {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "hero hero hero" 
      "one_third two_thirds two_thirds";
    grid-gap: 0;
    padding: 0;
  }
  .breadcrumbs {
    position: absolute;
    color: rgba(255, 255, 255, .6);
    bottom: 45px;
    left: 45px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    list-style: none;
    text-transform: uppercase;
    font-size: calc(var(--font-size-base) * 1.4);

    li {
      display: inline-block;

      &:before {
        content: '>';
        margin: 0 10px 0 5px;
      }

      &:first-child {
        &:before {
          content: none;
        }
      }
      &:last-child {
        pointer-events: none;
        color: #FFF;
        cursor: default;
      }

      a:hover {color: #FFF;}
    }
  }
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>