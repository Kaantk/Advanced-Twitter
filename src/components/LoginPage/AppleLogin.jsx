import React from 'react'
import Icon from '../../icons/icons'

function AppleLogin() {
  return (
    <>
        <button
            className='border flex items-center justify-center rounded-full w-60 h-8 hover:bg-gray-extraLight'>
            <Icon name="appleLogo" size={16}/> 
            <span className='text-xs font-bold ml-2'>Apple ile kaydol</span>
        </button>
    </>
  )
}

export default AppleLogin