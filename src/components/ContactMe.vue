<template>
  <div>
    <div>
      <a href="">
        <img src="@/assets/icons/instagram.svg" alt="" class="icons" />
      </a>
    </div>
    <div>
      <a href="">
        <img src="@/assets/icons/wechat.svg" alt="" class="icons" />
      </a>
    </div>
    <div>
      <a href="https://weibo.com/206066072">
        <img src="@/assets/icons/weibo.svg" alt="" class="icons" />
      </a>
    </div>
    <div>
      <a href="https://space.bilibili.com/106676317/">
        <img src="@/assets/icons/bilibili.svg" alt="" class="icons" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactMe',
}
</script>

<style>
.icons {
  filter: invert(1);
  opacity: 0.5;
  transition: all 0.3s ease;
}

div:not(:last-child) {
  margin-bottom: 20px;
}

.icons:hover {
  transition: 0.3s ease;
  opacity: 1;
  transform: translateX(5px);
}
</style>