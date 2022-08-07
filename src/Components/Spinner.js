import React, { Component } from 'react'
import loading from './loading.gif'
import '../index.css'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='gif' src={loading} alt="loading"  />
      </div>
    )
  }
}

export default Spinner