import React, {useContext} from "react"
import './modal.css'
import { modalContext } from "../App"

const Modal = () => {
    const {isOpen} = useContext(modalContext)
    console.log(isOpen)
    return(
        <div className="del-modal">
            <h5>Delete note</h5>
            <p>Are you sure you want to delete this note?</p>
            <div>
                <button>CANCEL</button>
                <button>DELETE</button>
            </div>
        </div>
    )
}

export default Modal