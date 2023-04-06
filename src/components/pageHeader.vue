<script>
import pageNavigation from '@/components/pageNavigation.vue';
import pageSearch from '@/components/pageSearch.vue';
import { mapMutations } from "vuex";

export default {
  name: 'pageHeader',
  components: {
    pageNavigation,
    pageSearch
  },
  methods: {
    ...mapMutations(['TOGGLE_MENU', 'SEARCH_PAINTINGS']),
    activeNavFullscreen() {
      this.TOGGLE_MENU();
    },
    searchElement(value) {
      this.SEARCH_PAINTINGS(value)
    }
  }
}
</script>

<template>
  <header class="page-header">
    <div class="container">
      <div class="page-header__container">
        <div @click="activeNavFullscreen" class="page-header__hamburger-menu">
          <div class="page-header__hamburger-pic"></div>
        </div>
        <div class="page-header__navigation">
          <pageNavigation/>
        </div>
        <pageSearch 
          placeholderAttr="Поиск по названию картины"
          @searchInput="searchElement"
        />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.page-header {
  margin-bottom: rem(34);
  border-bottom: 1px solid $gray-color;
  
  &__container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: rem(24) 0;

    @include laptop {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    
    @include phones {
      flex-direction: row;
      justify-content: space-between;
    }
  }


  &__hamburger {
    
    &-menu {
      padding: 9px 5px 9px 0;
      cursor: pointer;
      transition: .3s;
      display: none;

      &:hover {
        opacity: 0.5;
      }

      @include phones {
        display: block;
      }
    }
    
    &-pic {
      background-color: $text-color;
      position: relative;
      width: 24px;
      height: 4px;

      &,
      &:before,
      &:after {
        width: 24px;
        height: 4px;
      }
  
      &:before,
      &:after {
        content: "";
        background-color: inherit;
        position: absolute;
        left: 0;
      }
  
      &:before {
        top: 200%;
      }
  
      &:after {
        bottom: 200%;
      }
    }
  }


  &__navigation {
    max-width: 704px;
    flex: 1 0 auto;

    @include laptop {
      margin-bottom: rem(24);
    }
  }
}
</style>