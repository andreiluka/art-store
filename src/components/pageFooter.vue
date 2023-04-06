<script>
import pageNavigation from '@/components/pageNavigation.vue';

export default {
  name: 'pageFooter',
  components: {
    pageNavigation
  }
}
</script>

<template>
  <footer class="page-footer">
    <div class="container">
      <div class="page-footer__container">
        <div class="page-footer__navigation">
          <pageNavigation/>
        </div>
        <address class="page-footer__contacts">
          <div class="page-footer__tel">
            <a href="tel:+78125555555" class="page-footer__tel-link">+7 (812) 555-55-55</a>
          </div>
          <div class="page-footer__address">г.Санкт-Петербург, ул. Ефимова, 3</div>
        </address>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.page-footer {
  background-color: $footer-color;
  color: $text-footer-color;
  padding: rem(38) 0;

  @include phones {
    padding: rem(28) 0;
  }

  &__container {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @include laptop {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  
  &__navigation {
    max-width: 672px;
    flex: 1 0 auto;

    @include laptop {
      margin-bottom: rem(24);
    }
    
    @include phones {
      margin-bottom: 0;
    }
  }

  &__contacts {
    display: flex;
    font-style: normal;
    white-space: nowrap;

    @include phones {
      flex-wrap: wrap;
    }
  }

  &__tel {
    margin-right: 2.8vw;
    padding-left: rem(22);
    position: relative;

    &::before {
      content: '';
      display: block;
      width: rem(14);
      height: rem(14);
      background: url(../assets/img/phone.svg) center/contain no-repeat;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }

    @include phones {
      margin: 3px 2.8vw 3px 0;
    }
  }

  &__tel-link {
    color: inherit;
    text-decoration: none;
  }
  
  &__address {
    padding-left: rem(21);
    position: relative;

    &::before {
      content: '';
      display: block;
      width: rem(11);
      height: rem(16);
      background: url(../assets/img/marker.svg) center/contain no-repeat;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }

    @include phones {
      margin: 3px 0;
    }
  }
}
</style>