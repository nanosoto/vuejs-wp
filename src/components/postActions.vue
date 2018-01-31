<template>

  <ul class="post__actions">
    <li class="post__like" v-on:click="isShow = !isShow"><div v-bind:class="{ isActive: isShow }" class="heart"></div> Like</li>
    <li class="post__share">Compartir</li>
  </ul>

</template>

<script>
  export default {
    data() {
      return {
        isShow: false,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .post__actions {
    display: flex;
    align-items: center;
    margin: 0 0 0 -15px;
    font-family: 'Raleway', sans-serif;

    li {
      display: flex;
      align-items: center;
      margin: 0 25px 0 0;
      font-size: calc(var(--line-height-base) * 0.7);
      line-height: calc(var(--line-height-base) * 1);
      color: #0bd0d9;
      font-style: italic;
      font-weight: 500;
      cursor: pointer;

      .heart {
        width: 50px;
        height: 50px;
        margin: 0 -10px 0 0;
        background: url("../assets/heart_cic.png") no-repeat;
        background-position: 0 0;
        cursor: pointer;
        transition: background-position 1s steps(28);
        transition-duration: 0s;
        
        &.isActive {
          transition-duration: 1s;
          background-position: -1400px 0;
        }
      }
    }
  }

  .post-item.sticky:first-child {
    .post__actions--sticky li {
      color: #FFF;

      .heart {
        width: 50px;
        height: 50px;
        margin: 0 -10px 0 0;
        background: url("../assets/heart_cic_white.png") no-repeat;
        background-position: 0 0;
        cursor: pointer;
        transition: background-position 1s steps(28);
        transition-duration: 0s;
        
        &.isActive {
          transition-duration: 1s;
          background-position: -1400px 0;
        }
      }
    }
  }
</style>
