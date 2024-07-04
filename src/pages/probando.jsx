import {AiOutlineClose} from "react";

const modal= ({isOpen, closeModal })=>{
    if (!isOpen) return null;

    return(
        <div className="modal">
            <AiOutlineClose size={30} color="#fff"/>

        </div>

    );
};

export default modal