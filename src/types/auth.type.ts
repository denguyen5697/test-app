import { UserResponse } from './user.type'
import { SuccessReponse } from './utils.type'

export type AuthResponse = SuccessReponse<{
  access_token: string
  expires: string
  use: UserResponse
}>
