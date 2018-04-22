import axios from 'axios'
import { API_ROOT } from '../api-config'

// @todo set headers for each request

export const get = url => {
  return axios.get(`${API_ROOT}${url}`).then(res => {
    return res.data
  })
}

export const post = (url, data = {}) => {
  return axios.post(`${API_ROOT}${url}`, data).then(res => {
    return res.data
  })
}

export const put = (url, data = {}) => {
  return axios.put(`${API_ROOT}${url}`, data).then(res => {
    return res.data
  })
}

export const del = (url, data = {}) => {
  return axios.delete(`${API_ROOT}${url}`, data).then(res => {
    return res.data
  })
}
