import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({ pricing }) => {
   const {name, price, description, features} =pricing;
    return (
        <div className='border bg-cyan-950'>
            {/* card-header */}
            <h4 className='text-4xl p-4'>{price}</h4>
            <h1 className='text-6xl p-4'>{name}</h1>
            <p className='text-md bg-cyan-900 p-4 rounded-2xl mt-4'>{pricing.subscription} <br />
                {description}</p>
            {
                features.map((feature, index)=> <PricingFeature key={index} feature={feature}></PricingFeature>)
            }
        </div>
    );
};

export default PricingCard;