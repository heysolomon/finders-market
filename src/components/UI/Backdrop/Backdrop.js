const Backdrop = ({ closeModal, show }) =>
  show && (
    <div
      className="fixed top-0 left-0 h-full z-10 w-full bg-[rgba(0,0,0,0.7)]"
      onClick={closeModal}
    ></div>
  );

export default Backdrop;
