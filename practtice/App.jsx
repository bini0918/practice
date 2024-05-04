import React, { useState } from 'react';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2>안녕하세요!</h2>
      <p>내용내용내용</p>
      <button onClick={openModal}>버튼 열기</button>
      
      {isModalOpen && (
        <div className="modal">
          <div className="modal_body">
            <h2>안녕하세요</h2>
            <p>모달 내용은 어쩌고 저쩌고..</p>
            <div className="close_modal">
              <button onClick={closeModal}>닫기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
