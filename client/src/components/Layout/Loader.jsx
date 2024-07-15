import React from "react";
import Lottie from "react-lottie";
import animationData from "../../Assests/animations/Animation - 1718914824813.json";

const Loader = () => {
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  
    // const onError = (error) => {
    //   console.error("Lottie animation error:", error);
    // };
  
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Lottie
          options={defaultOptions}
          width={300}
          height={300}
        />
      </div>
    );
  };
  
  
export default Loader;
