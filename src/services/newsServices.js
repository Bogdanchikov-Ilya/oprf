import {api} from "../api/api"

class newsServices  {
  async getAll(){
    try {
      const res = await api.get('/news/')
      return res.data
    }catch (e){
      throw e
    }
  }
}

export default new newsServices()