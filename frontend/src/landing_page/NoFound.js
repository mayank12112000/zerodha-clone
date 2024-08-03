import React from 'react'
import { Link } from 'react-router-dom';

export default function NoFound() {
  return (
    <div className='container my-5'>
        <h1>404 Not Found</h1>
        <p>We couldn't find the page you were looking for. </p>
        <p>Visit <Link to={"/"}>Zerodha's home page</Link> </p>
    </div>
  )
}
