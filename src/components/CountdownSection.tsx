import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface TimeUnit {
  label: string;
  value: number;
}

const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([
    { label: 'Days', value: 0 },
    { label: 'Hours', value: 0 },
    { label: 'Minutes', value: 0 },
    { label: 'Seconds', value: 0 },
  ]);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-12-10T09:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      const d = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
      const h = Math.max(0, Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const m = Math.max(0, Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
      const s = Math.max(0, Math.floor((diff % (1000 * 60)) / 1000));

      setTimeLeft([
        { label: 'Days', value: d },
        { label: 'Hours', value: h },
        { label: 'Minutes', value: m },
        { label: 'Seconds', value: s },
      ]);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setHasAnimated(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  const renderDigits = (num: number, unitIdx: number) => {
    const digits = num.toString().padStart(2, '0').split('');

    return digits.map((digit, i) => {
      const indexFromLeft = unitIdx * 2 + i;
      const isLast = unitIdx === 3 && i === 1;
      const delay = `${indexFromLeft * 300}ms`;
      const duration = isLast ? `2s` : `1.2s`;
      const targetDigit = parseInt(digit);

      const shouldAnimate = isLast ? hasAnimated : inView;

      return (
        <div
          key={`${unitIdx}-${i}-${digit}`}
          className="relative h-16 w-10 overflow-hidden bg-[#0f0f0f] rounded border border-zinc-500"
        >
          <div
            className={`absolute top-0 w-full ${
              isLast ? 'text-tedx-red' : 'text-white'
            } font-retro`}
            style={{
              transform: shouldAnimate
                ? `translateY(-${targetDigit * 4}rem)`
                : `translateY(0rem)`,
              transition: shouldAnimate
                ? `transform ${duration} cubic-bezier(0.33, 1, 0.68, 1) ${delay}`
                : 'none',
            }}
          >
            {[...Array(10)].map((_, idx) => (
              <div
                key={idx}
                className="h-16 flex items-center justify-center text-4xl"
              >
                {idx}
              </div>
            ))}
          </div>
        </div>
      );
    });
  };

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-retro">
            <span className="text-white">Event</span>{' '}
            <span className="text-tedx-red">Countdown</span>
          </h2>
          <p className="text-tedx-gray text-lg">
            The future is approaching. Are you ready?
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center max-w-5xl mx-auto">
          {timeLeft.map((unit, idx) => (
            <div
              key={unit.label}
              className="bg-[#121212] border border-zinc-500 rounded-2xl p-4"
            >
              <div className="flex justify-center gap-1 mb-2">
                {renderDigits(unit.value, idx)}
              </div>
              <div className="text-white text-sm font-semibold uppercase font-retro tracking-wide">
                {unit.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="bg-[#121212] border border-zinc-500 rounded-2xl p-6 max-w-md mx-auto">
            <p className="text-tedx-red font-semibold text-lg mb-2">
              December 10, 2025
            </p>
            <p className="text-white">CUSAT Campus, Kochi</p>
            <p className="text-tedx-gray text-sm mt-2">
              9:00 AM – 6:00 PM IST
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
