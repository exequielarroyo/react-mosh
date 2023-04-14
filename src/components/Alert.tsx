import { ReactNode, useState } from 'react'

interface Props {
    children: ReactNode;
    onClose: () => void;
}

export default function Alert({ children, onClose }: Props) {

    return (
            <div className={`alert alert-primary alert-dismissible`}>
            <strong>{children}</strong>
            <button type="button" onClick={onClose} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
           )
}
