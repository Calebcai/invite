import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import audioFile from "./getvoice.mp3";

export default function Layout(props) {
  const parallax = useRef(null);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="absolute -translate-x-1/2 left-1/2" style={{mixBlendMode:'difference', zIndex:999}}>
        <audio autoPlay controls="controls">
          <source src={'https://res.wx.qq.com/voice/getvoice?mediaid=MzIwNjM3MDk0Ml8yMjQ3NDg2MDE2'} type="audio/mpeg" />
        </audio>
      </div>
      <Parallax ref={parallax} pages={5}>
        <ParallaxLayer
          offset={0}
          speed={0}
          style={{ pointerEvents: "none", opacity: 1 }}
        >
          {props.children[0]}
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={-2}
          style={{ backgroundColor: "rgb(242 214 231)", opacity: 0.3 }}
        />
        <ParallaxLayer
          offset={1}
          speed={1}
          // style={{ opacity: 1, backgroundColor: "skyblue" }}
        >
          {props.children[1]}
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.2} style={{ opacity: 1 }}>
          {props.children[2]}
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={-0.1}
          style={{ backgroundColor: "rgb(203 213 225)", opacity: 0.3 }}
        />
        <ParallaxLayer
          offset={3}
          style={{ opacity: 1, backgroundColor: "transparent" }}
        >
          {props.children[3]}
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          speed={-0.1}
          style={{ backgroundColor: "rgb(203 213 225)", opacity: 0.3 }}
        />
        <ParallaxLayer
          offset={4}
          style={{ opacity: 0.8, backgroundColor: "transparent" }}
        >
          {props.children[4]}
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
