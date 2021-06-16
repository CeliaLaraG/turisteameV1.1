
<template>
  <div class="home">
    <section class="hero">
      <Slider />
    </section>
    <div class="columns is-multiline">
          <div class="column is-12">
            <div
              class="mt-5 is-flex is-align-items-center is-justify-content-center"
            >
              <b-button
                v-for="category in categories"
                :key="category.slug"
                class="m-2 p-2 is-warning is-rounded" outlined
                :class="{ active: currentCategory === category.slug }"
                @click="currentCategory = category.slug"
              >
                {{ category.title }}
              </b-button>
            </div>
          </div>
        </div>
    <section class="is-multiline columns">
      <div class="column is-3" v-for="item in filteredElements" :key="item._id">
         <nuxt-link  :to="`/articles/${item.slug}`">
        <ArticleItem
        :value="item"
        />
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
  async asyncData({query}){
    const category = query.category ? query.category : null;

   return{
    currentCategory: category,
    categories: [
      {title: "Todos", slug: null},
      {title:"Arquitectura", slug:"Arquitectura"},
      {title: "Jardines y parques", slug: "Jardines y parques"},
      {title: "Plazas", slug: "Plazas"},
      {title: "Monumentos", slug: "Monumentos"},
      {title: "Museos", slug: "Museos"},
      {title: "Iglesias y arquitectura religiosa", slug: "Iglesias y arquitectura religiosa"},
      {title: "Calles y avenidas", slug: "Calles y avenidas"},
    ],
   }
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
    filteredElements(){
      if(this.currentCategory === null) return this.articles;

      return this.articles.filter(
        (item) => item.category === this.currentCategory
      );
    },
  },
  methods: {
    goToDetails(item) {
      console.log(item);
      this.$router.push(`articles/${item.slug}`);
      return item;
    },
  },
  async mounted() {
    try {
      console.log("aqui estamos");
      this.articles = await this.$api.articles.list();
    } catch (error) {
      console.error(error.message);
    }
  },
};
</script>



