export interface IUser {
  id: number
  name: string
  email: string
}
export interface ICreateUserDto {
  name: string
  email: string
}
export interface IApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface IUpdateUserDto {
  name: string
  email: string
}

export interface IPartialUpdateUserDto {
  name?: string
  email?: string
}

export interface IChangeEmailDto {
  newEmail: string
  confirmEmail: string
}
