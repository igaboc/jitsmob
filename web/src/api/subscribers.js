import api from './init'

export function addSubscriber(email){
  return api.get('/subscribers', email)
    .then((res) => res.data)
}
