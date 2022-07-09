import Backdrop from "../Backdrop/Backdrop";

export default function Modal({ closeModal, show, children }) {
  return (
    <>
      <Backdrop closeModal={closeModal} show={show} />
      {children}
    </>
  );
}
