<template>
  <div id="app" class="wrapper">
    <transition name="fade" mode="out-in" appear>
      <navigation></navigation>
    </transition>
    <transition name="fade" mode="out-in" appear>
      <router-view></router-view>
    </transition>
    <transition name="fade" mode="out-in" appear>
      <footerComponent></footerComponent>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
  //RESET
  //--------------------------------------------//
    html,body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline; }
    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {display: block;}
    body {line-height: 1;}
    ol, ul {list-style: none;}
    blockquote, q {quotes: none;}
    blockquote:before, blockquote:after, q:before, q:after {content: ''; content: none;}
    table {border-collapse: collapse; border-spacing: 0;}
    * {box-sizing: border-box; text-rendering: optimizeLegibility !important; -webkit-font-smoothing: antialiased !important;}

  //BASE
  //--------------------------------------------//
    :root {
      --body-background-color: #FFF;
      --font-size-base: 1.05rem;
      --line-height-base: 1.35rem;
      --body-text-color: #333;
      --grid-gutter: 1rem;
    }

    html {
      font-family: 'Open Sans', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    body {
      overflow-x: hidden; 
      overflow-y: auto;
      min-height: 100vh;
      background-color: var(--body-background-color, #FFF);
      font-size: var(--font-size-base, 1.6rem);
      line-height: calc(var(--line-height-base) * 1.4);
      color: var(--body-text-color, #333);

      font-size : var(--font-size-base);
      line-height : calc(var(--line-height-base) * 1.4);
      color : #81919a;
      letter-spacing : 0.14px;
    }

    ::-moz-selection {
      background-color: #0bd0d9;
      color: #FFF;
      text-shadow: none;
    }

    ::selection {
      background-color: #0bd0d9;
      color: #FFF;
      text-shadow: none;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    blockquote {
      padding: 30px 45px;
      margin: 20px 0;
      font-size: calc(var(--font-size-base) * 1.6);
      line-height: calc(var(--font-size-base) * 2.4);
      font-family: 'Raleway', sans-serif;
      color: #0bd0d9;
      font-style: italic;
      font-weight: 500;
      position: relative;

      &:before {
        content: '"';
        display: block;
        font-size: calc(var(--font-size-base) * 32);
        line-height: 1;
        position: absolute;
        top: -70px;
        left: -120px;
        opacity: .15;
      }
    }

  //UTILITY CLASSES
  //--------------------------------------------//
    .u__clear {
      float: left;
      clear: both;
      display: block;
    }

  //LAYOUT
  //--------------------------------------------//
    .navbar {grid-area: footer;}
    .sidebar {grid-area: sidebar;}
    .content {
      min-height: calc(100vh - 70px);
      grid-area: content;
    }
    .footer {grid-area: footer;}

    .wrapper {
      display: grid;
      grid-template-columns: 100px 1fr 100px;
      grid-template-rows: auto;
      grid-template-areas: 
        "header header header"
        ". content ."
        "footer footer footer";
      grid-gap: 0;
      padding: 70px 0 0;
    }

  //TYPOGRAPHY
  //--------------------------------------------//
    h1, h2, h3, h4, h5 {
      line-height: 1.2;
      font-family: 'Raleway', sans-serif;
    }

    h2, h3, h4, h5 {
      clear: both;
    }

    //h1,
    .h1-display {
      @extend .u__clear;

      background: linear-gradient(to right, #008fce, #0bd0d9);
      font-size: calc(var(--font-size-base) * 2.6);
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    //h2,
    .h2-headline {
      position:relative;
      float:none;
      overflow:hidden;
      font-size: calc(var(--font-size-base) * 1.7);
      font-weight: 600;
      color:#0bd0d9;
      letter-spacing: 0.7px;
      margin: 0 0 25px 0;

      &:after {
        content: '';
        position: absolute;
        top: var(--font-size-base);
        margin: 0 0 0 15px;
        width: 100%;
        height: 3px;
        background-color: #0bd0d9;
      }
    }

    //h3,
    .h3-title {
      font-size: calc(var(--font-size-base) * 1.3);
      font-weight: 600;
      color: #44546A;
    }

    //h4,
    .h4-subtitle {
      font-size: calc(var(--font-size-base) * 1.45);
      color: #677484;
    }

    //h5,
    .h5-link {
      font-size: var(--font-size-base);
      font-weight: 700;
      color: #91A1AA;
    }

  //BUTTONS
  //--------------------------------------------//
    .btn {
      position: relative;
      overflow: hidden;
      margin: 10px 0;
      box-shadow: none;
      border-width: 0;
      border: 2px solid transparent;
      border-radius: 2px;
      height: 35px;
      padding: 0 35px;
      line-height: 31px;
      background: transparent;
      background-image: none;
      font-size: var(--font-size-base);
      font-family: inherit;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.75px;
      color: #333;
      text-shadow: none;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
      white-space: nowrap;
      text-overflow: ellipsis;
      outline: none;

      &:hover,
      &:focus,
      &:active,
      &:active:focus {
        box-shadow: none;
        background-color: transparent;
        border-color: transparent;
        opacity: .6;
        outline: none;
      }

      &::-moz-focus-inner {border: 0;}

      .btn__icon {
        float: right;
        margin: -3px 0 0 10px;
        width: auto;
        height: 36px;
      }
    }

  //INPUTS
  //--------------------------------------------//
    .form-group {
      clear: both;
      margin: -22px 0;
      padding: 22px 0;

      .form-group__label {
        display: none;
        margin: 0 0 5px;
        font-weight: 500;
        color: #333333;
        cursor: default;
      }
      .form-group__input {
          overflow-x: hidden;
          margin: 0;
          box-shadow: none;
          border: 1px solid #d4d4d4;
          border-radius: 2px;
          height: 40px;
          padding: 0 15px;
          background-color: #FFF;
          font-size: 14px;
          font-family: 'Open Sans', sans-serif;
          color: #333333;
          resize: none;

          &:focus {
            box-shadow:none;
            border-color: #d4d4d4;
            outline: none;
          }

          &:-webkit-autofill {
            -webkit-box-shadow: 0 0 0px 1000px white inset;
          }

          &.form-group__textarea {
              overflow: hidden;
              border: 1px solid #d4d4d4;
              height: 131px;
              padding: 12px;
              resize: none;
          }

          &::placeholder {
            margin: 0 0 5px;
            font-weight: 500;
            color: #333333;
            cursor: default;
          }
      }
      .form-group__helper-text {
        display: none;
        margin: 5px 0 0;
        font-size: calc(var(--font-size-base) * 0.85);
        font-weight: 500;
        color: #4d4d4d;
        cursor: default;
      }

      .form-group__input.form-group__input--required {}
      .form-group__input.form-group__input--disabled {}
      .form-group__input.form-group__input--valid {}
      .form-group__input.form-group__input--invalid {}
    }

  //STYLED CONTENT
  //--------------------------------------------//
    .styled__content {
      ul {
        padding: 20px 40px;

        li{
          margin: 0 0 15px;
          position: relative;

          &:before{
            content: '';
            width: 7px;
            height: 7px;
            background-color: #008FCE;
            display: block;
            position: absolute;
            left: -22px;
            top: 11px;
            border-radius: 1px;
          }
        }
      }

      b, strong {
        font-weight: 700;
        color: #44546A;
      }

      a {
        text-decoration: underline;
        color: #44546A;

        &:hover {
          color: #0bd0d9;
        }
      }
    }

  /*TRANSITIONS
  .page-transition {
      &-enter-active {
        transition: transform 375ms cubic-bezier(0.0, 0.0, 0.2, 1) 205ms, opacity 205ms cubic-bezier(0.0, 0.0, 0.2, 1) 205ms;
      }
      &-leave-active {
        transition: transform 205ms cubic-bezier(0.0, 0.0, 0.2, 1), opacity 195ms cubic-bezier(0.0, 0.0, 0.2, 1);
      }
      &-enter {
        transform: translateY(20px);
        opacity: 0;
      }
      &-leave-to {
        transform: translateY(10px);
        opacity: 0;}
    }
    **/
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s ease 105ms;
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
    .child-view {
      position: absolute;
      transition: all .5s cubic-bezier(.55,0,.1,1);
    }
</style>
