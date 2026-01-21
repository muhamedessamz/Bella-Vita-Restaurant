import React from 'react';
import './Modal.css';

/**
 * Reusable Modal Component
 * @param {boolean} show - Show/hide modal
 * @param {Function} onClose - Close handler
 * @param {string} title - Modal title
 * @param {ReactNode} children - Modal content
 * @param {string} size - Modal size (sm, md, lg, xl)
 */
const Modal = ({ show, onClose, title, children, size = 'md', footer }) => {
    if (!show) return null;

    const sizeClass = `modal-${size}`;

    return (
        <>
            <div className="modal-backdrop fade show" onClick={onClose}></div>
            <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                <div className={`modal-dialog ${sizeClass} modal-dialog-centered`} role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{title}</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={onClose}
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">{children}</div>
                        {footer && <div className="modal-footer">{footer}</div>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
