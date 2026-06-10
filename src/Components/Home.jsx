import React, { useState } from 'react';

export default function ColorBox() {
  // 1. RGB 색상을 저장할 state 생성
  const [rgbColor, setRgbColor] = useState('rgb(200, 200, 200)');

  // 2. 랜덤 RGB 색상을 생성하는 함수
  const changeColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setRgbColor(`rgb(${r}, ${g}, ${b})`);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {/* 3. 인라인 스타일에 state 적용 */}
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: rgbColor,
          border: '2px solid black',
          margin: '0 auto 20px',
          transition: 'background-color 0.3s ease',
        }}
      />
      <h1>박스 배경색 변경</h1>
      <button onClick={changeColor}>색상 변경</button>
      <p>현재 배경색은 {rgbColor}입니다</p>
    </div>
  );
}