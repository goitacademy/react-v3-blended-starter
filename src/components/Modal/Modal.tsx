import styled from "./Modal.module.css";
import type { Photo } from "../../types/photo";
import { createPortal } from "react-dom";

interface ModalProps {
  photo: Photo;
  onClose: () => void;
}

export default function Modal({ photo, onClose }: ModalProps) {
  return createPortal(
    <div
      className={styled.backdrop}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className={styled.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styled.closeButton}
          aria-label="Close modal"
          onClick={onClose}
        >
          &times;
        </button>
        {<img src={photo.src.original} alt={photo.alt} />}
      </div>
    </div>,
    document.body
  );
}
