<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: 'pageNavigation',
  computed: {
    ...mapState({
      navFullscreen: state => state.navFullscreen,
      navItems: state => state.navItems
    })
  },
  methods: {
    ...mapMutations(['TOGGLE_MENU']),
    hideFullscreen() {
      this.TOGGLE_MENU();
    }
  }
}
</script>

<template>
  <nav :class="['page-navigation', {'page-navigation--fullscreen':navFullscreen}]">
    <ul class="page-navigation__list">
      <li 
        class="page-navigation__item"
        v-for="(navItem, indexItem) in navItems" 
        :key="indexItem"
      >
        <a href="#" @click="hideFullscreen" class="page-navigation__link">{{ navItem.navName }}</a>
      </li>
    </ul>
    <div @click="hideFullscreen" class="page-navigation__cross"></div>
  </nav>
</template>

<style lang="scss" scoped>
.page-navigation {  
  @include phones {
    display: none;
  }

  &__list {
    display: flex;
    white-space: nowrap;
  }

  &__item {
    margin-right: 6.8%;
    transition: 0.3s;
    
    &:last-child {
      margin-right: 0;
    }
    
    &:hover {
      opacity: 0.5;
    }
    
    @include laptop {
      margin-right: rem(40);
    }
  }

  &__link {
    text-decoration: none;
    color: inherit;
  }


  &--fullscreen {
    display: block;
    background-color: white;
    font-size: 22px;
    z-index: 10;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;


    .page-navigation__list {
      flex-direction: column;
      align-items: center;
      padding: 70px 0;
    }

    .page-navigation__item {
      margin-right: 0;
      margin-bottom: 30px;
    }
    
    .page-navigation__cross {
      display: flex;
      transform: rotateZ(45deg);
      cursor: pointer;
      position: absolute;
      top: 35px;
      right: 35px;

      &,
      &:before {
        content: '';
        width: 27px;
        height: 6px;
        background-color: $text-color;
        transition: 0.3s;
      }

      &:before {
        transform: rotateZ(90deg);
      }

      &:hover {

        &,
        &:before {
          background-color: $light-gray-color;
        }
      }
    }
  }
}
</style>