import React from "react";
import styles from "../../styles/style";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
      <div className="flex items-start">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-1989-2016.png"
            alt="Dell Logo"
            style={{ width: "150px", height: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://th.bing.com/th/id/R.83eab36f8ebe21cd09608ea73d95523a?rik=rss%2beh5LjtGYIw&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f4%2fMicrosoft-Logo-Transparent-Background.png&ehk=rqBs2L0Wm3uKUNNIPlHrIPBJHzHIZCC8ju1yM4NkW2g%3d&risl=&pid=ImgRaw&r=0"
            alt="Microsoft Logo"
            style={{ width: "160px", height: "160px", objectFit: "contain" }}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://th.bing.com/th/id/R.1b48640280f30e3d4afa05b0db37d0bd?rik=yAzQA3nMuGBogw&riu=http%3a%2f%2fwww.lgnewsroom.com%2fwp-content%2fuploads%2f2017%2f07%2fLG-Logo20170727132503101.jpg&ehk=8Fe74bIEi8Du5ljwPQN9uthLU5gRciw%2b%2baCKMFcHSO8%3d&risl=&pid=ImgRaw&r=0"
            alt="LG Logo"
            style={{ width: "150px", height: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png"
            alt="Sony Logo"
            style={{ width: "150px", height: "150px", objectFit: "contain" }}
          />
        </div>

        <div className="flex items-start">
          <img
            src="https://th.bing.com/th/id/OIP.pW0TOZyl_OZMIuo5HjUsyQHaIf?rs=1&pid=ImgDetMain"
            alt="Apple Logo"
            style={{ width: "100px", height: "100px", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
