import React from 'react'
import Typical from 'react-typical'

const TypeAnim = () =>{
    return (
      <Typical
        steps={['Hello', 1000, 'Hello world!', 500]}
        loop={Infinity}
        wrapper="a"
      />
    )
}

export default TypeAnim