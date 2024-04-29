import React from 'react'
import {Button, Input} from "@nextui-org/react";


const page = () => {
  return (
    <div className='container '>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input 
          type="username" 
          label="Username" 
          placeholder="Enter your username" />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input 
          type="password" 
          label="Password" 
          placeholder="Enter your password" />
      </div>
    </div>
  )
}

export default page