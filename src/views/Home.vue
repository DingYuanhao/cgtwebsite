<template>
  <div class="home">
    <div class="main-page">
      <div class="box-container">
        <el-row gutter=20 >
          <el-col :span="12" style="text-align:right;">
            Hi,
          </el-col>
          <el-col :span="12" style="text-align:left;">
            欢迎来到曼彻斯特
          </el-col>
          <el-col :span="12" style="text-align:right;">
            I'm Grady.
          </el-col>
        </el-row>
      </div>
      <div class="box-container">
        <router-link to="/p5js" class="link">
          Click me to p5js
        </router-link>
      </div>
      <div class="box-container">
        <img src="../assets/images/cgt.jpg" alt="" class="cgt-pic">
      </div>
      <div class="box-container">
        Section - 4
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
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
  width: 100%;
  margin: 10px auto;
  height: 500px;
  /* border: 1px solid;
  box-shadow: var(--el-box-shadow-dark); */
}

.cgt-pic {
  height: 100%;
  box-shadow: var(--el-box-shadow-dark);
}

@media(min-width: 1000px) {
  .main-page {
    width: 850px;
  }
}
</style>