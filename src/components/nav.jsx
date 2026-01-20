import React from "react";
import fastCartLogo from "../../public/fastCartLogo.png";
import { Link, NavLink } from "react-router-dom";
import {
  Heart,
  LucideShoppingCart,
  SearchIcon,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
const Nav = () => {
  return (
    <nav className="backdrop-blur-lg fixed top-0 left-0 right-0">
      <div className="max-w-7xl flex m-auto p-5 justify-between items-center">
        <Link to={"/"}>
          <img src={fastCartLogo} alt="logo" width={150} />
        </Link>
        <ul className="flex gap-5 items-center *:border-b-2 ">
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-[#B3B3B3]" : "border-b-[#00000000]"
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-[#B3B3B3]" : "border-b-[#00000000]"
            }
            to={"contact"}
          >
            Contact
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-[#B3B3B3]" : "border-b-[#00000000]"
            }
            to={"about"}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-[#B3B3B3]" : "border-b-[#00000000]"
            }
            to={"signUp"}
          >
            Sign Up
          </NavLink>
        </ul>
        <div className="flex  items-center gap-10">
          <ButtonGroup>
            <Input className="w-60" placeholder="What are you looking for?" />
            <Button variant="outline" aria-label="Search">
              <SearchIcon />
            </Button>
          </ButtonGroup>
          <div className="flex gap-5">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black"
              }
              to={"wishlist"}
            >
              <Heart />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "text-black"
              }
              to={"cart"}
            >
              <LucideShoppingCart />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-black"
              }
              to={"account"}
            >
              <User />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
