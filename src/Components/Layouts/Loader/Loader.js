import React from 'react';
import { Circles } from 'react-loader-spinner'

function Loader() {
  return (
    // <Audio
    //   height="80"
    //   width="80"
    //   radius="9"
    //   color='green'
    //   ariaLabel='three-dots-loading'
    //   wrapperStyle
    //   wrapperClass
    // />
    <Circles color="#00BFFF" height={80} width={80}/>
  )
}

export default Loader