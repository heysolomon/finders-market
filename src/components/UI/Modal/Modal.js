import Backdrop from "../Backdrop/Backdrop";

export default function Modal({closeModal, children}) {
    return(
        <>
            <Backdrop closeModal={closeModal}/>
            {children}
        </>
    );
}