import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className='dark:bg-gray-20 bg-white'>
      <div className='container mx-auto flex min-h-screen items-center px-6 py-12'>
        <div className='mx-auto flex max-w-sm flex-col items-center text-center'>
          <p className='rounded-full bg-blue-50 p-3 text-sm font-medium text-yellow-500 dark:bg-gray-800'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
              />
            </svg>
          </p>
          <h1 className='mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl'>Page not found</h1>
          <p className='mt-4 text-gray-500 dark:text-gray-400'>Trang bạn cần tìm không tồn t.</p>

          <div className='mt-6 flex w-full shrink-0 items-center gap-x-3 sm:w-auto'>
            <Link
              to='/'
              className='w-1/2 shrink-0 rounded-lg bg-orange px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 hover:bg-orange sm:w-auto'
            >
              Về trang chủ
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
