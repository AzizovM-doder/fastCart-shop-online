import React, { useEffect } from "react";
import fastCartLogo from "/fastCartLogo.png";
import { Link, NavLink } from "react-router-dom";
import {
  Heart,
  LogOut,
  LucideShoppingCart,
  ShoppingCartIcon,
  User,
} from "lucide-react";
import Badge from "@mui/material/Badge";
import Drawer_nav from "./drawer_nav";
import {
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  styled,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../api/cartAPI/cartAPI";
import { ModeToggle } from "./mode-toggle";

const Nav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cartSlice);
  const totalProducts = cart?.[0]?.totalProducts;

  // const {totalProducts} = cart?.at(0)
  // console.log(totalProducts);
  const token = localStorage.getItem("token") || "";
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
      padding: "0 4px",
      backgroundColor: "#DB4444",
      color: "white",
    },
  }));
  useEffect(() => {
    dispatch(getCart());
  }, []);
  return (
    <nav className="backdrop-blur-lg shadow fixed top-0 left-0 right-0 z-50 bg-white/30">
      <div className="max-w-7xl flex m-auto p-5 justify-between items-center">
        <div className="flex justify-between w-full lg:w-auto items-center">
          <div className="lg:hidden min-w-1/3">
            <Drawer_nav />
          </div>
          <Link to={"/"}>
            <img src={fastCartLogo} className={"min-w-1/3 lg:max-w-20 pr-2"} alt="logo" />
          </Link>
          {token.length < 10 ? (
            <div className="flex min-w-1/3 lg:hidden justify-end gap-3 items-center">
              <NavLink
                className={({ isActive }) => (isActive ? "text-red-500" : "")}
                to={"wishlist"}
              >
                <Heart className="dark:text-white" />
              </NavLink>
              <ModeToggle />
            </div>
          ) : null}
             {token?.length > 1 ? (
          <div className="flex min-w-1/3 justify-end lg:hidden items-center gap-10">
            <div className="flex gap-3 items-center">
              <button
                onClick={handleClick}
                className="rounded-full p-1 hover:bg-gray-100 focus:outline-none"
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <User className="text-black dark:text-white" />
              </button>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <Link to={"/account"}>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <User className="text-black" />
                    </ListItemIcon>
                    Account
                  </MenuItem>
                </Link>
                <MenuItem
                  className="text-red-500"
                  onClick={() => {
                    handleClose();
                    localStorage.removeItem("token");
                    window.location = "/";
                  }}
                >
                  <ListItemIcon>
                    <LogOut className="dark:text-red-500" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
              <ModeToggle />
            </div>
          </div>
        ) : null}
        </div>

        <ul className="lg:flex gap-5 items-center hidden *:border-b-2 *:py-1">
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
          {token.length < 10 ? (
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-[#B3B3B3]" : "border-b-[#00000000]"
              }
              to={"signUp"}
            >
              Sign Up
            </NavLink>
          ) : null}
          {token.length < 10 ? (
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-[#B3B3B3]" : "border-b-[#00000000]"
              }
              to={"login"}
            >
              Log in
            </NavLink>
          ) : null}
        </ul>

        {token?.length > 1 ? (
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex gap-5 items-center">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-black"
                }
                to={"wishlist"}
              >
                <Heart className="text-black dark:text-white" />
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-yellow-500" : "text-black"
                }
                to={"cart"}
              >
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={totalProducts} color="secondary">
                    <ShoppingCartIcon className="text-black dark:text-white" />
                  </StyledBadge>
                </IconButton>
              </NavLink>
              <button
                onClick={handleClick}
                className="rounded-full p-1 hover:bg-gray-100 focus:outline-none"
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <User className="text-black dark:text-white" />
              </button>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <Link to={"/account"}>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <User className="text-black" />
                    </ListItemIcon>
                    Account
                  </MenuItem>
                </Link>
                <MenuItem
                  className="text-red-500"
                  onClick={() => {
                    handleClose();
                    localStorage.removeItem("token");
                    window.location = "/";
                  }}
                >
                  <ListItemIcon>
                    <LogOut className="dark:text-red-500" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
              <ModeToggle />
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Nav;
