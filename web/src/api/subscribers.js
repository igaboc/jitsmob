import api from './init'

export function createSubscriber(email) {
  return api.post('/subscribers', email)
    .then((res) => res.data)
}
