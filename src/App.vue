<template>
  <router-view></router-view>
  <ContactMe class="contact"></ContactMe>
  <PageFooter></PageFooter>
  <img src="./assets/icons/cgt.png" alt="" class="cgt-watching-u" :class="{'cgt-right' : cgtRight}" @click="cgtClicked">
</template>

<script>
import PageFooter from './components/PageFooter.vue'
import ContactMe from './components/ContactMe.vue'

export default {
  name: 'app',
  components: {
    PageFooter,
    ContactMe
  },
  data() {
    return {
      cgtRight: false,
    }
  },
  methods: {
    cgtClicked() {
      this.cgtRight = !this.cgtRight
    }
  }
}
</script>

<style>
:root {
  --main-theme-color: #dddddd;
  --text-color: #333333;
  --text-link-color: #999999;
}

html, body {
  background-color: var(--main-color);
  color: var(--text-color);
  margin: 0;
  padding: 0;
}

.link {
  color: var(--text-color);
}

.link:hover {
  color: var(--text-link-color);
}

.contact {
  position: fixed;
  top: calc((100vh - 150px)/2);
  padding-left: 10px;
  /* border: 1px solid; */
}

.cgt-watching-u {
  position: fixed;
  bottom: 0;
  width: 120px;
  transition: 0.3s ease;
}

.cgt-right {
  transform: translateX(calc(100vw - 120px)) rotateY(180deg);
  transition: 0.3s ease;
}
</style>
