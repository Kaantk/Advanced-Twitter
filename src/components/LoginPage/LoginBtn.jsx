import React from 'react'

function LoginBtn() {
  return (
    <>
      <button className='w-full border h-8 rounded-full flex items-center justify-center hover:bg-primary-lowLight'>
        <span className='text-primary-base font-semibold text-sm'>Giriş Yap</span>
      </button>
    </>
  )
}

export default LoginBtn