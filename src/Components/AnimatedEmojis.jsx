import React from 'react';


const emojis = [
    "💻", "📱", "🎧", "🖥️", "🖨️", "🌐", "📡", "🚀", "⚙️", "🔌",
    "💾", "🔋", "🕹️", "🖱️", "📊", "📈", "🧬", "🔍", "📡", "🛠️",
    "💡", "🧑‍💻", "🌟", "🔗", "🖋️"
  ];
  

const AnimatedEmojis = () => {
  const getRandomPosition = () => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    return { x, y };
  };

  return (
    <>
      {emojis.map((emoji, index) => {
        const { x, y } = getRandomPosition();
        const duration = 10 + Math.random() * 15; // Random duration between 10s and 25s
        return (
          <span
            key={index}
            className="emoji"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              animationDuration: `${duration}s`, // Set random duration
            }}
          >
            {emoji}
          </span>
        );
      })}
    </>
  );
};

export default AnimatedEmojis;
