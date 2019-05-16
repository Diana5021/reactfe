import axios from 'axios'
export default {
  get(url,params = {}) {
    return axios.get(url, {  //params参数必写 , 如果没有参数传{}也可以
    params
  })
    .then(({data}) => data)
    .catch(e => { console.log(e)})
  },
  post({ url, shop }) {
    return axios.post(url,shop)
            .then(({data}) => data)
            .catch( e => { console.log(e)} )
  }
}