export default function Footer() {
  return (
    <footer className='bg-neutral-100 py-16'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
          <div className='lg:col-span-1'>
            <div>© 2022 Test App. Tất cả các quyền được bảo lưu.</div>
          </div>
          <div className='lg:col-span-2'>
            <div>
              Quốc gia & Khu vực: Singapore Indonesia Đài Loan Thái Lan Malaysia Việt Nam Philippines Brazil México
              Colombia Chile Poland
            </div>
          </div>
        </div>
        <div className='mt-10 text-center text-sm'>
          <div>Công ty TNHH Test App</div>
          <div className='mt-6'>Địa chỉ: ABCXYZ Test App. Tổng đài hỗ trợ: 123456 - Email: example@gmail.com</div>
          <div className='mt-2'>
            Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyen Van Abc - Điện thoại liên hệ: 123456789 (ext 1234)
          </div>
          <div className='mt-2'>
            Mã số doanh nghiệp: 0123456789 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 01/01/2014
          </div>
          <div className='mt-2'>© 2015 - Bản quyền thuộc về Công ty TNHH Test App</div>
          <div className='mt-2'>
            Đây là App Test, phục vụ mục đích học tập | This is test app - only for learning, not commercial purpose
          </div>
        </div>
      </div>
    </footer>
  )
}
