<style scoped lang="scss">
.container {
  border: 1px solid #00f;
}
.red {
  color: #f00;
}
.red{
  .test{
    color:blue !important;
    transform:rotateX(30deg) rotateY(30deg) translateY(50px);
  }
}
</style>

<template>
  <div class="container">
    <h2 class="red"><div class="test"><slot></slot></div>  </h2>
  </div>
</template>

<script>

export default {

}
</script>