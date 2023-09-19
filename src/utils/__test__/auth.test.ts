import { beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { clearLS, getAccessTokenFromLS, getRefreshTokenFromLS, setAccessTokenToLS, setRefreshTokenToLS } from '../auth'

// access_token và refresh_token được lấy từ tài khoản buck@gmail.com, password: 123456

const access_token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWJhZDZlMWFmYzJlMWExZjk2YjI4MyIsImVtYWlsIjoiYnVja0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDIzLTA3LTI4VDA2OjM2OjM2LjI0OFoiLCJpYXQiOjE2OTA1MjYxOTYsImV4cCI6MTY5MDYxMjU5Nn0.xahazbRXEkKOEbSZ7iH68mSGxvGn-wtRszDLzUO-QJA'

const refresh_token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWJhZDZlMWFmYzJlMWExZjk2YjI4MyIsImVtYWlsIjoiYnVja0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDIzLTA3LTI4VDA2OjM2OjM2LjI0OFoiLCJpYXQiOjE2OTA1MjYxOTYsImV4cCI6MTcwNDM1MDE5Nn0.rO5OKQYYbXboroZR0lm2Rq8V7U9LutCcNeHxKtqfIu4'

const profile =
  '{"_id":"64abad6e1afc2e1a1f96b283","roles":["User"],"email":"buck@gmail.com","createdAt":"2023-07-10T07:04:14.644Z","updatedAt":"2023-07-26T09:34:40.346Z","__v":0,"address":"Los Angeles","avatar":"003f02dd-a5c8-49a8-a284-22e94112014c.jpg","date_of_birth":"2002-11-17T17:00:00.000Z","name":"kid buck","phone":"1203654782"}'

beforeEach(() => {
  localStorage.clear()
})

describe('access_token', () => {
  it('access_token được set vào localStorage', () => {
    setAccessTokenToLS(access_token)
    expect(getAccessTokenFromLS()).toBe(access_token)
  })
})

describe('refresh_token', () => {
  it('refresh_token được set vào localStorage', () => {
    setRefreshTokenToLS(refresh_token)
    expect(getRefreshTokenFromLS()).toEqual(refresh_token)
  })
})

describe('clearLS', () => {
  it('Xóa hết access_token, refresh_token, profile', () => {
    setRefreshTokenToLS(refresh_token)
    setAccessTokenToLS(access_token)
    // setProfile
    // ...
    clearLS()
    expect(getAccessTokenFromLS()).toBe('')
    expect(getRefreshTokenFromLS()).toBe('')
  })
})

it('should work', (ctx) => {
  // prints name of the test
  console.log(123, ctx.task.name)
})
