
<template>
  <div class="home">
    <section class="hero">
       <Slider />
    </section>
      <section class="is-multiline columns">
      <div class="column is-3"
      v-for="item in articles"
        :key="item._id" >
        <ArticleItem
        :value="item"

        />

      </div>
    </section>
      <nuxt-child :key="$route.params.id"/>

  </div>


</template>

<script>
import Slider from "~/components/partials/Slider";
import ArticleItem from "~/components/partials/ArticleItem.vue"
// import Article from '~/plugins/api/resources/articles';
export default {
  name: "HomePage",
  components: {
    Slider,
    ArticleItem,
    // Article
  },
  // data() {
  //   return {
  //     articles: Article
  //   };
  // },


  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    },

  },
  methods: {

  },
  async asyncData(context){
    try{
    const articles = await context.app.$api.articles.list();
    return {articles}
    }catch(error){
      console.error(error.message)
    }
  }
  // async beforeMount() {
  //   try {
  //     this.articles = await this.$api.articles.list();
  //   } catch (error) {
  //     alert("Error cargando los artículos");
  //   }
  // },
};
</script>
<style>

</style>
