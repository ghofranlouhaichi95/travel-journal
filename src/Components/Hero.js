import React from 'react';
import locationIcon from '../imagesS/Fill219.png'


export default function Hero(props) {
    return (
        <section>
            <div className='sectionDes'>
                <div className='heroSection'>
                    <div>
                        <img alt='coverImg' className='coverImg' src={props.coverImg} />
                    </div>
                    <div className='imgDescription'>
                        <span><img alt='locationIcon' className='locationIcon' src={locationIcon}/></span>
                        <span className='countryName'>{props.location.toUpperCase()}</span>
                        <span><a href='https://www.google.com/maps' className='locationLink'>Views on Google Maps</a></span>
                        <h1 className='placeName'>{props.placeName}</h1>
                        <h3 className='period'>{props.period}</h3>
                        <p className='description'>{props.description}</p>
                    </div>
                </div>
            </div> 
            <hr class="horizLine"></hr>
        </section>
        
    )
}
