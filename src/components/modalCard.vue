<script>
import pageSlider from '@/components/pageSlider.vue';
import { mapMutations, mapState } from "vuex";

export default {
  name: 'modalCard',
  components: {
    pageSlider
  },
  computed: {
    ...mapState({
      modal: state => state.modal
    })
  },
  methods: {
    ...mapMutations(['CLOSE_MODAL']),
    closeModalCard() {
      this.CLOSE_MODAL();
    }
  }
}
</script>

<template>
  <div @click="closeModalCard"  class="modal-card">
    <div @click.stop class="modal-card__block">
      <div class="modal-card__pic">
        <div class="modal-card__pic-content">
          <pageSlider :images="modal.images"/>
        </div>
      </div>
      <div class="modal-card__desc">
        <p class="modal-card__text">{{ modal.desc }}</p>
        <div v-if="modal.sold" class="modal-card__message">Продана на аукционе</div>
        <div v-else class="modal-card__price">{{ modal.currentPrice.toLocaleString() }} $</div>
      </div>
    </div>
    <div class="modal-card__cross"></div>
  </div>
</template>

<style lang="scss" scoped>
.modal-card {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(#000000, 0.8);

  &__block {
    width: 540px;
    background-color: antiquewhite;
    overflow: hidden;
    animation: appearance .3s .1s backwards;

    @include phones {
      width: 85%;
    }
  }

  &__pic {
    padding-top: 57.6%;
    overflow: hidden;
    position: relative;
  }

  &__pic-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &__desc {
    padding: rem(24) rem(20);
  }

  &__text {
    margin-bottom: rem(24);
    font-size: rem(16);
    line-height: 1.5;
  }

  &__message {
    color: $dark-gray-color;
  }

  &__price, &__message {
    font-size: rem(22);
    font-weight: 700;
    text-align: center;
  }

  &__cross {
    display: flex;
    transform: rotateZ(45deg);
    cursor: pointer;
    position: absolute;
    top: 35px;
    right: 35px;

    &,
    &:before {
      content: '';
      width: 31px;
      height: 6px;
      background-color: white;
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

@keyframes appearance {
  0% { transform: scale(0); }
  100% { transform: scale(1); }
}
</style>