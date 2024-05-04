import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ closeModal }) {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal_body">
          <h2>안녕하세요</h2>
          <p>모달 내용은 어쩌고 저쩌고..</p>
          <div className="close_modal">
            <button onClick={closeModal}>닫기</button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default Modal;