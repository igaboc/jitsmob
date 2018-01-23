import api from './init'

export function listWorkout(){
  return api.get('/userworkout')
    .then((res) => res.data.contents)
}

export function addToWorkout(id){
  return api.post(`/userworkout/contents/${id}`)
    .then((res) => res.data.contents)
}

export function removeFromWorkout(id){
  return api.delete(`/userworkout/contents/${id}`)
    .then((res) => res.data.contents)
}