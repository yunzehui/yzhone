<template>
  <div class="btn">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MyButton",
};
</script>

<style scoped>
.btn {
  background: aqua;
}
</style>