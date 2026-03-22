import { Suspense } from 'react';
import './App.css'
import DaisiNav from './Components/DaisiNav.jsx';
import Navbar from './Navbar/Navbar.jsx';
import PricingOption from './Navbar/components/PricingOption/PricingOption.jsx';


const pricingPromise = fetch('/public/pricingData.json').then(res => res.json())
function App() {
  return (
    <>

      <header>
        <Navbar></Navbar>
        {/* <DaisiNav></DaisiNav> */}

      </header>
      <main>
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>
      </main>

    </>
  )
}

export default App