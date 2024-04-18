import React from 'react';
import { useNavigate } from 'react-router-dom';

function PageEr(): JSX.Element {
    const navigate = useNavigate()
  return (
    <div className="errq">
      <p id="error">
        E <span>r</span>ror
      </p>
      <p id="code">
        4<span>0</span>
        <span>4</span>
      </p>
      <button className="btn-back-err" onClick={() => navigate('/')}>
        <span>Назад</span>
      </button>
    </div>
  );
}

export default PageEr;
