<template>
    <div class="content">

      <!-- Loading -->
      <div v-if="loading">
        <div class="white-widget grey-bg author-area">
          <div class="auth-info row">
            <div class="timeline-wrapper">
              <div class="timeline-item">
                  <div class="animated-background">
                      <div class="background-masker header-top"></div>
                      <div class="background-masker header-left"></div>
                      <div class="background-masker header-right"></div>
                      <div class="background-masker header-bottom"></div>
                      <div class="background-masker subheader-left"></div>
                      <div class="background-masker subheader-right"></div>
                      <div class="background-masker subheader-bottom"></div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contenido Actualidad -->
      <div v-if="!loading" class="actualidad">

        <div class="actualidad__featured">
          <h1 class="h2-headline">Lo + destacado</h1>
          <sticky-posts></sticky-posts>
        </div>

        <event-list></event-list>

        <div class="actualidad__list">
          <h1 class="h2-headline">Actualidad</h1>
          <article class="post-item" v-for="post in posts">
            <router-link class="post__thumbnail-container" :to="{ name: 'post', params: {postSlug: post.slug, postID: post.id} }">
              <img class="post__thumbnail" v-bind:src="post.full">
            </router-link>
            <div class="post__content">
              <ul class="post__tags">
                <li v-for="category in post.cats">
                  #{{ category.name }}
                </li>
              </ul>
              <router-link :to="{ name: 'post', params: {postSlug: post.slug, postID: post.id, postID: post.id} }">
                <h2 class="post__title">{{ post.title.rendered }}</h2>
              </router-link>
              <p class="post__excerpt" v-html="post.excerpt.rendered"></p>
              <post-actions></post-actions>
            </div>
          </article>
        </div>

        <div class="actualidad__sidebar">
          <h1 class="h2-headline">Topics</h1>
          <categories-list></categories-list>
        </div>
      </div>

    </div>
</template>

<script>
  import axios from 'axios';
  import stickyPosts from '@/components/stickyPosts';
  import categoriesList from '@/components/categoriesList';
  import postActions from '@/components/postActions';
  import eventList from '@/components/eventList';

  export default {
    data() {
      return {
        loading: false,
        posts: '',
        events: '',
        endpoint: 'http://comunicaciones.cic.es/wp-json/wp/v2/posts?sticky=false',
        eventsEndpoint: 'http://comunicaciones.cic.es/wp-json/wp/v2/event',
        logo__title: 'actualidad',
      };
    },
    created() {
      this.getPosts();
      this.getEvents();
      this.updateLogoTitle();
    },
    watch: {
      $route: 'getPosts, getEvents, updateLogoTitle',
    },
    methods: {
      getPosts() {
        this.loading = true;
        axios.get(this.endpoint)
          .then((response) => {
            this.posts = response.data;
            this.loading = false;
          })
          .catch((error) => {
            console.log('-----error-------');
            console.log(error);
          });
      },
      getEvents() {
        this.loading = true;
        axios.get(this.eventsEndpoint)
          .then((response) => {
            this.events = response.data;
            this.loading = false;
          })
          .catch((error) => {
            console.log('-----error-------');
            console.log(error);
          });
      },
      updateLogoTitle() {
        this.$eventHub.$emit('change-logo__title', this.logo__title);
      },
    },
    components: {
      'sticky-posts': stickyPosts,
      'categories-list': categoriesList,
      'post-actions': postActions,
      'event-list': eventList,
    },
  };
</script>

<style lang="scss" scoped>
  /** LAYOUT **/
    .actualidad {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: auto;
        grid-gap: 30px;
    }

    .actualidad__featured {
      grid-area: 1 / 1 / 2 / end;
    }

    .events__list {
      grid-area: 2 / 1 / 3 / end;
    }

    .actualidad__list {
      grid-area: 3 / 1 / end / 2;
      z-index: 1;
    }

    .actualidad__sidebar {
      grid-area: 3 / 2 / end / end;
      z-index: 1;
    }

  /** POST ITEM **/
    .post-item {
      display: flex;
      margin: 0 0 45px;
      border-top: 1px solid #e0e2e2;

      .post__thumbnail-container {
        flex: 0 0 300px;
        overflow: hidden;
        height: 200px;
        margin: 15px 0 0;

        .post__thumbnail {
            object-fit: cover;
            width: 100%;
            height: 200px;
        }
      }
      .post__content {
        padding: 15px 30px;

        .post__tags {
          margin: 0 0 10px 0;
          font-size: calc(var(--line-height-base) * 0.7);
          line-height: calc(var(--line-height-base) * 1);
          font-family: 'Raleway', sans-serif;
          color: #0bd0d9;
          font-style: italic;
          font-weight: 500;

          li {
            display: inline-block;
            margin: 0 15px 0 0;
          }
        }
        .post__title {
          margin: 0 0 10px 0;
          font-size: calc(var(--font-size-base) * 1.3);
          font-weight: 600;
          color: #44546A;
        }
        .post__excerpt {
          font-size: var(--font-size-base);
        }
      }

      &:first-of-type {
        border: none;
      }

      &:last-child {
        margin: 0;
      }
    }

  /** LOADING **/
    .timeline-item {
      background: #fff;
      border-bottom: 1px solid #f2f2f2;
      padding: 25px;
      margin: 0 auto;
    }

    @keyframes placeHolderShimmer{
      0%{
        background-position: -468px 0
      }
      100%{
        background-position: 468px 0
      }
    }

    .animated-background {
      animation-duration: 1s;
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
      animation-name: placeHolderShimmer;
      animation-timing-function: linear;
      background: #f6f7f8;
      background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
      background-size: 800px 104px;
      height: 40px;
      position: relative;
    }

    .background-masker {
      background: #fff;
      position: absolute;
    }

    /* Every thing below this is just positioning */

    .background-masker.header-top,
    .background-masker.header-bottom,
    .background-masker.subheader-bottom {
      top: 0;
      left: 40px;
      right: 0;
      height: 10px;
    }

    .background-masker.header-left,
    .background-masker.subheader-left,
    .background-masker.header-right,
    .background-masker.subheader-right {
      top: 10px;
      left: 40px;
      height: 8px;
      width: 10px;
    }

    .background-masker.header-bottom {
      top: 18px;
      height: 6px;
    }

    .background-masker.subheader-left,
    .background-masker.subheader-right {
      top: 24px;
      height: 6px;
    }


    .background-masker.header-right,
    .background-masker.subheader-right {
      width: auto;
      left: 300px;
      right: 0;
    }

    .background-masker.subheader-right {
      left: 230px;
    }

    .background-masker.subheader-bottom {
      top: 30px;
      height: 10px;
    }

    .background-masker.content-top,
    .background-masker.content-second-line,
    .background-masker.content-third-line,
    .background-masker.content-second-end,
    .background-masker.content-third-end,
    .background-masker.content-first-end {
      top: 40px;
      left: 0;
      right: 0;
      height: 6px;
    }

    .background-masker.content-top {
      height:20px;
    }

    .background-masker.content-first-end,
    .background-masker.content-second-end,
    .background-masker.content-third-end{
      width: auto;
      left: 380px;
      right: 0;
      top: 60px;
      height: 8px;
    }

    .background-masker.content-second-line  {
      top: 68px;
    }

    .background-masker.content-second-end {
      left: 420px;
      top: 74px;
    }

    .background-masker.content-third-line {
      top: 82px;
    }

    .background-masker.content-third-end {
      left: 300px;
      top: 88px;
  }
</style>