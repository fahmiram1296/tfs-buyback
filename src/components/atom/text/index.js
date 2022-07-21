import { styled } from "@mui/system";


const CustomText = styled('span')(({props}) => {
    return {
      ...props,
      fontFamily: "MazdaFont",
    };});

const Text = (props) => {
    return <CustomText props={props?.style}>{props.children}</CustomText>;
};

export default Text;