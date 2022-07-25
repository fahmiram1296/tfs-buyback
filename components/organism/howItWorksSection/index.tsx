import Image from "next/image";
import { FunctionComponent } from "react";
import Icon1 from "../../../assets/icon1.png";
import Icon2 from "../../../assets/icon2.png";
import Icon3 from "../../../assets/icon3.png";

type Props = {};

export const HowItWorkSection: FunctionComponent<Props> = ({}) => {
  return (
    <div className="how-does-work">
      <div className="row">
        <div className="col-12 text-center position-relative">
          <h2 className="text-uppercase">How does it work?</h2>
          <p>
            Get quote of your vehicle from the dealer <br /> in a few easy
            steps.
          </p>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-3 text-center">
          <p>
            <Image src={Icon1} alt="" />
          </p>
          <p>
            Share a few vehicle details and
            <br /> we’ll extend a real, firm offer from
            <br /> authorized dealer.
          </p>
        </div>
        <div className="col-md-3 text-center">
          <p>
            <Image src={Icon2} alt="" />
          </p>
          <p>
            Dealer will bid on your behalf to
            <br /> get you the best deal.
          </p>
        </div>
        <div className="col-md-3 text-center">
          <p>
            <Image src={Icon3} alt="" />
          </p>
          <p>
            You’ll get notified once the deal is <br />
            final for the next steps.
          </p>
        </div>
      </div>
    </div>
  );
};
