<template>
  <main class="columns">
    <section class="column">
      <div class="columns is-multiline">
        <!-- <article-card v-for="item in article" :key="item._id" :value="item" /> -->
      </div>
      <ArticleItem
        v-for="item in article"
        :key="item._id"
        :value="value"
      />

      <div class="card-content">
        <h1 class="title">{{value.title}}</h1>
          <p>{{ value.content }}</p>
      </div>
      <!-- @coment="coment(item)" -->
    </section>
  </main>
</template>

<script>
import ArticleItem from '~/components/partials/ArticleItem.vue';


export default {
  name: "Article",
  data() {
    return {
     value: Object
    };
  },
  components: {
    ArticleItem,

  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
  methods: {
  //   async coment(article) {
  //     try {
  //       console.log("he pulsado");
  //       const newComent = {
  //         author: {
  //           name: this.currentUser.firstname,
  //           img:
  //             this.currentUser.avatar ||
  //             "https://img2.freepng.es/20180616/sxr/kisspng-avatar-computer-icons-avatar-icon-5b254abb7cf344.7556131215291706195118.jpg",
  //         },
  //         content: this.content,
  //       };
  //       article.coments.push(newComent);
  //       console.log(article);
  //       await this.$api.articles.coment(article);
  //     } catch (error) {}
  //   },
  // },
    async asyncData(context) {
      try {
        const articles = await context.app.$api.articles.list();
        let articleId = context.params.id;
        if (articleId) {
          let article = articles.filter((item) => item._id === articleId);
          console.log(article);
          return { article };
        }
      } catch (error) {
        console.error(error.message);
      }
    },
  }
}
</script>
