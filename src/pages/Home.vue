<template>

  <div class="content">

    <sticky-posts></sticky-posts>

  </div>

</template>

<script>
  import stickyPosts from '@/components/stickyPosts';
  
  export default {
    name: 'home',
    data() {
      return {
        logo__title: 'marketing y comunicación',
      };
    },
    created() {
      this.updateLogoTitle();
    },
    watch: {
      $route: 'updateLogoTitle',
    },
    methods: {
      updateLogoTitle() {
        this.$eventHub.$emit('change-logo__title', this.logo__title);
      },
    },
    components: {
      'sticky-posts': stickyPosts,
    },
  };
</script>

<style lang="scss" scoped>

</style>