import newsServices from "../services/newsServices";

export default {
  namespaced: true,

  state: {
    news: []
  },
  mutations: {
    setNews(state, payload){
      return state.news = payload
    }
  },
  actions: {
    async getAll(ctx){
      const news = await newsServices.getAll()
      ctx.commit('setNews', news)
    }
  },
  getters: {
    getNews(state){
      return state.news
    }
  }
}