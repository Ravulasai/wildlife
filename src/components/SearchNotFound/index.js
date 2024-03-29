import React from 'react';
import './index.css'

const SearchNotFound = () => {
    const handleBack = () => {
        window.history.back();
    }
  return (
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/dl3vc69uw/image/upload/v1704801645/search_fq02j1_b5fpzq.avif"
        alt="not found"
        className="not-found-bg-image mb-3"
      />
      <h1 className="input-text mb-3">Search result Not Found</h1>
      <button type='button' className='btn btn-primary button-not-found' onClick={handleBack}>Go Back</button>
    </div>
  )
}

export default SearchNotFound;
