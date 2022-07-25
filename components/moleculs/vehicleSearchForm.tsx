import { FunctionComponent } from "react";

type Props = {};

export const VehicleSearchForm: FunctionComponent<Props> = ({}) => {
  return (
    <form>
      <div className="form-group input-group">
        <div className="form-label-group">
          <input
            type="emai"
            id="inputEmail4"
            className="form-control"
            placeholder="Email"
          />
          <label htmlFor="inputEmail4">Enter VIN</label>
        </div>
        <div className="form-link">
          <a href="#">WHERE IS MY VIN?</a>
        </div>
        <button type="button" className="text-uppercase mt-3 mt-md-5" disabled>
          get my offer
        </button>
      </div>
    </form>
  );
};
