import type { NextPage } from "next";
import { useEffect } from "react";
import { selectedCars } from "../../redux/features/cars/selector";
import { useAppSelector } from "../../redux/hooks";

const CarsDetails: NextPage = () => {
  const sCars = useAppSelector(selectedCars);

  useEffect(() => {
    console.log(sCars);
  }, []);

  return <div>{sCars?.name}</div>;
};

export default CarsDetails;
