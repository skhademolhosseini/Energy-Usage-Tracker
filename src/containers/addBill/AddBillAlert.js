import React from "react";
import { Toast } from "react-bootstrap";

const AddBillAlert = (show) => {
  return (
    <>
    <Toast show={show}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
        </>
  )
}

export default AddBillAlert;