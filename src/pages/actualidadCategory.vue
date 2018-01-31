<template>
    <div class="content">

      <!-- Contenido Actualidad -->
      <div class="actualidad__categorized">

        <div class="actualidad__list">
          <h1 class="h2-headline">{{ $route.params.catName }}</h1>
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
  import categoriesList from '@/components/categoriesList';
  import postActions from '@/components/postActions';

  export default {
    data() {
      return {
        posts: '',
        title: 'Category',
        endpoint: 'http://comunicaciones.cic.es/wp-json/wp/v2/posts?categories=',
        logo__title: 'actualidad',
      };
    },
    created() {
      this.getPosts();
    },
    watch: {
      $route: 'getPosts, updateLogoTitle, getCategory',
    },
    methods: {
      getPosts() {
        this.loading = true;
        axios.get(this.endpoint + this.$route.params.catID)
          .then((response) => {
            this.posts = response.data;
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
      'categories-list': categoriesList,
      'post-actions': postActions,
    },
  };
</script>

<style lang="scss" scoped>
  /** LAYOUT **/
    .actualidad__categorized {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: auto;
        grid-gap: 30px;
    }

    .actualidad__list {
      grid-area: 1 / 1 / end / 2;
    }

    .actualidad__sidebar {
      grid-area: 1 / 2 / end / end;
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

</style>