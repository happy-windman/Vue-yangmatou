import axios from 'axios'

export const get = ({
  url,
  params
}) => {
  return axios({
    url,
    params
  })
  .then((result) => {
    return result
  })
  .catch((err) => {
    return err.message
  })
}

export const post = ({
  method,
  url,
  data
})  => {
  return axios({
    method: 'post',
    url,
    data
  })
  .then((result) => {
    return result
  })
  .catch((err) => {
    return err.message
  })
}