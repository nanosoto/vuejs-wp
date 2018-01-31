<template>
  <footer class="footer">
      <footer-form></footer-form>
      <div class="footer__bottom">
          <img src="../assets/footer__bg.svg" alt="" class="bottom__bg">
          <div class="bottom__info">
              <img src="../assets/footer__logo.svg" alt="" class="bottom__info__logo">
              <p class="bottom__info__details">
                  CIC Consulting Informático · +34 902 269 017 · marketing@cic.es</br>PCTCAN, Isabel Torres, 3 , 39011 - Santander, España
              </p>
          </div>
          <ul class="bottom__ribbon">
              <li class="ribbon__dark-blue"></li>
              <li class="ribbon__blue"></li>
              <li class="ribbon__cic-blue"></li>
              <li class="ribbon__turquoise"></li>
              <li class="ribbon__green"></li>
          </ul>
      </div>
  </footer>
</template>

<script>
  import footerForm from '@/components/footerForm';

  export default {
    name: 'footerComponent',
    components: {
      'footer-form': footerForm,
    },
  };
</script>

<style lang="scss">
  //FOOTER
  //--------------------------------------------//
    .footer {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: linear-gradient(to right, #008fce, #0bd0d9);
      text-align: center;
      color: #FFF;
    
      .footer__contact {
        width: 100vw;
        max-width: 992px;
        padding: 100px 0;
        text-align: left;

        .contact__title {
          float: none;
          background: none;
          -webkit-background-clip: text;
          -webkit-text-fill-color: #FFF;
        }
        .contact__description {
          color: rgba(255, 255, 255, .6);

          a {
            color:#FFF;
            text-decoration:none;
          }
        }
        .contact__form {
          position: relative; 
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto;
          width: 100%;
          padding: 90px 0 60px;

          &:after {
            content: '';
            position: absolute;
            top: -50px;
            right: -150px;
            display: block;
            width: 300px;
            height: 300px;
            background-image: url('../assets/rocket.svg');
            background-size: cover;
            opacity: .4;
          }

          .contact__nombre {
            grid-area: 1 / 1 / 2 / 2;

            .form-group__input {
              border-right: 2px solid #FFF;
            }
          }

          .contact__email {
            grid-area: 1 / 2 / 2 / 3;
          }

          .contact__mensaje {
            grid-area: 2 / 1 / 3 / 3;
          }

          .contact__button {
            grid-area: 3 / 2 / 4 / 3;

            &.btn {
              padding: 0;
              text-align: right;
              color: #FFF;
            }
          }

          .form-group__input {
            border: 0;
            border-radius: 0;
            border-bottom: 2px solid #FFF;
            width: 100%;
            padding: 24px 12px;
            background-color: transparent;
            color: #FFF;

            &::placeholder {
              font-size: var(--font-size-base);
              font-family: inherit;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.75px;
              color: #FFF;
              text-shadow: none;
            }
          }
        }
      }
      .footer__bottom {
        position: relative;
        width: 100vw;
        min-height: 300px;

        .bottom__bg {
          bottom: 0;
          left: 0;
          position: absolute;
          width: 100vw;
          height: auto;
        }
        .bottom__info {
          position: absolute;
          bottom: 50px;
          left: 0;
          width: 100vw;
          text-align: center;

          .bottom__info__logo {
            width: auto;
            height: 45px;
          }
          .bottom__info__details {
            float: none;
            font-size: calc(var(--font-size-base) * 0.8);
            letter-spacing: 0;
            color: #91a1aa;
          }
        }
        .bottom__ribbon {
          position: absolute;
          z-index: 10;
          bottom: 0;
          left: 0;
          display: flex;
          justify-content:center;
          width: 100vw;

          li[class^="ribbon__"] {
            height: 10px;
            background-color: #009ed8;
            flex-grow: 1;

            &.ribbon__dark-blue {background-color: #44546a;}
            &.ribbon__blue {background-color: #0f6ec8;}
            &.ribbon__turquoise {background-color: #0bd0d9;}
            &.ribbon__green {background-color: #10cf9b;}
          }
        }
      }
    }
</style>
