import { User } from './user.type'
import { SuccessResponse } from './utils.type'

export type AuthResponse = SuccessResponse<{
  access_token: string
  expires: string
  user: User
  refresh_token: string
}>

export type RefreshTokenReponse = SuccessResponse<{ access_token: string }>