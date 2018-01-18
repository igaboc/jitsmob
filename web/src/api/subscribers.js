import api from './init'

export function createSubscribers(data) {
  return api.post('/subscribers', data)
    .then((res) => res.data)
}