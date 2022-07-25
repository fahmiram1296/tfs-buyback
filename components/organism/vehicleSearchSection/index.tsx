import { FunctionComponent } from "react";
import { VehicleSearchForm } from "../../moleculs/vehicleSearchForm";
type Props = {
};

export const VehicleSearchSection: FunctionComponent<Props> = ({}) => {
    return (
      <div className="container">
        <div className="row img-form">
          <div className="col-md-6">
            <h2 className="text-uppercase">car buyback</h2>
            <h4 className="text-uppercase">
              Let’s get you a real offer of your car <br /> from an authorized
              dealer
            </h4>
          </div>
          <div className="col-md-6 mt-5 mt-md-0">
            <VehicleSearchForm />
          </div>
        </div>
      </div>
    );
};
