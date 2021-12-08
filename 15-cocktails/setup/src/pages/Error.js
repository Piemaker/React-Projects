import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <section className="error-page section">
        <div className="error-container">
          <h1>oops! it's a dead end</h1>
          <Link className="btn btn-primary" to="/">
            back home
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Error
