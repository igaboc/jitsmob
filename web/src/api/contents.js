import api from './init'

export function listContents(){
  return api.get('/contents')
    .then((res) => res.data)
}

export function addContents(data){
  return api.post('/contents', data)
    .then((res) => res.data)
}