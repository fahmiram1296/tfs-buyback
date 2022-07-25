import { FunctionComponent } from "react";

type ButtonProps = {
  handleClick: Function;
  text: string;
  disabled: boolean;
};

type InputProps = {
  handleInput: Function;
  value: string | number;
  placeholder: string;
  errorText: string;
  isError: boolean;
};

type DescProps = {
  key: string;
  text: string;
  handleDesc: Function;
};

export type SearchFormProps = {
  buttonProps: ButtonProps;
  inputProps: InputProps;
  descProps?: DescProps;
};

export const SearchForm: FunctionComponent<SearchFormProps> = ({
  buttonProps,
  inputProps,
  descProps,
}) => {  
  return (
    <form>
      <div className="form-group input-group">
        <div className="form-label-group">
          <input
            type="email"
            id="inputEmail4"
            className={`form-control ${
              inputProps?.isError ? "form-error" : ""
            }`}
            placeholder="Email"
            onChange={(e) => inputProps?.handleInput(e)}
          />
          <label htmlFor="inputEmail4">{inputProps?.placeholder}</label>
          {inputProps?.isError && (
            <>
              <i className="bi bi-exclamation-circle input-icon"></i>
              <span className="form-error-text">{inputProps?.errorText}</span>
            </>
          )}
        </div>
        <div className="form-link">
          <a
            key={descProps?.key}
            href="#"
            onClick={() => descProps?.handleDesc('descriptionSearchForm')}
          >
            {descProps?.text}
          </a>
        </div>
        <button
          type="button"
          className={`text-uppercase mt-3 mt-md-5 ${
            buttonProps?.disabled ? "" : "button-enable"
          }`}
          disabled={buttonProps?.disabled}
          onClick={(e) => buttonProps?.handleClick(e)}
        >
          {buttonProps?.text}
        </button>
      </div>
    </form>
  );
};
