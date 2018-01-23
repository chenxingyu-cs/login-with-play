import { request, config } from 'utils'

const { api } = config
const { user, users } = api

export async function query (params) {
  console.log('user query params', params)
  return request({
    url: `${users}/${params.id}`,
    method: 'get',
    data: params,
  })
}

export async function create (params) {
  return request({
    url: users,
    method: 'post',
    data: params,
  })
}

export async function remove (params) {
  console.log('params', params)
  return request({
    url: user,
    method: 'delete',
    data: params,
  })
}

export async function update (params) {
  return request({
    url: user,
    method: 'patch',
    data: params,
  })
}
