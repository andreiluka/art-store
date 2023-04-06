<script>
export default {
  name: 'pageTitle',
  props: {
     title: String
  }
}
</script>

<template>
  <div class="page-title">
    <h1 class="page-title__text">{{ title }}</h1>
  </div>
</template>

<style lang="scss" scoped>
.page-title {
  margin-bottom: rem(40);

  &__text {
    font-weight: 700;
    font-size: rem(24);
  }
}
</style>