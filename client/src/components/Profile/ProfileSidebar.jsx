import React from "react";
import { AiOutlineLogout, AiOutlineMessage } from "react-icons/ai";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineTrackChanges } from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import { RiLockPasswordLine } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

const ProfileSidebar = ({ setActive, active }) => {
  const navigate = useNavigate();

  const logOutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload(true);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  return (
    <div className="w-full bg-white shadow-sm rounded-[10px] p-4 pt-8">
      {/* Profile */}
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(1)}
      >
        <RxPerson
          size={20}
          style={{ color: active === 1 ? "red" : "inherit" }}
        />
        <span
          className={`pl-3 ${
            active === 1 ? "text-red-500" : ""
          } 800px:block hidden`}
          style={{ color: active === 1 ? "red" : "inherit" }}
        >
          Profile
        </span>
      </div>

      {/* Orders */}
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => {
          setActive(2);
          navigate("/orders");
        }}
      >
        <HiOutlineShoppingBag
          size={20}
          style={{ color: active === 2 ? "red" : "inherit" }}
        />
        <span
          className={`pl-3 ${
            active === 2 ? "text-red-500" : ""
          } 800px:block hidden`}
          style={{ color: active === 2 ? "red" : "inherit" }}
        >
          Orders
        </span>
      </div>

      {/* Refunds */}
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => {
          setActive(3);
          navigate("/refunds");
        }}
      >
        <HiOutlineReceiptRefund
          size={20}
          style={{ color: active === 3 ? "red" : "inherit" }}
        />
        <span
          className={`pl-3 ${
            active === 3 ? "text-red-500" : ""
          } 800px:block hidden`}
          style={{ color: active === 3 ? "red" : "inherit" }}
        >
          Refunds
        </span>
      </div>

      {/* Inbox */}
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => {
          setActive(4);
          navigate("/inbox");
        }}
      >
        <AiOutlineMessage
          size={20}
          style={{ color: active === 4 ? "red" : "inherit" }}
        />
        <span
          className={`pl-3 ${
            active === 4 ? "text-red-500" : ""
          } 800px:block hidden`}
          style={{ color: active === 4 ? "red" : "inherit" }}
        >
          Inbox
        </span>
      </div>

      {/* Track Order */}
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => {
          setActive(5);
          navigate("/track-order");
        }}
      >
        <MdOutlineTrackChanges
          size={20}
          style={{ color: active === 5 ? "red" : "inherit" }}
        />
        <span
          className={`pl-3 ${
            active === 5 ? "text-red-500" : ""
          } 800px:block hidden`}
          style={{ color: active === 5 ? "red" : "inherit" }}
        >
          Track Order
        </span>
      </div>

      {/* change password */}
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(6)}
      >
        <RiLockPasswordLine
          size={20}
          style={{ color: active === 6 ? "red" : "inherit" }}
        />
        <span
          className={`pl-3 ${
            active === 6 ? "text-red-500" : ""
          } 800px:block hidden`}
          style={{ color: active === 6 ? "red" : "inherit" }}
        >
          Change Password
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(7)}
      >
        <TbAddressBook
          size={20}
          style={{ color: active === 7 ? "red" : "inherit" }}
        />
        <span
          className={`pl-3 ${
            active === 7 ? "text-red-500" : ""
          } 800px:block hidden`}
          style={{ color: active === 7 ? "red" : "inherit" }}
        >
          Address
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(8) || logOutHandler()}
      >
        <AiOutlineLogout
          size={20}
          style={{ color: active === 8 ? "red" : "inherit" }}
        />
        <span
          className={`pl-3 ${
            active === 8 ? "text-red-500" : ""
          } 800px:block hidden`}
          style={{ color: active === 8 ? "red" : "inherit" }}
        >
          Log out
        </span>
      </div>
    </div>
  );
};

export default ProfileSidebar;
