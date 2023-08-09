import Button from 'src/components/Button'
import Input from 'src/components/Input'
export default function ChangePassword() {
  return (
    <div className='rounded-sm bg-white px-2 pb-10 shadow md:px-7 md:pb-20'>
      <div className='border-bborder-b-gray-200 py-6'>
        <h1 className='Dtext-gray-900 text-lg font-medium capitalize'>Đổi mật khẩu</h1>
        <div className='[text-gray-700 mt-1 text-sm'>Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
      </div>
      <form className='mt-8 flex flex-col-reverse md:flex-row md:items-start'>
        {/* //onSubmit={onSubmit} */}
        <div className='mt-6 flex-grow md:mt-0 md:pr-12'>
          <div className='mt-2 flex flex-col flex-wrap sm:flex-row'>
            <div className='truncate pt-3 capitalize sm:w-[20%] sm:text-right'>Địa chỉ</div>
            <div className='sm:w-[80%] sm:pl-5'>
              {/* <Input classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500' register={register}></Input> */}
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
