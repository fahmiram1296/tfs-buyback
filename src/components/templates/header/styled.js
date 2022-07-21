import { styled } from "@mui/system";

export const Container = styled("div")(({ padding }) => ({
  backgroundColor: "#2B2B2B",
  display: "flex",
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '72px',
  padding: '0 25px',
}));

export const LogoImage = styled("img")({
    width: '200px',
})

export const ContainerLogo = styled("div")(({ padding }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: 'center',
}));

