import { useEffect, type ReactNode } from "react";
import styled from "./Modal.module.css";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    const handleEscapePress = (e: KeyboardEvent) => {
      if (e.code === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscapePress);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscapePress);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={handleBackdropClick}
      className={styled.backdrop}
      role="dialog"
      aria-modal="true"
    >
      <div className={styled.modal}>
        <button
          onClick={onClose}
          className={styled.closeButton}
          aria-label="Close modal"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
