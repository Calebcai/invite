import React, { useState, useEffect } from 'react'

export const Poupou = () => {
    const [countdown, setCountdown] = useState({});

    useEffect(() => {
        const targetDate = new Date('2023-09-16');
        const interval = setInterval(() => {
          const now = new Date();
          const distance = targetDate - now;
    
          if (distance < 0) {
            clearInterval(interval);
            setCountdown('Countdown over!');
          } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
            setCountdown({
                days,
                hours,
                minutes,
                seconds,
            });
          }
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);

    return (
        <div
            className={`flex min-h-screen bg-gradient-to-b	from-[#FCE9F1] to-[#F1D4E5] flex-col items-center justify-between p-24 pt-12 relative`}
        >
            <div className="animate__animated animate__fadeInLeft chat chat-start">
            <div className="chat-bubble text-white bg-[#96c6f9]">Hi, <br/>自从上次一别,我们也是好久没见了呢！</div>
            </div>
            <div className="animate__animated animate__fadeInRight chat chat-end" style={{ animationDelay: '1s' }}>
                <div className="chat-bubble text-white bg-[#96c6f9]">那这次我们婚礼见吧！</div>
            </div>
            <div className="font-mono text-xl antialiased font-bold text-white animate__animated animate__pulse animate__infinite text-100">
                距离约定日期还有
            </div>
            <div className="grid grid-flow-col gap-5 mb-10 text-center auto-cols-max">
            <div className="flex flex-col p-2 rounded-box text-white bg-[#96c6f9]">
                <span className="font-mono text-5xl countdown">
                <span style={{"--value": countdown.days }}></span>
                </span>
                天
            </div> 
            <div className="flex flex-col p-2 rounded-box text-white bg-[#96c6f9]">
                <span className="font-mono text-5xl countdown">
                <span style={{"--value": countdown.hours }}></span>
                </span>
                时
            </div> 
            <div className="flex flex-col p-2 rounded-box text-white bg-[#96c6f9]">
                <span className="font-mono text-5xl countdown">
                <span style={{"--value":countdown.minutes}}></span>
                </span>
                分
            </div> 
            <div className="flex flex-col p-2 rounded-box text-white bg-[#96c6f9]">
                <span className="font-mono text-5xl countdown">
                <span style={{"--value":countdown.seconds}}></span>
                </span>
                秒
            </div>
            </div>
            <div className="absolute flex flex-col items-center text-white animate-bounce bottom-3" onClick={
                () => {
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: "smooth"
                    })
                }
            }>  
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
      </div>
    )
}
