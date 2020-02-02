/**
 * Manages All API requests
 */
import request from './request'

/**
 * submits user account registration form
 * @param {Object} data - registration form
 * @returns Promise<any>
 */
const createAccount = async data =>
  request({
    method: 'post',
    url: '/users/createUser',
    data,
  })

/**
 * login user then navigate to dashboard
 * @param {Object} credentials - username and  password
 * @returns Promise<any>
 */
const login = credentials =>
  request({
    method: 'post',
    url: '/users',
    data: credentials,
  })

export default { createAccount, login }
