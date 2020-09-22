<template>
  <div class="flex justify-between px-4 bg-gray-900 text-white">
    <div class="flex items-center">
      <Row type="flex" align="middle" class="mr-3">
        <router-link to="https://github.com/">
          <img :src="'/assets/images/' + img.logo" alt="github"/>
        </router-link>
        <Search @search="search" v-model="searchText1" placeholder="Search or jump to..."></Search>
      </Row>
      <Row type="flex" align="middle" :space="10">
        <Cell>Pull request</Cell>
        <Cell>Issues</Cell>
        <Cell>Marketplace</Cell>
        <Cell>Explore</Cell>
      </Row>
    </div>
    <div>
      <Cell>
        <Avatar type="male" noInfo></Avatar>
      </Cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: {
        logo: 'github.svg'
      },
      searchText1: null,
    };
  },
  methods: {
    search(data) {
      this.$Message.info(`Inquire "${data}"`);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>