import { FunctionComponent } from "react";
import MenuIcon from '../../../assets/menu.png';
import Image from "next/image";

type Props = {
};

export const Header: FunctionComponent<Props> = ({}) => {
    return (
      <header className={`secondary-header`}>
        <nav
          className={`navbar navbar-expand-lg container`}
        >
          <a
            title="Mazda Financial Services"
            className={`navbar-brand`}
            href="home.html"
          >
            <img
              src="https://toyotafinancial-h.assetsadobe.com/is/image/content/dam/mazdafinancial/global/mazdafs-logo.jpg?wei=130"
              className={`img-fluid`}
              alt="Mazda Financial Services"
            />
          </a>
          <ul
            className={`navbar-nav navbar-right`}
          >
            <li className={`nav-item`}>
              <a className={`nav-link`}>
                <Image src={MenuIcon} alt="menuIcon" />
                <span>Menu</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
};
