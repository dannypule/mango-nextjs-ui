import axios from 'axios'
import { API_ROOT } from '../api-config'

// @todo set headers for each request

const handleCatch = err => {
  if (err && err.response && err.response.data && err.response.data.error) {
    throw err.response.data
  } else {
    throw err
  }
}

export const get = url => {
  return axios
    .get(`${API_ROOT}${url}`)
    .then(res => {
      return res.data
    })
    .catch(handleCatch)
}

export const post = (url, data = {}) => {
  return axios
    .post(`${API_ROOT}${url}`, data)
    .then(res => {
      return res.data
    })
    .catch(handleCatch)
}

export const put = (url, data = {}) => {
  return axios
    .put(`${API_ROOT}${url}`, data)
    .then(res => {
      return res.data
    })
    .catch(handleCatch)
}

export const del = (url, data = {}) => {
  return axios
    .delete(`${API_ROOT}${url}`, data)
    .then(res => {
      return res.data
    })
    .catch(handleCatch)
}
