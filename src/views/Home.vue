<template>
  <div class="home">
    <div class="main-page">
      <div class="box-container" id="box-one" @click="handleBoxOne">
        <!-- BOX_CONTAINER_1 -->
      </div>
      <div class="box-container" id="box-two" @click="handleBoxTwo">
        <!-- BOX_CONTAINER_2 -->
      </div>
      <div class="box-container" id="box-three" @click="handleBoxThree">
        <!-- BOX_CONTAINER_3 -->
      </div>
      <div class="box-container" id="box-four">
        <!-- BOX_CONTAINER_4 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    handleBoxOne() {
      this.$router.push('/TheNine')
    },
    handleBoxTwo() {
      this.$router.push('/syf')
    },
    handleBoxThree() {
      this.$router.push('/mdd')
    },
  }
}
</script>

<style>
.home {
  text-align: center;
}

.main-page {
  margin-top: 20px;
  margin: 20px auto;
  width: 85%;
  
  /* border: 1px solid; */
  display: flex;
  flex-direction: column;  
}

.box-container {
  width: 90%;
  margin: 10px auto;
  margin-bottom: 30px;
  display: flex;
  height: 500px;
  /* border: 1px solid; */
  box-shadow: var(--el-box-shadow);
  transition: all 0.5s ease;
}

.box-container:hover {
  width: 100%;
  box-shadow: var(--el-box-shadow-dark);
  transition: all 0.5s ease;
}

.cgt-pic {
  height: 100%;
  box-shadow: var(--el-box-shadow);
}

@media(min-width: 1000px) {
  .main-page {
    width: 900px;
  }
}
</style>