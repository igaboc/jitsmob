import api from './init'

export function listContents(){
  return api.get('/contents')
    .then((res) => res.data)
}

export function findEntry(id) {
  return api.get(`/contents/${id}`)
    .then((res) => res.data)
}