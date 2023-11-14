import React from 'react'
import { Button } from 'primereact/button'

const Header = () => {
  return (
    <div className='w-[75px] h-full flex flex-col items-center justify-center gap-y-1'>
      {/* <Button /> */}
      <Button icon='pi pi-home' className='h-16 w-16 text-white bg-transparent border-2 border-white' />
      <Button icon='pi pi-user' className='h-16 w-16 text-white bg-transparent border-2 border-white' />
      <Button icon='pi pi-briefcase' className='h-16 w-16 text-white bg-transparent border-2 border-white' />
    </div>
  )
}

export default Header