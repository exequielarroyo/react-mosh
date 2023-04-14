import { ReactNode, useState } from 'react'

interface Props {
    children: ReactNode;
    show: boolean;
    handleShow: () => void;
}

export default function Alert({ children, show, handleShow }: Props) {

    return (
            <div className={`alert alert-primary alert-dismissible fade ${show && 'show'}`} role="alert">
            <strong>{children}</strong>
            <button type="button" onClick={handleShow} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
           )
}
