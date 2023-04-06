<script>
import pageButton from '@/components/pageButton.vue';

export default {
  name: 'pageSearch',
  components: {
    pageButton
  },
  props: {
    placeholderAttr: {
      type: String,
      default: "Поиск"
    },
  }
}
</script>

<template>
  <div class="page-search">
    <input 
      class="page-search__input" 
      type="text" 
      :placeholder="placeholderAttr"
      @input="$emit('searchInput', $event.target.value)"
    >
    <pageButton title="Найти"/>
  </div>
</template>

<style lang="scss" scoped>
.page-search {
  display: flex;
  font-size: rem(14);

  @include phones {
    flex: 1 0 auto;
  }

  &__input {
    padding: 1em 4.3em 1em 1.14em;
    border: 1px solid $gray-color;
    background-color: transparent;
    outline: none;
    min-width: rem(295);
    
    &::placeholder {
      color: $dark-gray-color;
    }
    
    &:focus {
      border: 1px solid $light-gray-color;
    }

    @include phones {
      min-width: auto;
      padding: 1em 1.8em 1em 1em;
      flex: 1;
    }
  }
}
</style>