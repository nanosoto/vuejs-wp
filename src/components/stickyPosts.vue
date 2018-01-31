<template>

  <transition-group name="post-item" tag="div" class="featured__container">
    <article class="post-item sticky" v-for="post in stickyPosts" :key="post.id">
      <router-link class="post__thumbnail-container" :to="{ name: 'post', params: {postSlug: post.slug, postID: post.id} }">
        <img class="post__thumbnail" v-bind:src="post.full">
      </router-link>
      <div class="post__content">
        <router-link :to="{ name: 'post', params: {postID: post.id} }">
          <h2 class="post__title">{{ post.title.rendered }}</h2>
        </router-link>
        <p class="post__excerpt" v-html="post.excerpt.rendered"></p>
        <!--<post-actions class="post__actions--sticky"></post-actions>-->
      </div>
    </article>
  </transition-group>

</template>

<script>
  import axios from 'axios';
  import postActions from '@/components/postActions';

  export default {
    data() {
      return {
        stickyPosts: '',
        sticky: 'http://comunicaciones.cic.es/wp-json/wp/v2/posts?sticky=true',
      };
    },
    created() {
      this.getStickyPosts();
    },
    watch: {
      $route: 'getStickyPosts',
    },
    methods: {
      getStickyPosts() {
        axios.get(this.sticky)
          .then((response) => {
            this.stickyPosts = response.data;
          })
          .catch((error) => {
            console.log('-----error-------');
            console.log(error);
          });
      },
    },
    components: {
      'post-actions': postActions,
    },
  };
</script>

<style lang="scss" scoped>

  /** LAYOUT **/
    .featured__container {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        grid-template-rows: 250px 250px;
        grid-gap: 30px;
    }

    .post-item:first-child {
      grid-area: 1 / 1 / end / 2;
    }

    .post-item:nth-child(2) {}

    .post-item:nth-child(3) {}

    .post-item:nth-child(4) {}

    .post-item:nth-child(5) {}

  /** POST ITEM **/
    .post-item.sticky {
      display: flex;
      flex-direction: column;

      .post__thumbnail-container {
        flex-basis: 100%;
        overflow: hidden; 
        max-height: 560px;

        .post__thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .post__content {
        padding: 15px 0 0;

        .post__title {
          margin: 0;
          font-size: calc(var(--font-size-base) * 1.3);
          font-weight: 600;
          color: #44546A;
        }
        .post__excerpt {
          display: none;
        }
      }

      &:first-child {
        position: relative;

        .post__content {
          position: absolute; 
          bottom: 0;
          padding: 15px;

          .post__title {
            font-size: calc(var(--font-size-base) * 2);
            color: #FFF;
          }
          .post__excerpt {
            display: block;
            margin: 10px 0;
            color: rgba(255, 255, 255, .6);
          }
        }
      }
    }

  /** TRANSITION **/

    .post-item {
      transform: scale(1);
      opacity: 1;

      &-enter-active,
      &-leave-active {
        transition: transform 195ms cubic-bezier(0.4, 0.0, 0.2, 1), opacity 195ms cubic-bezier(0.4, 0.0, 0.2, 1);
      }

      &-enter,
      &-leave-to { 
        transform: scale(0.95);
        opacity: 0;
      }


      &:nth-child(1) {
          transition-delay: 100ms;
      }

      &:nth-child(2) {
          transition-delay: 150ms;
      }

      &:nth-child(3) {
          transition-delay: 250ms;
      }

      &:nth-child(4) {
          transition-delay: 350ms;
      }

      &:nth-child(5) {
          transition-delay: 450ms
      }
    }
</style>
