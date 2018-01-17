import api from './init'

export function listContents(){
  return api.get('/contents')
    .then((res) => res.data)
}