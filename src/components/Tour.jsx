import React from 'react'

const Tour = ({ img, date, title, text, location, duration, price, tourIcon }) => {
  return (
    
    <article className="tour-card">
        <div className="tour-img-container">
            <img src={img} className="tour-img" alt={title} />
            <p className="tour-date">{date}</p>
        </div>
        <div className="tour-info">
            <div className="tour-title">
            <h4>{title}</h4>
            </div>
            <p>
            {text}
            </p>
            <div className="tour-footer">
            <p>
                <span><i className={tourIcon}></i> {location}</span> 
            </p>
            <p>{duration} days</p>
            <p>from $ {price}</p>
            </div>
        </div>
    </article>
  )
}

export default Tour