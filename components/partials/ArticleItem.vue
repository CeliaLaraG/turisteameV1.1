<template>

    <div class="columns ">
      <!-- <nuxt-link :to="`articles/${value.slug}`"> -->
      <div class="card m-4">
          <div class=" column card-image">
            <figure class="image">
              <b-image
              :src="value.image"
                ratio="4by3"></b-image>
            </figure>
          </div>
            <div class="card-header-title">
              <h1 class="title"
              >{{value.title}}</h1>
            </div>
      </div>
      <!-- </nuxt-link> -->

    </div>



</template>

<script>
export default {
  name: "ArticleItem",
  props: {
    value: Object
  },

 }
</script>
<style>
.card {
  height: 350px;
  width: 350px;
}

</style>
