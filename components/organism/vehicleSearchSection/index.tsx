import { FunctionComponent } from "react";
import { SearchFormProps, SearchForm } from "../../moleculs/searchForm";

type VehicleSearchSectionProps = {
  searchForm: SearchFormProps;
};

export const VehicleSearchSection: FunctionComponent<VehicleSearchSectionProps> = ({
  searchForm,
}) => {
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
          <SearchForm
            buttonProps={searchForm?.buttonProps}
            inputProps={searchForm?.inputProps}
            descProps={searchForm?.descProps} />
        </div>
      </div>
    </div>
  );
};
