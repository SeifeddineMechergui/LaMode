import React from "react";
import styles from "../../../styles/style";
import { brandingData, categoriesData } from "../../../static/data";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={`${styles.section} hidden sm:block`}>
        <div className="branding my-12 flex flex-wrap justify-between w-full shadow-sm bg-white p-5 rounded-md">
          {brandingData &&
            brandingData.map((i, index) => (
              <div
                className="flex items-start w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4"
                key={index}
              >
                <div className="flex items-center w-full">
                  {i.icon}
                  <div className="px-3">
                    <h3 className="font-bold text-sm md:text-base">
                      {i.title}
                    </h3>
                    <p className="text-xs md:text-sm">{i.description}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div
        className={`${styles.section} bg-white p-6 rounded-lg mb-12`}
        id="categories"
      >
        <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
          {categoriesData &&
            categoriesData.map((i) => {
              const handleSubmit = (i) => {
                navigate(`/products?category=${i.title}`);
              };
              return (
                <div
                  className="w-full h-[100px] flex items-center justify-between cursor-pointer overflow-hidden"
                  key={i.id}
                  onClick={() => handleSubmit(i)}
                >
                  <h5 className={`text-[18px] leading-[1.3]`}>{i.title}</h5>
                  <img
                    src={i.imageUrl}
                    className="w-[120px] object-cover"
                    alt=""
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Categories;
