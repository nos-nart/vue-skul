<template>
  <Layout>
    <Header :headerFixed="true"></Header>
    <Content>
      <slot/>
    </Content>
    <Footer/>
  </Layout>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'MainLayout',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>