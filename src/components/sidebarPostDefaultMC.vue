<template>

  <ul>
    <li v-for="post in posts">
      <router-link :to="{ name: 'singlePostMC', params: {postMCSlug: post.post_name, postMCID: post.ID} }">
        {{ post.post_title }} 
      </router-link>
    </li>
  </ul>
  
</template>

<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        endpoint: 'http://comunicaciones.cic.es/wp-json/wp/v2/get_children_of/24',
        posts: '',
      };
    },
    created() {
      this.getPosts();
    },
    methods: {
      getPosts() {
        axios.get(this.endpoint)
          .then((response) => {
            this.posts = response.data;
          });
      },
    },
  };
</script>

<style lang="scss" scoped>

</style>
