import React, { useState } from 'react';

const ResultImg = ({ paramScore, iconSize ,circleSize }) => {
  const [score, setScore] = useState(paramScore);

  const getImagePath = (paramScore) => {
    switch (paramScore) {
      case '1':
        return '/images/1.png';
      case '2':
        return '/images/2.png';
      case '3':
        return '/images/3.png';
      case '4':
        return '/images/4.png';
      case '5':
        return '/images/5.png';
      case '6':
        return '/images/6.png';
      case '7':
        return '/images/7.png';
      case '8':
        return '/images/8.png';
      default:
        return '/images/default.png';
    }
  };

  const gradientColors = [
    'radial-gradient(circle, rgba(0, 255, 0, 1) 0%, rgba(0, 255, 0, 0.7) 60%, transparent 100%)',
    'radial-gradient(circle, rgba(85, 255, 0, 1) 0%, rgba(85, 255, 0, 0.7) 60%, transparent 100%)',
    'radial-gradient(circle, rgba(170, 255, 0, 1) 0%, rgba(170, 255, 0, 0.7) 60%, transparent 100%)',
    'radial-gradient(circle, rgba(255, 255, 0, 1) 0%, rgba(255, 255, 0, 0.7) 60%, transparent 100%)',
    'radial-gradient(circle, rgba(255, 170, 0, 1) 0%, rgba(255, 170, 0, 0.7) 60%, transparent 100%)',
    'radial-gradient(circle, rgba(255, 85, 0, 1) 0%, rgba(255, 85, 0, 0.7) 60%, transparent 100%)',
    'radial-gradient(circle, rgba(255, 0, 0, 1) 0%, rgba(255, 0, 0, 0.7) 60%, transparent 100%)',
    'radial-gradient(circle, rgba(255, 0, 0, 1) 0%, rgba(255, 0, 0, 0.7) 60%, transparent 100%)',
  ];

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* 배경 원형 */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
          width: circleSize,
          height: circleSize,
          borderRadius: '50%',
          background: gradientColors[paramScore - 1],
          overflow: 'hidden',
        }}
      >
        {/* 가상 원형 */}
        <div
          style={{
            content: '',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '70%',
            height: '70%',
            borderRadius: '50%',
            backgroundColor: '#373531',
            zIndex: 1,
          }}
        ></div>
      </div>
      {/* 아이콘 */}
      <img
        src={getImagePath(paramScore)}
        alt={`Result Score ${paramScore}`}
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: iconSize,
          maxHeight: iconSize,
        }}
      />
    </div>
  );
};

export default ResultImg;
