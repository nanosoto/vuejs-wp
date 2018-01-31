<template>
  <div class="content">
    <div v-if="post" class="single-post">
      <div class="single-post__thumbnail-container">
        <parallax :speedFactor="0.30">
          <img class="single-post__thumbnail" v-bind:src="post.full">
        </parallax>
      </div>
      <div class="single-post__details-bar">
        <div class="single-post__info">
          <p>Por <a :href="'mailto:' + post.author_meta.user_email">{{ post.author_meta.display_name }}</a></p>
          <p><!--{{ post.date }}, -->{{ post.author_meta.description }}</p>
        </div>
        <post-actions></post-actions>
      </div>
      <div class="single-post__content">
        <h1 class="single-post__title">{{ post.title.rendered }}</h1>
        <h3 class="single-post__subtitle" v-html="post.excerpt.rendered"></h3>
        <div class="single-post__body styled__content" v-html="post.content.rendered"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import Parallax from 'vue-parallaxy';
  import postActions from '@/components/postActions';

  export default {
    data() {
      return {
        loading: false,
        post: '',
        endpoint: 'http://comunicaciones.cic.es/wp-json/wp/v2/posts/',
        logo__title: 'actualidad',
      };
    },
    created() {
      this.getPost(this.id);
      this.updateLogoTitle();
    },
    watch: {
      $route() {
        this.getPost(this.id);
        this.updateLogoTitle();
      },
    },
    methods: {
      getPost() {
        this.loading = true;
        axios(this.endpoint + this.$route.params.postID)
          .then((response) => {
            this.post = response.data;
            this.loading = false;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      updateLogoTitle() {
        this.$eventHub.$emit('change-logo__title', this.logo__title);
      },
    },
    components: {
      Parallax,
      'post-actions': postActions,
    },
  };
</script>

<style lang="scss" scoped>

  .single-post {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: auto;
    grid-gap: 0;
    margin: 0 0 130px;

    .single-post__thumbnail-container {
      overflow: hidden;
      grid-area: 1 / 1 / 2 / end;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      max-height: 500px;

      .Masthead {    
        min-height: 500px;
        height: 500px;
      }

    }
    .single-post__details-bar {
      grid-area: 2 / 1 / 3 / end;
      display: flex;
      border-top: 1px solid #e0e2e2;
      border-bottom: 1px solid #e0e2e2;
      font-family: 'Raleway', sans-serif;
      justify-content: space-between;
      align-items: center;
      margin: 0 0 65px;
      padding: 10px 0;
      
      .single-post__info p {
        font-size: calc(var(--line-height-base) * 0.7);
        line-height: calc(var(--line-height-base) * 1);
        color: #0bd0d9;
        font-style: italic;
        font-weight: 500;
      }

    }
    .single-post__content {
      grid-area: 3 / 2 / 4 / 3;

      .single-post__title {
        margin: 0 0 20px;
        background: none;
        font-size: calc(var(--font-size-base) * 2.4);
        line-height: calc(var(--font-size-base) * 3);
        font-weight: 700;
        letter-spacing: 0.5px;
        text-transform: inherit;
        color: #44546A;
        -webkit-background-clip: unset;
        -webkit-text-fill-color: inherit;
      }

      .single-post__subtitle {
          margin: 0 0 20px;
          font-size: calc(var(--font-size-base) * 1.6);
          line-height: calc(var(--font-size-base) * 2.4);
          font-weight: 400;
          color: #b1c2cc;
      }

      .single-post__body {
      }
    }
  }
</style>
