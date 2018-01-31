<template>
  
  <div>
    <ul>
      <li v-for="cat in categories">
        <router-link :to="{ name: 'cat', params: {catSlug: cat.slug, catID: cat.id, catName: cat.name} }">
          #{{ cat.slug }}
        </router-link>
      </li>
    </ul>
  </div>

</template>
<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        categories: '',
        endpoint: 'http://comunicaciones.cic.es/wp-json/wp/v2/categories',
      };
    },
    created() {
      this.getCategories();
    },
    watch: {
      $route: 'getCategories',
    },
    methods: {
      getCategories() {
        axios.get(this.endpoint)
          .then((response) => {
            this.categories = response.data;
          })
          .catch((error) => {
            console.log('-----error-------');
            console.log(error);
          });
      },
    },
  };
</script>
