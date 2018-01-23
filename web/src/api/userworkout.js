import api from './init'

export function listMyWorkout() {
  return api.get('/userworkout')
    .then((res) => res.data)
}

export function addContentToMyWorkout(contentID) {
  return api.post(`/userworkout/contents/${contentID}`)
    .then((res) => res.data)
}

export function removeContentFromMyWorkout(contentID) {
  return api.delete(`/userworkout/contents/${contentID}`)
    .then((res) => res.data)
}