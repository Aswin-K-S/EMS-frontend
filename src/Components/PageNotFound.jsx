import React from "react";
import './PageNotFound.css'

function PageNotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p class="zoom-area">
        
      </p>
      <section class="error-container">
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
        <span class="zero">
          <span class="screen-reader-text">0</span>
        </span>
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
      </section>
      <div class="link-container">
        <a target="_blank" href="/" className="btn btn-primary m-4">
          Home
        </a>
      </div>
    </div>
  );
}

export default PageNotFound;
