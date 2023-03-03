import hyRequest from '../index'

import { IAccount } from './type'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/'
}
export function accountLoginRequest(acouunt: IAccount) {
  return hyRequest.post({
    url: LoginAPI.AccountLogin,
    data: acouunt
  })
}

export function requestUserInfoById(id: number) {
  return hyRequest.get({
    url: LoginAPI.LoginUserInfo + id
  })
}
