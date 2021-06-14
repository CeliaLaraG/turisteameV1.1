<template>
  <div>
    <MainNav />

    <Nuxt />

    <MainFooter />
  </div>
</template>

<script>
import MainNav from "@/components/MainNav";
import MainFooter from "@/components/MainFooter";
export default {
  components: {
    MainNav,
    MainFooter,
  },
  mounted(){
    // const token = localStorage.getItem('jwt-token')
    const token = this.$cookies.get('jwt-token')
    this.$store.dispatch('login',token)
  }
};
</script>
