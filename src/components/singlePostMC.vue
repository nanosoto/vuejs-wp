<template>

  <div>
    <div v-if="post">
        <div v-html="post.content.rendered"></div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        post: '',
        endpoint: 'http://comunicaciones.cic.es/wp-json/wp/v2/pages/',
      };
    },
    created() {
      this.getPost(this.id);
    },
    watch: {
      $route() {
        this.getPost(this.id);
      },
    },
    methods: {
      getPost() {
        axios(this.endpoint + this.$route.params.postMCID)
          .then((response) => {
            this.post = response.data;
          });
      },
    },
  };
</script>

<style lang="scss" scoped>
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
