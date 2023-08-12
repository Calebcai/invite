import React, { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import { list } from "postcss";

export default function ImgPreview() {
  const countArray = Array.from({ length: 17 }, (_, index) => index + 1);

  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3500,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-300">
      <div className="pt-10 text-xl font-bold text-center font-apercu">
        <p>照片展示</p>
        <p className="text-sm">Photo Showcase</p>
        
      </div>
      {/*<!-- Component: Carousel with controls outside --> */}
      <div className="relative w-full min-h-screen p-5 glide-04">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden shadow-2xl" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {countArray.map((num) => (
              <li>
                <img
                  src={`/lunbo/${num}.jpg`}
                  className="w-full max-w-full max-h-full m-auto"
                />
              </li>
            ))}
          </ul>
          {/* todo */}
          {/* <div className="absolute flex justify-between left-5 right-5" style={{ top: '100px', opacity: 0.4 }}>
            <a href="#slide1" onClick={()=>{
              
            }} className="w-5 h-5 btn btn-circle">❮</a> 
            <a href="#slide3"
            onClick={()=>{
              
            }} 
            className="w-5 h-5 btn btn-circle">❯</a>
          </div> */}
        </div>
        <div className="mt-10 text-center text-50 text-[#FFFFFF] font-semibold absolute top-1/2 -translate-y-1/2">
          <p>新郎：蔡基培 💗 新娘：汝肖倩</p>
          <p>2023.9.16 17:00</p>
          <br />
          <p  className="text-[#feffb5]">爱情，众水不能熄灭，大水也不能淹没。</p>
          <p className="text-[#f7f8cd]">Many waters cannot quench love; rivers cannot sweep it away.</p>
          <br />
          <p>良人属我，我也属他。</p>
          <p>My beloved is mine, and I am his.</p>
        </div>
      </div>
    </div>
  );
}
