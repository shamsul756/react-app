import React, { use } from 'react';
import PricingCard from '../PricingComponents/PricingCard';
import DaisiPrisingCard from '../../../Components/DaisiPrisingCard/DaisiPrisingCard';

const PricingOption = ({ pricingPromise }) => {
    const data = use(pricingPromise)
    const pricingArray = data.pricing;
    return (
        <div>
            <h2 className='text-5xl'>Get our membership</h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* {
                    pricingArray.map(pricing => <PricingCard key={pricing.id}
                    pricing={pricing}></PricingCard>)
                } */}
                {
                    pricingArray.map(pricing => <DaisiPrisingCard key={pricing.id}
                        pricing={pricing}
                    >

                    </DaisiPrisingCard>)
                }
            </div>
            <div>
                {/* pricing card */}


            </div>
        </div>

    );
};

export default PricingOption;