import { CircleCheckBig, PlayCircle } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    return (
        <p className='flex m-2'><CircleCheckBig className='mr-2'></CircleCheckBig>{feature}</p>
    );
};

export default PricingFeature;