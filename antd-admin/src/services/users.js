import { request, config } from 'utils'

const { api } = config
const { users } = api

export async function query (params) {
  return request({
    url: users,
    method: 'get',
    data: params,
  })
}

export async function remove (params) {
  console.log('users remove param', params)
  return request({
    url: `${users}/${params.ids[0]}`,
    method: 'delete',
    data: params,
  })
}
