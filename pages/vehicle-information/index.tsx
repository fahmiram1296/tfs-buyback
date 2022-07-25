import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Header } from "../../components/organism/header";
import { VehicleSearchSection } from "../../components/organism/vehicleSearchSection";
import { selectedVinNumber } from "../../redux/features/cars/selector";
import { carsApi, useQuery } from "../../redux/features/cars/service";
import { Cars } from "../../redux/features/cars/types";
import { useAppSelector } from "../../redux/hooks";


const CarsDetails: NextPage = () => {
  const vinNumber = useAppSelector(selectedVinNumber);
  const carDetails = useQuery?.useGetCarsQuery(vinNumber)?.data;
  const [currentTab, setCurrentTab] = useState('basic');

  const basicUi = () => {
    return(<div>INI Basic</div>)
  };

  const conditionUi = () => {
    return(<div>INI Condition</div>)
  };

  const photoUi = () => {
    return <div>INI photo</div>;
  };

  const handleClickButton = (e: any, key: string) => {
    setCurrentTab(key)
  };
  
  const uiView:any  = {
    basic: basicUi(),
    condition: conditionUi(),
    photo: photoUi(),
  };
  
  return (
    <div>
      <Header />
      <VehicleSearchSection />
      {/* <button onClick={(e) => handleClickButton(e, "basic")}>basic</button>
      <button onClick={(e) => handleClickButton(e, "condition")}>
        condition
      </button>
      <button onClick={(e) => handleClickButton(e, "photo")}>photo</button>
      <div>{uiView[currentTab]}</div> */}
    </div>
  );
};

export default CarsDetails;
