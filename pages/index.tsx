import type { NextPage } from 'next'
import { setVinNumber } from '../redux/features/cars/action'
import { useAppDispatch } from '../redux/hooks'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";
import { useEffect, useState } from 'react'
import { useQuery } from '../redux/features/cars/service'
import { Header } from '../components/organism/header';
import { VehicleSearchSection } from '../components/organism/vehicleSearchSection';
import { HowItWorkSection } from '../components/organism/howItWorksSection';
import { FaqSection } from '../components/organism/faqSection';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [vin, setVin] = useState('0');
  const [callback, results] = useQuery?.useLazyGetCarsQuery();

  useEffect(() => {
    if (results?.data) {
      dispatch(setVinNumber(vin))
      router.push("/vehicle-information");
    }
  }, [results])

  const handleClick = (e: any) => {
    e.preventDefault();
    callback(vin);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <VehicleSearchSection />
        <HowItWorkSection />
        <FaqSection />
      </div>
    </div>
  );
}

export default Home
