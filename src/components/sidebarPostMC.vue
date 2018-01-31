<template>
    
    <transition name="slide-fade" mode="out-in">
      <ul v-if="posts && posts.length">
        <li v-for="post in posts">
          <router-link :to="{ name: 'singlePostMC', params: {postMCSlug: post.post_name, postMCID: post.ID} }">
            {{ post.post_title }}
          </router-link>
        </li>
      </ul>
      <div v-else>
        <sidebar-default></sidebar-default>
      </div>
    </transition>
  
</template>

<script>
  import axios from 'axios';
  import sidebarPostDefaultMC from '@/components/sidebarPostDefaultMC';
  
  export default {
    data() {
      return {
        endpoint: 'http://comunicaciones.cic.es/wp-json/wp/v2/get_children_of/',
        MCendpoint: 'http://comunicaciones.cic.es/wp-json/wp/v2/get_children_of/24',
        posts: '',
      };
    },
    created() {
      this.getPosts(this.id);
    },
    watch: {
      $route() {
        this.getPosts(this.id);
      },
    },
    methods: {
      getPosts() {
        axios.get(this.endpoint + this.$route.params.postMCID)
          .then((response) => {
            this.posts = response.data;
          });
      },
    },
    components: {
      'sidebar-default': sidebarPostDefaultMC,
    },
  };
</script>

<style lang="scss" scoped>

</style>
