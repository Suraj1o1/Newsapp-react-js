import React from 'react'
import loading from './loading.gif'
const Spinner =()=> {
    return (
      <div className='text-center'>
        <img  class='my-3'src={loading} alt="loading" />
      </div>
    )
  }
export default Spinner
