class Article {
  constructor(axios) {
      this.axios = axios
  }

  async list() {
      try {
          const response = await this.axios.get("articles");
          return response.data
      } catch (error) {
          throw error
      }
  }
}

export default Article
