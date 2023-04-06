<script>
import pageHeader from './components/pageHeader.vue';
import pageFooter from './components/pageFooter.vue';
import pageTitle from './components/pageTitle.vue';
import pageCard from './components/pageCard.vue';
import modalCard from './components/modalCard.vue';
import { mapActions, mapState } from "vuex";

export default {
  name: 'App',
  components: {
    pageHeader,
    pageTitle,
    pageCard,
    modalCard,
    pageFooter
  },
  computed: {
    ...mapState({
      filteredPaintings: state => state.filteredPaintings,
      modalVisibility: state => state.modalVisibility
    })
  },
  methods: {
    ...mapActions(['fetchPaintings']),
  },
  created() {
    this.fetchPaintings('paintings');
  }
}
</script>

<template>
  <div id="app">
    <div class="wrap">
      <pageHeader/>
      <main class="page-content">
        <div class="container">
          <pageTitle title="Картины эпохи Возрождения"/>
          <ul class="page-content__list">
            <li 
            v-for="item in filteredPaintings"
            :key="item.id"
            class="page-content__item"
            >
              <pageCard :picture="item"/>
            </li>
          </ul>
        </div>
      </main>
      <pageFooter/>
      <modalCard v-if="modalVisibility"/>
    </div>
  </div>
</template>

<style lang="scss"  src="./app.scss"></style>
