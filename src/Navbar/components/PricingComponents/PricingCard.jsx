import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({ pricing }) => {
   const {name, price, description, features} =pricing;
    return (
        

       
        <div className='flex flex-col border bg-cyan-950 m-4'>
            {/* card-header */}
            <h4 className='text-4xl p-4'>{price}</h4>
            <h1 className='text-6xl p-4'>{name}</h1>
            {/* card-body */}
            <div className='flex-1'>
            <p className='text-md bg-cyan-900 p-4 rounded-2xl mt-4'>{pricing.subscription} <br />
                {description}</p>
            {
                features.map((feature, index)=> <PricingFeature key={index} feature={feature}></PricingFeature>)
            }
            </div>
             <button className="btn w-full text-2xl mt-4 hover:bg-cyan-950 border-cyan-800 p-6">Subscribe</button>
        </div>
       
     
    );
};

export default PricingCard;