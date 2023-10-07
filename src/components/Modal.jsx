import React, {useContext} from "react"
import ReactDOM from 'react-dom'
import './modal.css'
import { modalContext } from "../App"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const ModalStyles = {
    position: 'fixed',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}

const OverlayStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: 'rgba(0,0,0,0.7)',
    zIndex: '1000'
}
const Modal = ({title, id}) => {
    const navigate = useNavigate()
    const {isOpen, setIsOpen} = useContext(modalContext)
    console.log(isOpen)
    if(!isOpen) return null
    return ReactDOM.createPortal(
        <>
            <div style={OverlayStyle} onClick={()=> setIsOpen(false)}></div>
            <div className="del-modal" style={ModalStyles}>
                <h5>Delete note</h5>
                <p>Are you sure you want to delete "{title}" note?</p>
                <div>
                    <button onClick={() => setIsOpen(false)}>CANCEL</button>
                    <button onClick={async()=>{
                        await axios.post(`/api/v1/notes/${id}`)
                        console.log('note deletion successful')
                        navigate('/')
                        setIsOpen(false)
                    }}>DELETE</button>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal