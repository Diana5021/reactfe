export default {
  get(url) {
    return fetch(url)
      .then(response => {
        return response.json()
      })
      .then(result => {
        return result
      })
  },
  post({url,postData}) {
    return fetch(url,{
      method: 'POST',
      mode: 'cors',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    }).then(response => {
      return response.json()
    })
    .then(result => {
      if(result.data) {
        return result
      }
      return result.data
    })
    .catch(error => console.log('error is', error));
  }
}