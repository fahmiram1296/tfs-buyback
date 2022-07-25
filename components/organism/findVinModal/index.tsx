import Image from "next/image";
import { FunctionComponent } from "react";
import vinImage from "../../../assets/VIN-popup-image.png";
import Modal from 'react-bootstrap/Modal';


type Props = {
  handleClose: Function;
  show: boolean;
};

export const FindVinModal: FunctionComponent<Props> = ({ handleClose, show }) => {
  return (
    <>
      <Modal show={show} onHide={() => handleClose("closeModal")}>
        <Modal.Header closeButton>
          <h5 className="modal-title text-center w-100" id="myVINModalLabel">
            WHERE IS MY VIN
          </h5>
        </Modal.Header>
        <Modal.Body className="text-center">
          <Image src={vinImage} alt="" className="img-fluid" />
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-secondary text-uppercase"
            data-dismiss="modal"
            onClick={() => handleClose("closeModal")}
          >
            okay
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

