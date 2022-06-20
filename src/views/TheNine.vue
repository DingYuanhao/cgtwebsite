<template>
  <div>
    <h1 style="margin: 0 auto; width: 100%; text-align: center;">视差滚动</h1>
    <p v-for="item in 15" :index="item"> aaaaaaaaaaa </p>
    <div class="bgTest" :style="{'background-position-y':positionY1+'px'}"></div>
    <p v-for="item in 15" :index="item"> aaaaaaaaaaa </p>
  </div>
</template>


<script>
export default {
  name: 'TheNine',
  data() {
    return {
      positionY1: 0,
      Y1: 0,
      ratio: 0.5
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
    let bgTest = document.querySelector('.bgTest')
    this.Y1 = bgTest.offsetTop * this.ratio
  },
  methods: {
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.positionY1 = this.Y1 - scrollTop * this.ratio
      return 
    }
  },
}
</script>

<style>
.bgTest {
  height: 500px;
  background: url(../assets/images/the91.jpg) no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  font-size: 20px;
}
</style>
