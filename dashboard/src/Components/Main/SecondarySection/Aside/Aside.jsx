import React from 'react'
import "./Aside.css"

function Aside() {
  return (
    <div className='aside-container'>
      <div className="aside-top">
        <h2>Overview</h2>
        <p>
          <i className="fa-solid fa-arrow-up"></i> 24% this month
        </p>
      </div>
      <div className="aside-content">
        {/* Line component */}
        <div className="line">
          <h2>title 1</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officiis facere totam natus aut alias fugit. Vitae minus voluptate quo.</p>
        </div>
        <div className="line">
          <h2>title 1</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officiis facere totam natus aut alias fugit. Vitae minus voluptate quo.</p>
        </div>
        <div className="line">
          <h2>title 1</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officiis facere totam natus aut alias fugit. Vitae minus voluptate quo.</p>
        </div>
      </div>
    </div>
  )
}

export default Aside