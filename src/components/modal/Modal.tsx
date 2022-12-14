import React, { useEffect, useRef } from "react"
import "./Modal.css"

type Props = {
    isOpened: boolean
    onClose: () => void
    children: React.ReactNode
}

export default function Modal({ isOpened, onClose, children }: Props) {
    const ref: any = useRef()

    useEffect(() => {
        if (isOpened) {
            ref.current?.showModal()
        } else {
            ref.current?.close()
        }
    }, [isOpened])

    const preventAutoClose = (e: React.MouseEvent) => e.stopPropagation()

    return (
        <dialog className="modal" ref={ref} onCancel={onClose} onClick={onClose}>
            <div onClick={preventAutoClose}>{children}</div>
        </dialog>
    )
}
