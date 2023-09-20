import React, { useState, useEffect } from 'react';
import './middlepart.css';

function MiddlePart() {
  // Set your birthday date and time (23rd September at 12:00 AM)
  const birthday = new Date('2023-09-23T00:00:00');

  // Calculate the time remaining until the birthday
  const calculateTimeLeft = () => {
    const currentTime = new Date();
    const difference = birthday - currentTime;

    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Happy Birthday Total!</h1>
        <div className="Countdown">
          <div className="Countdown-item">
            <span>{timeLeft.days}</span>
            <p>Days</p>
          </div>
          <div className="Countdown-item">
            <span>{timeLeft.hours}</span>
            <p>Hours</p>
          </div>
          <div className="Countdown-item">
            <span>{timeLeft.minutes}</span>
            <p>Minutes</p>
          </div>
          <div className="Countdown-item">
            <span>{timeLeft.seconds}</span>
            <p>Seconds</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default MiddlePart;
