<script>
export default {
  name: 'pageSlider',
  props: {
    images: []
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  computed: {
    newTransform() {
      const step = this.currentIndex * 100;
      return `translateX(-${step}%)`;
    }
  },
  methods: {
    slide(direction) {
      switch(direction) {
        case 'next':
          this.currentIndex++;
          break;
        case 'prev':
          this.currentIndex--;
          break;
      }
    }
  },
  watch: {
    currentIndex(value) {
      const lastIndex = this.images.length - 1;
      if (value < 0) this.currentIndex = lastIndex;
      if (value > lastIndex) this.currentIndex = 0;
    }
  }
}
</script>

<template>
  <div class="page-slider">
    <div class="page-slider__container">
      <ul class="page-slider__list"  :style="{transform:newTransform}">
        <li 
          v-for="(image, i) in images"
          :key="image[i]"
          class="page-slider__item"
        >
          <img :src="`${image}`" :alt="`${image}`" class="page-slider__img">
        </li>
      </ul>
    </div>
    <div class="page-slider__controls">
      <button 
        @click="slide('prev')" 
        class="page-slider__control page-slider__control-left" 
        type="button"
      ></button>
      <button 
        @click="slide('next')" 
        class="page-slider__control page-slider__control-right" 
        type="button"
      ></button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-slider {
  width: 100%;
  height: 100%;
  position: relative;

  &:hover {
    .page-slider__control {
      opacity: 1;
    }
  }

  &__container {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  &__list {
    display: grid;
    grid-auto-columns: 100%;
    grid-auto-flow: column;
    transition: transform 0.5s ease;
    transform: translateX(0%);
  }

  &__control {
    width: rem(60);
    height: 99%;
    background-color: rgba($button-color, 0.4);
    transition: 0.3s;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;

    &:hover {
      background-color: rgba($button-color, 0.6);
    }

    @include phones {
      opacity: 1;
    }
    
    &-right {
      left: auto;
      right: 0;
      transform: rotate(180deg);
    }

    &::after {
      content: '';
      display: block;
      width: rem(25);
      height: rem(50);
      background: url('../assets/img/arrow.svg') center center/contain no-repeat;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      @include phones {
        width: rem(16);
        height: rem(32);
      }
    }
  }
}
</style>