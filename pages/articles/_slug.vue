<template>
  <main class="columns">
       <section class="column">
        <b-image
        :src="article.image"
        ratio="16by9"/>
    </section>
    <section class="column">
      <div class="columns is-multiline">
      </div>
      <div class="card-content">
        <h1 class="title">{{article.title}}</h1>
        <p> {{article.content}}</p>
      </div>
    </section>
  </main>
</template>

<script>
import router from 'vue-router'
export default {
  name: "Article",
  props:{
    value: Object
  },
  data(){
    return {
      article: {
        title:"",
        content: "",
        image: ""
      }
    }
  },
  async beforeMount() {
    const slug = this.$route.params.slug
    const article = await this.$api.articles.getOneBySlug(slug)
    this.article= article
 }
}
</script>
<style>
  b-image{
    margin-top: 30px;
  }
</style>
