import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../static/data";
import styles from "../../styles/style";

const Navbar = ({ active }) => {
  return (
    <div className={`block 800px:${styles.normalFlex}`}>
      {navItems &&
        navItems.map((item, index) => (
          <Link
            key={index}
            to={item.url}
            className={`${
              active === index + 1
                ? "text-[#17dd1f]"
                : "text-black 800px:text-white font-medium"
            } pb-[30px] 800px:pb-0 font-[500] ml-[10px] cursor-pointer px-2 py-1 block`}
          >
            {item.title}
          </Link>
        ))}
    </div>
  );
};

export default Navbar;
