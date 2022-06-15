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
  --main-color: #362222;
  --second-color: #171010;
  --third-color: #423F3E;
  --forth-color: #2B2B2B;
  --text-color: #eeeeee;
  --text-link-color: #aaaaaa;
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
