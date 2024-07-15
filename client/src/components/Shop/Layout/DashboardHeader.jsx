import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { backendUrl } from "../../../server";

const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);
// console.log(seller);

  return (
    <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div>
        <Link to="/">
          <img
            src="https://www.lamode.tn/img/la-mode-logo-1615421552.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Link className="800px:block hidden" to="/dashboard/cupouns">
            <AiOutlineGift
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link className="800px:block hidden" to="/dashboard-events">
            <MdOutlineLocalOffer
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link className="800px:block hidden" to="/dashboard-products">
            <FiShoppingBag
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link className="800px:block hidden" to="/dashboard-orders">
            <FiPackage color="#555" size={30} className="mx-5 cursor-pointer" />
          </Link>
          <Link className="800px:block hidden" to="/dashboard-messages">
            <BiMessageSquareDetail
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          {seller && (
            <Link to={`/shop/${seller._id}`}>
              <img
                src={`${backendUrl}${seller?.avatar}`}
                alt="avatar"
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
