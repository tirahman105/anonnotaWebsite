import React, { useState, useEffect } from "react";

const Banner = () => {
  // Set the target date for the countdown
  const targetDate = new Date("2024-01-01T00:00:00Z");

  // Calculate the initial remaining time
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      // If the target date has passed, return all zeros
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <div>
        <div>This is AnonnoTa</div>
      </div>
      {/* <h1 className="text-center p-4 text-3xl font-bold">
        AnonnoTa Website will live after{" "}
      </h1>
      <div className="flex items-center justify-center mt-10">
        <div className="flex gap-5">
          <div>
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": timeLeft.days }}></span>
            </span>
            days
          </div>
          <div>
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": timeLeft.hours }}></span>
            </span>
            hours
          </div>
          <div>
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": timeLeft.minutes }}></span>
            </span>
            min
          </div>
          <div>
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": timeLeft.seconds }}></span>
            </span>
            sec
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Banner;
