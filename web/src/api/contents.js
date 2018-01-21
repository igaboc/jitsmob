import api from './init'

export function listContents(){
  return api.get('/contents')
    .then((res) => res.data)
}

export function findEntry(id) {
  return api.get(`/contents/${id}`)
}

export function addContents(data){
  return api.post('/contents', data)
    .then((res) => res.data)
}

export function updateContent(data, id) {
  return api.put(`/contents/${id}`, data)
    .then((res) => res.data)
}