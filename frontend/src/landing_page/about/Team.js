import React from 'react'

export default function Team() {
  return (
    <div className='container mt-5'>
      <h1 className='text-center'>The developer</h1>
      <div className="row">
        <div className="col-sm text-center">
          <img className='rounded-circle' src="media/mayank.png" alt="" />
          <h2>Mayank Keshari</h2>
          <p>Front end developer</p>
        </div>
        <div className="col-sm">
          <p className='min-width px-5'>
          A highly skilled front-end developer with extensive React experience, seeking an opportunity to contribute to innovative
          web projects and enhance user experiences through modern development practices.
          </p>
        </div>
      </div> 
    </div>
  )
}
