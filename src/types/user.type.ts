type Role = 'User' | 'Admin'

export interface UserResponse {
  roles: Role[]
  _id: string
  email: string
  createdAt: string
  updatedAt: string
}
