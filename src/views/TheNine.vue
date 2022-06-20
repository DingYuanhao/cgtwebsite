<template>
  <div>
    <div class="gallery-container">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item>
          <img src="../assets/images/mdd1.jpg" alt="" style="width: 100%" @click="goToMdd1">
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/images/mdd2.jpg" alt="" style="width: 100%" @click="goToMdd2">
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/images/cgtnmdd.jpg" alt="" style="width: 100%" @click="goToCgtnmdd">
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/images/the91.jpg" alt="" style="width: 100%" @click="goToThe91">
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/images/syf2.jpg" alt="" style="width: 100%" @click="goToSyf">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>


<script>
export default {
  name: 'TheNine',
  methods: {
    goToMdd1() {
      this.$router.push('/mdd')
    },
    goToMdd2() {
      this.$router.push('/mdd')
    },
    goToCgtnmdd() {
      this.$router.push('/mdd')
    },
    goToThe91() {
      this.$router.push('/TheNine')
    },
    goToSyf() {
      this.$router.push('/syf')
    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.main-page {
  margin: 0;
  padding: 0;
}

.gallery-container {
  margin: 0 auto;
  width: 80%;
}
</style>