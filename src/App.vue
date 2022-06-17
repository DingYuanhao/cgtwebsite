<template>
  <router-view></router-view>
  <ContactMe class="contact"></ContactMe>
  <PageFooter></PageFooter>
</template>

<script>
import PageFooter from './components/PageFooter.vue'
import ContactMe from './components/ContactMe.vue'

export default {
  name: 'app',
  components: {
    PageFooter,
    ContactMe
  }
}
</script>

<style>
:root {
  --main-theme-color: #dddddd;
  --text-color: #333333;
  --text-link-color: #999999;
}

body {
  background-color: var(--main-color);
  color: var(--text-color);
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
  left: 10px;
  /* border: 1px solid; */
}
</style>
