import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { setSelectedCars } from '../redux/features/cars/action'
import { useAppDispatch } from '../redux/hooks'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleClick = (e: any) => {
      dispatch(
          setSelectedCars({
            name: "BMW",
            color: "red",
          })
        );
    e.preventDefault();
    router.push('/cars-details');

  };

  return (
    <div>
      HAI INI HOMAPAGE
      <button
        className={styles.button}
        aria-label="Decrement value"
        onClick={handleClick}
      >
        click me
      </button>
    </div>
  );
}

export default Home
