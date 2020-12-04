import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import Background1 from "../Background1/Background1.component";
import Background2 from "../Background2/Background2.component";
// import Foreground1 from "../Foreground1/Foreground1.component";
// import Foreground2 from "../Foreground2/Foreground2.component";

export default function Sceneries({ Queen }) {
  const sceneKeyframes = [
    { transform: "translateX(100%)" },
    { transform: "translateX(-100%)" },
  ];

  const bgTiming = {
    duration: 36000,
    iterations: Infinity,
  };

  // const fgTiming = {
  //   duration: 12000,
  //   iterations: Infinity,
  // };

  const background1 = useWebAnimations({
    keyframes: sceneKeyframes,
    timing: bgTiming,
  });

  const background2 = useWebAnimations({
    keyframes: sceneKeyframes,
    timing: bgTiming,
  });

  // const foreground1 = useWebAnimations({
  //   keyframes: sceneKeyframes,
  //   timing: fgTiming,
  // });

  // const foreground2 = useWebAnimations({
  //   keyframes: sceneKeyframes,
  //   timing: fgTiming,
  // });

  var backgroundMovement1 = background1?.getAnimation();
  var backgroundMovement2 = background2?.getAnimation();
  // var foregroundMovement1 = foreground1?.getAnimation();
  // var foregroundMovement2 = foreground2?.getAnimation();

  if (typeof backgroundMovement1?.currentTime != "undefined") {
    backgroundMovement1.currentTime =
      backgroundMovement1?.effect.getTiming().duration / 2;
  }
  // if (typeof foregroundMovement1?.currentTime != "undefined") {
  //   foregroundMovement1.currentTime =
  //     foregroundMovement1?.effect?.getTiming()?.duration / 2;
  // }

  var sceneries = [
    backgroundMovement1,
    backgroundMovement2,
    // foregroundMovement1,
    // foregroundMovement2,
  ];
  var adjustBackgroundPlayback = () => {
    if (Queen?.getAnimation()?.playbackRate < 0.8) {
      sceneries.forEach((anim) => {
        anim?.updatePlaybackRate(
          (Queen?.getAnimation()?.playbackRate / 2) * -1
        );
      });
    } else if (Queen?.getAnimation()?.playbackRate > 1.2) {
      sceneries.forEach((anim) => {
        anim?.updatePlaybackRate(Queen?.getAnimation()?.playbackRate / 2);
      });
    } else {
      sceneries.forEach((anim) => {
        anim?.updatePlaybackRate(0);
      });
    }
  };
  adjustBackgroundPlayback();

  setInterval(() => {
    if (Queen?.getAnimation()?.playbackRate > 0.4) {
      Queen?.getAnimation()?.updatePlaybackRate(
        Queen?.getAnimation()?.playbackRate * 0.9
      );
    }
    adjustBackgroundPlayback();
  }, 3000);

  var goFaster = () => {
    Queen?.getAnimation()?.updatePlaybackRate(
      Queen?.getAnimation()?.playbackRate * 1.1
    );
    adjustBackgroundPlayback();
  };

  document.addEventListener("click", goFaster);
  document.addEventListener("touchstart", goFaster);

  return (
    <div>
      <div ref={background1.ref}>
        <Background1 />
      </div>
      <div ref={background2.ref}>
        <Background2 />
      </div>
      {/* <div ref={foreground1.ref}>
        <Foreground1 />
      </div>
      <div ref={foreground2.ref}>
        <Foreground2 />
      </div> */}
    </div>
  );
}
