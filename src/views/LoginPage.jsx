import React from 'react'
import Icon from '../icons/icons'
import Footer from '../components/LoginPage/Footer'
import LoginProcess from '../components/LoginPage/LoginProcess'

function LoginPage() {
  return (
    <>
      <div className='h-[calc(100vh-48px)] flex items-center justify-center'>
        <main className='flex items-center w-full'>
          <div style={{minWidth: "55%"}} className='flex items-center justify-center'>
            <Icon name="twitterLogo" size={330}/>
          </div>
          <div className='flex-1 p-8'>
            <LoginProcess /> 
          </div>
        </main>
      </div>
      <footer> 
        <Footer />
      </footer>
    </>
  )
}

export default LoginPage