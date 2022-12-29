<template>
  <div class="container">
    <slot></slot>
  </div>
</template>
<style scoped>
.container {
  border-radius: 2rem;
  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>
