import React, { useEffect, useState, useRef } from 'react';

const characters = '!<>-_\\/[]{}—=+*^?#________';

function randomChar() {
  return characters[Math.floor(Math.random() * characters.length)];
}

const ScrambledText = ({ text, className = '', speed = 10, delay = 500 }) => {
  const [output, setOutput] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      setOutput('');
      return;
    }

    let frame = 0;
    let timeout;

    const update = () => {
      let displayed = '';
      for (let i = 0; i < text.length; i++) {
        if (i < frame) {
          displayed += text[i];
        } else {
          displayed += randomChar();
        }
      }
      setOutput(displayed);

      if (frame < text.length) {
        timeout = setTimeout(() => {
          frame++;
          update();
        }, speed);
      }
    };

    const startTimeout = setTimeout(update, delay);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeout);
    };
  }, [text, speed, delay, isVisible]);

  return (
    <span className={className} ref={ref}>
      {output}
    </span>
  );
};

export default ScrambledText;
