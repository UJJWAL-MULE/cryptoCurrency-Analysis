import React from 'react'

const ErrorComponent = ({messages}) => {
  return (
    <>
    <div class="alert alert-danger" role="alert">
    {messages}
    </div>
  
    </>
  )
}

export default ErrorComponent
