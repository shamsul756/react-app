import { Suspense } from 'react';
import './App.css'
import DaisiNav from './Components/DaisiNav.jsx';
import Navbar from './Navbar/Navbar.jsx';
import PricingOption from './Navbar/components/PricingOption/PricingOption.jsx';
import ResultChart from './Components/ResultChart/ResultChart.jsx';
import { LineChart } from 'recharts';


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
            <LineChart></LineChart>
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>
        <ResultChart></ResultChart>
      
      </main>

    </>
  )
}

export default App