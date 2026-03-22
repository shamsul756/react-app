import React, { use } from 'react';
import PricingCard from '../PricingComponents/PricingCard';

const PricingOption = ({pricingPromise}) => {
    const data = use(pricingPromise)
    const pricingArray = data.pricing;
    return (
        <div>
            <h2 className='text-5xl'>Get our membership</h2>
            
            <div className='grid md:grid-cols-3 gap-8'>
                {
                    pricingArray.map(pricing => <PricingCard key={pricing.id}
                    pricing={pricing}></PricingCard>)
                }
            </div>
            <div>
                {/* pricing card */}

            
        </div>
        </div>

    );
};

export default PricingOption;