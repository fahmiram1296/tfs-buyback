import { useEffect } from 'react';
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import * as styled from './styled';
import Text from '../../atom/text';

const logoSrc =
  "https://toyotafinancial-h.assetsadobe.com/is/image/content/dam/mazdafinancial/global/mazdafs-logo.jpg?wei=130";

const SvgCostum = (props) => {
  return (
    <SvgIcon>
      <path
        fill="#D5D5D5"
        fill-rule="evenodd"
        d="M60.85 51H57.7c-1.74 0-3.15 1.343-3.15 3v3c0 1.657 1.41 3 3.15 3h3.15c1.74 0 3.15-1.343 3.15-3v-3c0-1.657-1.41-3-3.15-3M49.3 51h-3.15C44.41 51 43 52.343 43 54v3c0 1.657 1.41 3 3.15 3h3.15c1.74 0 3.15-1.343 3.15-3v-3c0-1.657-1.41-3-3.15-3m11.55-11H57.7c-1.74 0-3.15 1.343-3.15 3v3c0 1.657 1.41 3 3.15 3h3.15c1.74 0 3.15-1.343 3.15-3v-3c0-1.657-1.41-3-3.15-3m-8.4 3v3c0 1.657-1.41 3-3.15 3h-3.15C44.41 49 43 47.657 43 46v-3c0-1.657 1.41-3 3.15-3h3.15c1.74 0 3.15 1.343 3.15 3"
        transform="translate(-43 -40)"
      />
    </SvgIcon>
  );
}

const HeaderTemplate = () => {
    return (
      <styled.Container>
        <styled.LogoImage src={logoSrc} alt="logo" />
        <styled.ContainerLogo>
          <SvgCostum color="secondary" />
          <Text
            style={{
              color: "#D5D5D5",
            }}
          >
            MENU
          </Text>
        </styled.ContainerLogo>
      </styled.Container>
    );
};

export default HeaderTemplate;