import React from 'react'

const Button = ({children, onclick}: any) => {
  return (
    <button className='px-3 py-1 bg-blue-700 font-thin tracking-wide text-sm font-medium text-white rounded cursor-pointer' onClick={onclick}>{children}</button>
  )
}

export default Button