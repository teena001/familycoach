import React, { useState } from 'react'
import aboutImg from '../images/aboutImg.jpg'
import Title from './Title'

const About = () => {

  const [showmore, setShowMore] = useState(false);


  return (
    <section className="section" id="about">
       
      <Title title='about' subTitle='us' />

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={aboutImg}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
          We choose only the best tours for our travelers that show quality for your value… We provide one of the best quality buses for the transportation of our customers throughout India. Since its establishment in the year 2003, In the year 2003 when the travel and tours operators were limited, family Coach Travels made its mark by embarking on the project of enabling people to experience South India, and particularly Kerala. Today family Coach Travels has carved a niche for itself in the highly competitive arena of arranging tailor-made tours to Kerala.


          </p>
          {showmore ? 
          <p>
          Family Coach Travels is proud to own a full-fledged fleet for all modes of luxurious road travel.As our focus is convenience of our customers, therefore we pay utmost attention to the maintenance of our vehicles to provide the customers with an enjoyable and hassle-free journey. We provide you with the option for air-conditioned or non air-conditioned vehicles with push back seat air bus. Where on one hand customers save their valuable time traveling in our vehicles, on the other hand they get value for their money with reasonable rates. Our team establishes a good and prolonged relationship with our customers which make family Coach Travels a successful one.
          </p>
          : null
          }
          <a href="#about" className="btn" onClick={() => setShowMore(!showmore)}>{showmore?  "show less" : "read more"}</a>
        </article>
      </div>
    </section>
  )
}

export default About