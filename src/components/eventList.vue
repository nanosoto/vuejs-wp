<template>

  <div class="events__list">
    <h1 class="events__list__title h2-headline">Agenda</h1>
    <carousel :perPage="3" :paginationEnabled="false" :navigationEnabled="true" class="events__container">
      <slide v-for="event in events" class="event-item">
        <div class="event-item__wrapper">
          <h2 class="event__title">{{ event.event_name }}</h2>
          <span class="event__date">
            <span class="event__day">{{ event.event_start_date.substring(8, 10) }}</span>/<span class="event__month">{{ event.event_start_date.substring(5, 7) }}</span>
          </span>
          <p class="event__content" v-html="event.post_content"></p>
        </div>
      </slide>
    </carousel>
    <img src="../assets/footer__bg.svg" alt="" class="bottom__bg">
  </div>

</template>

<script>
  import axios from 'axios';
  import { Carousel, Slide } from 'vue-carousel';

  export default {
    data() {
      return {
        events: '',
        eventsEndpoint: 'http://comunicaciones.cic.es/wp-json/wp/v2/list_events',
        day: '',
        month: '',
      };
    },
    created() {
      this.getEvents();
    },
    watch: {
      $route: 'getEvents',
    },
    methods: {
      getEvents() {
        axios.get(this.eventsEndpoint)
        .then((response) => {
          this.events = response.data;
        })
        .catch((error) => {
          console.log('-----error-------');
          console.log(error);
        });
      },
      getDay() {},
    },
    components: {
      Carousel,
      Slide,
    },
  };
</script>

<style lang="scss">
    .events__list {
      margin: 50px -100px -100px;
      padding: 100px 100px 400px;
      background: linear-gradient(to right, #008fce, #0bd0d9);
      position: relative;

      .events__list__title {
        color: #FFF;
        margin: 0 0 45px 0;

        &:after {background: linear-gradient(to right, rgba(255, 255, 255, .6), rgba(255, 255, 255, 0));}
      }

      .events__container {

        .event-item {
          padding: 0 40px 0 0;
          color: rgba(255, 255, 255, .7);
          

          .event-item__wrapper {
            background-color: rgba(255, 255, 255, .1);
            padding: 45px;
            border-radius: 10px;
          }

          .event__title {
            font-size: calc(var(--font-size-base) * 1.8);
            font-weight: 600;
            color: #FFF;
            letter-spacing: 0.7px;
          }

          .event__date {
            font-size: 28px;
            font-weight: 300;
            color: rgba(255, 255, 255, .4);
          }

          .event__content {
            display: block;
            display: -webkit-box;
            height: 86.4px;
            margin: 0 auto;
            font-size: 16px;
            line-height: 1.8;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          &:last-child {margin: 0;}
        }
      }

      .bottom__bg {
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        transform: rotateY(180deg);
        pointer-events: none;
      }
    }
    
    .VueCarousel {
      .VueCarousel-wrapper {overflow: visible;}
      .VueCarousel-navigation {
        width: 0px;
        height: 30px;
        position: absolute;
        bottom: -80px;
        right: 30px;

        .VueCarousel-navigation-button {color: #FFF !important;}
      }
    }
</style>
