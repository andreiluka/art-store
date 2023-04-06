<script>
import pageButton from '@/components/pageButton.vue';
import { mapMutations } from "vuex";

export default {
  name: 'pageCard',
  components: {
    pageButton
  },
  props: {
    picture: Object
  },
  data() {
    return {
      preloader: false
    }
  },
  methods: {
    ...mapMutations(['ADD_TO_CART', 'OPEN_MODAL']),
    addToShoppingCart() {
      setTimeout(() => {
        this.ADD_TO_CART(this.picture.id);
        this.preloader = false;
      }, 2000);
      this.preloader = true;
    },
    viewInModal() {
      this.OPEN_MODAL(this.picture.id);
    }
  }
}
</script>

<template>
  <div :class="['page-card', {'page-card--sold':picture.sold}]">
    <div class="page-card__pic">
      <div class="page-card__pic-content">
        <img :src="`${picture.imgSrc}`" :alt="picture.imgName" class="page-card__img">
      </div>
    </div>
    <div class="page-card__desc">
      <h3 @click="viewInModal" class="page-card__name">{{ picture.imgName }}</h3>
      <div v-if="picture.sold" class="page-card__message">Продана на аукционе</div>
      <div v-else class="page-card__buy">
        <div class="page-card__price">
          <div v-if="picture.oldPrice" class="page-card__old-price">{{ picture.oldPrice.toLocaleString() }} $</div>
          <div class="page-card__current-price">{{ picture.currentPrice.toLocaleString() }} $</div>
        </div>
        <pageButton v-if="preloader" preload/>
        <pageButton 
          v-else-if="picture.inCart" 
          title="В корзине"
          @click="addToShoppingCart"
          iconed
        />
        <pageButton v-else @click="addToShoppingCart"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-card {
  display: flex;
  flex-direction: column;
  border: 1px solid $gray-color;
  height: 100%;

  &--sold {
    opacity: 0.5;
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

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &__desc {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: rem(20) rem(24) rem(24);
  }

  &__name {
    margin-bottom: rem(22);
    font-size: rem(18);
    line-height: 1.5;
    cursor: pointer;
    flex: 1;
    transition: 0.3s;

    &:hover {
      opacity: 0.6;
    }
  }

  &__message {
    font-weight: 700;
    font-size: rem(16);
    line-height: 3;
  }

  &__buy {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__price {
    margin-right: rem(10);
    font-size: rem(16);
    font-weight: 700;
    white-space: nowrap;
  }

  &__old-price {
    font-weight: 300;
    font-size: rem(14);
    line-height: 1.5;
    text-decoration-line: line-through;
    color: $dark-gray-color;
  }
}
</style>