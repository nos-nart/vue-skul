<template>
  <div class="hello">
    content goes from here!!
  </div>
</template>

<script>
import MainLayout from '@/shared/layout/MainLayout';

export default {
  name: 'Home',
  created() {
    this.$emit('update:layout', MainLayout);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
