import type { NextPage } from 'next'
import { setVinNumber } from '../redux/features/cars/action'
import { useAppDispatch } from '../redux/hooks'
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
  const [vin, setVin] = useState('');
  const [callback, results] = useQuery?.useLazyGetCarsQuery();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const checkError = (results: any) => {
    if (
      results?.isError &&
      "data" in results?.error
    ) {
      const errorData: any = results?.error?.data;
      setIsError(true);
      setErrorMessage(errorData?.message);
    } else if (!results?.isError) {
      dispatch(setVinNumber(vin));
      router.push("/vehicle-information");
    }

  };


  useEffect(() => {
    if (!results?.isUninitialized && !results?.isLoading) {
      checkError(results);
    }
  }, [results])

  const handleClick = (e: any) => {    
    e.preventDefault();
    callback(vin);
  };

  const handleInput = (e: any) => {
    const { value } = e?.currentTarget;
    setErrorMessage('');
    setIsError(false);
    setVin(value);
  };
  
  const checkDisable = () => isError || vin === '';  

  return (
    <div>
      <Header />
      <div className="container">
        <VehicleSearchSection
          searchForm={{
            buttonProps: {
              handleClick: (e: any) => handleClick(e),
              text: "GET  MY OFFER",
              disabled: checkDisable(),
            },
            inputProps: {
              handleInput: (e: any) => handleInput(e),
              placeholder: "Enter VIN",
              value: vin,
              errorText: errorMessage,
              isError: isError,
            },
            descProps: {
              key: "desc",
              handleDesc: (e: any) => handleClick(e),
              text: "WHERE IS MY VIN",
            },
          }}
        />
        <HowItWorkSection />
        <FaqSection />
      </div>
    </div>
  );
}

export default Home
