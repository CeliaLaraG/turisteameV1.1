
<template>
  <div class="home">
    <section class="hero">
      <Slider />
    </section>
    <section class="is-multiline columns">
      <div class="column is-3" v-for="item in articles" :key="item._id">
         <nuxt-link  :to="`/articles/${item.slug}`">
        <ArticleItem :value="item"/>
        <!-- <b-button @click="goToDetails(item)" :value="item">More info</b-button> -->
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import Slider from "~/components/partials/Slider";
import ArticleItem from "~/components/partials/ArticleItem.vue";
// import Article from '~/plugins/api/resources/articles';
export default {
  name: "HomePage",
  components: {
    Slider,
    ArticleItem,
    // Article
  },
  data() {
    return {
      articles: [],
    };
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    },
  },
  methods: {
    goToDetails(item) {
      console.log(item)
      this.$router.push(`articles/${item.slug}`)
      return item
    },
  },
   async mounted() {
      try {
        console.log("aqui estamos");
        this.articles = await this.$api.articles.list();
      } catch (error) {
        console.error(error.message)
      }
    }
};
</script>
