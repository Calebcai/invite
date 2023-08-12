// export const Infomation = () => {
//   return (
//     <div
//       className="min-h-screen hero"
//       style={{
//         backgroundImage:
//           "url('https://picsum.photos/id/1005/1920/1080')",
//       }}
//     >
//       <div className="hero-overlay bg-opacity-60"></div>
//       <div className="text-center hero-content text-neutral-content">
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
    <div className="min-h-screen bg-[#c0c3c653]">
      {transitions((style, i) => (
        <animated.div
          className={styles.bg}
          style={{
            ...style,
            backgroundImage: `url(${slides[i]})`,
          }}
        />
      ))}
      <div className="absolute text-center -translate-y-1/2 hero-content text-neutral-content top-1/2">
         <div className="animate-gradient-slide max-w-md bg-gradient-to-r from-[#2626269e] via-[#393e46d5] to-[#262626ad] text-transparent bg-clip-text">
           <h1 className="mb-5 text-5xl font-bold">登记信息</h1>
          <p className="mb-5">
                   欢迎参加我们的婚礼，请点击按钮登记来宾信息！<br />
             welcome to my wedding , please fill in the information below!
           </p>
           <button className="text-white bg-black btn glass" onClick={() => {
            window.location.href = 'https://wj.qq.com/s2/12783628/334c/'
          }}>我要参加</button>
        </div>
      </div>
    </div>
  );
}
