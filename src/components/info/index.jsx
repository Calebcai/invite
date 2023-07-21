// export const Infomation = () => {
//   return (
//     <div
//       className="hero min-h-screen"
//       style={{
//         backgroundImage:
//           "url('https://picsum.photos/id/1005/1920/1080')",
//       }}
//     >
//       <div className="hero-overlay bg-opacity-60"></div>
//       <div className="hero-content text-center text-neutral-content">
//         <div className="max-w-md">
//           <h1 className="mb-5 text-5xl font-bold">信息填写</h1>
//           <p className="mb-5">
//             welcome to my wedding , please fill in the information below
//           </p>
//           <button className="btn btn-primary" onClick={() => {
//             window.location.href = 'https://wj.qq.com/s2/12783628/334c/'
//           }}>我要参加</button>
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import styles from "./styles.module.css";

const slides = [
  '/MIN_2354.jpg',
  '/MIN_2613.jpg',
  '/MIN_2438.jpg',
  '/MIN_3123.jpg',
  '/MIN_2565.jpg',
  '/MIN_2618.jpg',
  '/MIN_2647.jpg',
  '/MIN_2690.jpg',
  '/MIN_3086.jpg副本.jpg',
  '/MIN_2749.jpg',
  '/MIN_2854.jpg副本.jpg',
  '/MIN_3059.jpg',
  '/MIN_2873.jpg',
  '/MIN_2997.jpg',
  '/MIN_2888.jpg',
  '/MIN_3129.jpg',
];

export default function Infomation() {
  const [index, set] = useState(0);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, delay: 3000 },
    config: { duration: 3000 },
    onRest: (_a, _b, item) => {
      if (index === item) {
        set((state) => (state + 1) % slides.length);
      }
    },
    exitBeforeEnter: true,
  });
  return (
    <div className="flex fill center">
      {transitions((style, i) => (
        <animated.div
          className={styles.bg}
          style={{
            ...style,
            backgroundImage: `url(${slides[i]})`,
          }}
        />
      ))}
      <div className="hero-content text-center text-neutral-content absolute top-1/2 -translate-y-1/2">
         <div className="animate-gradient-slide max-w-md bg-gradient-to-r from-[#2626269e] via-[#393e46d5] to-[#262626ad] text-transparent bg-clip-text">
           <h1 className="mb-5 text-5xl font-bold">登记信息</h1>
          <p className="mb-5">
                   欢迎参加我们的婚礼，请点击按钮登记来宾信息！<br />
             welcome to my wedding , please fill in the information below!
           </p>
           <button  style={{ opacity: 0.8 }} className="btn glass" onClick={() => {
            window.location.href = 'https://wj.qq.com/s2/12783628/334c/'
          }}>我要参加</button>
        </div>
      </div>
    </div>
  );
}
