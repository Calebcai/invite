import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

export default function ImgPreview() {
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
      <div className="text-center font-apercu text-xl pt-10 font-bold">
        <p>照片展示</p>
        <p className="text-sm">Photo Showcase</p>
        
      </div>
      {/*<!-- Component: Carousel with controls outside --> */}
      <div className="glide-04 relative w-full min-h-screen p-5">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden  shadow-2xl" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src="/lunbo/MIN_2370.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="/lunbo/MIN_2597.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="/lunbo/MIN_2710.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="/lunbo/MIN_2794.jpg副本.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="/lunbo/MIN_2825.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="/lunbo/MIN_2915.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            
            <li>
              <img
                src="/lunbo/MIN_2945.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="/lunbo/MIN_2975.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="/lunbo/MIN_3010.jpg副本.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="/lunbo/MIN_3011.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="/lunbo/MIN_3062.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="/lunbo/MIN_3081.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="/lunbo/MIN_3134.jpg"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
          </ul>
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
