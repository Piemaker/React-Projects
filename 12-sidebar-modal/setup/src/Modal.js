import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isShowModal, setIsShowModal } = useGlobalContext();

  return (
    <>
      <div
        className={` ${
          isShowModal ? "modal-overlay show-modal" : "modal-overlay"
        }`}
      >
        <div className="modal-container">
          <h3>modal content</h3>
          <button
            className="close-modal-btn"
            onClick={() => setIsShowModal(!isShowModal)}
          >
            <FaTimes></FaTimes>
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal
