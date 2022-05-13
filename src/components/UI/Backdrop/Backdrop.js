

export default function Backdrop({closeModal}) {
    return(
        <div className="fixed top-0 left-0 h-full z-5 w-full bg-[rgba(0,0,0,0.7)]" onClick={closeModal}></div>
    );
}