<template>
  <header class="navbar">

      <div class="menu__trigger">
        <div class="hamburger-menu">
            <div class="bar" :class="{ animate: !menuBtnOpen }"></div> 
        </div>
        <span @click="openMenu" :class="{ caster: menuBtnOpen }" v-if="menuBtnOpen">Menú</span>
        <span @click="closeMenu" v-else>Cerrar</span>
      </div>

      <div class="navbar__logo">
          <router-link class="logo__icon" to="/">
            <img class="logo__icon__img" src="../assets/logo.svg">
          </router-link>
          <span class="logo__title">{{ logo__title }}</span>
      </div>
      <ul class="navbar__social">
        <li class="social__item">
          <a target="_blank" href="https://twitter.com/CICactualidad">
            <img  class="social__icon" src="../assets/twitter_logo.svg" alt="">
          </a>
        </li>
        <li class="social__item">
          <a target="_blank" href="https://www.facebook.com/CIC.Consulting/">
            <img  class="social__icon" src="../assets/facebook_logo.svg" alt="">
          </a>
        </li>
        <li class="social__item">
          <a target="_blank" href="https://www.linkedin.com/company/2157627/">
            <img  class="social__icon" src="../assets/linkedin_logo.svg" alt="">
          </a>
        </li>
      </ul>
      <div class="search__trigger">
        <img class="search__icon" src="../assets/search.svg">
      </div>
      <transition name="menu-fade">
        <div class="menu__navigation" v-if="showMenu">
            <ul class="navigation__list">
                <li v-on:click="closeMenu" class="navigation__item">
                    <span></span>
                    <router-link to="/actualidad">
                      Actualidad
                    </router-link>
                </li>
                <li v-on:click="closeMenu" class="navigation__item">
                    <span></span>
                    <router-link to="/descargas">
                      Descargas
                    </router-link>
                </li>
                <li v-on:click="closeMenu" class="navigation__item">
                    <span></span>
                    <router-link to="/identidad_corporativa">
                      Identidad corporativa
                    </router-link>
                </li>
            </ul>
            <div class="navigation__contact">
                <p>Para ponerte en contacto con nosotros puedes mandarnos un correo a marketing@cic.es o diseno@cic.es</p>
                <p>También puedes rellenar el siguiente formulario y contarnos qué es lo que necesitas y cómo podemos ayudarte.</p>
            </div>
        </div>
      </transition>
      <div class="overlay" v-if="showOverlay" v-on:click="closeMenu"></div>
  </header>
</template>

<script>
  export default {
    name: 'navigation',
    data() {
      return {
        showMenu: false,
        menuBtnOpen: true,
        showOverlay: false,
        logo__title: 'marketing y comunicación',
      };
    },
    created() {
      this.$eventHub.$on('change-logo__title', this.changeLogoTitle);
    },
    beforeDestroy() {
      this.$eventHub.$off('change-logo__title');
    },
    methods: {
      openMenu() {
        this.showMenu = true;
        this.menuBtnOpen = false;
        this.showOverlay = true;
      },
      closeMenu() {
        this.showMenu = false;
        this.menuBtnOpen = true;
        this.showOverlay = false;
      },
      changeLogoTitle(logoTitle) {
        this.logo__title = logoTitle;
      },
    },
  };
</script>

<style lang="scss">
  //HEADER
  //--------------------------------------------//
    .navbar {
      position: fixed;
      z-index:10;
      top: 0;
      left: 0;
      display: flex;
      justify-content: space-around;
      align-items:center;
      width: 100%;
      min-height: 70px;
      padding: 0 100px;
      background-color: #FFF;

      .menu__trigger {
        position: relative;
        width: 84px;
        cursor: pointer;

        $bar-width: 30px;
        $bar-height: 3px;
        $bar-spacing: 8px;

        .hamburger-menu {
          pointer-events: none;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: $bar-width;
          height: $bar-height + $bar-spacing*2;
          cursor: pointer;
          margin: auto 0;
        }

        .bar,
        .bar:after,
        .bar:before {
          width: $bar-width;
          height: $bar-height;
          border-radius: 8px;
        }

        .bar {
          position: relative;
          transform: translateY($bar-spacing);
          background: #0bd0d9;
          transition: all 0ms 195ms;
          
          &.animate {
            background: rgba(255, 255, 255, 0); 
          }
        }

        .bar:before {
          content: "";
          position: absolute;
          left: 0;
          bottom: $bar-spacing;
          background: #0bd0d9;
          transition: bottom 195ms 195ms cubic-bezier(0.23, 1, 0.32, 1), transform 195ms cubic-bezier(0.23, 1, 0.32, 1);
        }

        .bar:after {
          content: "";
          position: absolute;
          left: 0;
          top: $bar-spacing;
          background: #0bd0d9;
          transition: top 195ms 195ms cubic-bezier(0.23, 1, 0.32, 1), transform 195ms cubic-bezier(0.23, 1, 0.32, 1);
        }

        .bar.animate:after {
          top: 0;
          transform: rotate(45deg);
          transition: top 195ms cubic-bezier(0.23, 1, 0.32, 1), transform 195ms 195ms cubic-bezier(0.23, 1, 0.32, 1);;
        }

        .bar.animate:before {
          bottom: 0;
          transform: rotate(-45deg);
          transition: bottom 195ms cubic-bezier(0.23, 1, 0.32, 1), transform 195ms 195ms cubic-bezier(0.23, 1, 0.32, 1);;
        }

        span {
          padding: 0 0 0 40px;
          font-size: calc(var(--line-height-base) * 0.7);
          line-height: calc(var(--line-height-base) * 1);
          font-family: 'Raleway', sans-serif;
          color: #0bd0d9;
          font-style: italic;
          font-weight: 500;
        }
      }

      &__logo {
        flex-grow: 1;

        display: flex;
        align-items: center;
        justify-content: center;
        width: auto;

        .logo__icon {
          margin: 0 15px 0 0;
          border-right: 2px solid #0bd0d9;
          height: 24px;
          padding: 0 15px 0 0;

          .logo__icon__img {
            width: auto;
            height: 24px;
          }
        }
        .logo__title {
          height: 22px;
          font-size: 22px;
          line-height: 1;
          font-family: 'Raleway', sans-serif;
          text-align:left;
          color: #008FCE;
          white-space: nowrap;
        }
      }
      .navbar__social {
        display: flex;
        align-items: center;
        justify-content: center;

        .social__item {
          display: inline-block;
            a {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          .social__icon {
            width: auto;
            height: 30px;
          }
        }
      }
      .search__trigger {
        display: flex;
        align-items: center;

        .search__icon {
          width: auto;
          height: 35px;
        }
      }
      .menu__navigation {
        position: absolute;
        z-index: -1;
        top: 70px;
        display: flex;
        align-items: center;
        width: 100%;
        height: auto;
        padding: 60px 100px;
        background-color: #FFF;

        .navigation__list {
          flex-grow: 0;
          flex-shrink: 0;
          flex-basis: 50%;

          .navigation__item {
            font-size: calc(var(--font-size-base) * 1.8);
            line-height: calc(var(--font-size-base) * 3.4);
            font-family: 'Raleway', sans-serif;
            font-weight: 600;
            font-style: italic;
            color: #44546a;

            &:hover {
              color: #0bd0d9;
            }

            span {
              display: inline-block;
              margin: 0 10px 0 0;
              border-radius: 8px;
              width: 30px;
              height: 4px;
              background-color: #0bd0d9;
            }
          }
        }
        .navigation__contact {
          flex-grow: 0;
          flex-shrink: 0;
          flex-basis: 50%;
          text-align: right;
        }
      }
    }
    .overlay {
        position: fixed;
        z-index: -2;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: transparent;
        // background: linear-gradient(to right, #008fce, #0bd0d9);
    }

    .menu-fade {
      &-enter-active {
        transition: transform 225ms cubic-bezier(0.0, 0.0, 0.2, 1), opacity 195ms cubic-bezier(0.0, 0.0, 0.2, 1);
      }
      &-leave-active {
        transition: all 195ms cubic-bezier(0.4, 0.0, 0.6, 1);
      }
      &-enter {
        transform: translateY(-60px);
        opacity: 0;
      }
      &-leave-to {
        transform: translateY(-20px);
        opacity: 0;}
    }
</style>
