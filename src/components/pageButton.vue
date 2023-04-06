<script>
export default {
  name: 'pageButton',
  props: {
    title: {
      type: String,
      default: "Купить"
    },
    iconed: Boolean,
    preload: Boolean,
  }
}
</script>

<template>
  <button 
    :class="['page-button', {iconed, preload}]" 
    v-on="$listeners"
    type="button"
  >
    {{ title }}
    <div class="preloader"></div>
  </button>
</template>

<style lang="scss" scoped>
.page-button {
  min-width: rem(118);
  padding: 1.15em 2em;
  white-space: nowrap;
  color: $button-text-color;
  background-color: $button-color;
  transition: 0.3s;

  &.iconed {
    background-color: $button-active-color;
    padding: 1.15em 0.64em 1.15em 2.28em;
    position: relative;

    &::after {
      position: absolute;
      content: '';
      display: block;
      width: rem(14);
      height: rem(13);
      background: url(../assets/img/check-mark.svg) center/contain no-repeat;
      top: 50%;
      left: 0.79em;
      transform: translateY(-50%);
    }
  }

  &:hover {
    background-color: $button-hover-color;
  }

  &.preload {
    position: relative;
    pointer-events: none;
    opacity: 0.7;

    .preloader {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $button-active-color;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      &:after {
        content: "⠋";
        display: block;
        font-size: rem(24);
        color: white;
        animation: animationPreload .8s linear infinite;
      }
    }
  }

  @keyframes animationPreload {
    10% { content: "⠙"; }
    20% { content: "⠹"; }
    30% { content: "⠸"; }
    40% { content: "⠼"; }
    50% { content: "⠴"; }
    60% { content: "⠦"; }
    70% { content: "⠧"; }
    80% { content: "⠇"; }
    90% { content: "⠏"; }
  }
}
</style>