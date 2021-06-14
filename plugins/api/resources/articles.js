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
  async getOneBySlug(articleSlug) {
    try {
      const url = `articles/${articleSlug}`
      const response = await this.axios.get(url);
      return response.data
    } catch (error) {
        throw error
    }
}
}

export default Article
