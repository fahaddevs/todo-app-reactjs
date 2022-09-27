import React, { useEffect } from 'react'

const Modal = ({modalContent, modalClose, modalClass}) => {

  useEffect(()=>{
    setTimeout(()=>{
      modalClose();
    },2000)
  })

  return (
    <div className={modalClass}>
      <p>{modalContent}</p>
    </div>
    // <div className='modal success'>
    //   <p>Add Itedm</p>
    // </div>
  )
}

export default Modal