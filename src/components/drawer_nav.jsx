import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Home,
  Phone,
  Info,
  UserPlus,
  Heart,
  LucideShoppingCart,
  User,
  LogIn,
  LogOut,
} from "lucide-react";
import fastCartLogo from "../../public/fastCartLogo.png";
import { ModeToggle } from "./mode-toggle";

const Drawer_nav = () => {
  const token = localStorage.getItem("token") || "";
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
      </DrawerTrigger>
      {token.length > 10 ? (
        <DrawerContent className="h-full w-64 flex flex-col justify-between pb-6">
          <div>
            <DrawerHeader className="border-b">
              <DrawerTitle className="flex items-center gap-2">
                <DrawerClose asChild>
                  <Link to="/" className="flex items-center gap-2">
                    <img src={fastCartLogo} alt="logo" width={120} />
                  </Link>
                </DrawerClose>
              </DrawerTitle>
            </DrawerHeader>

            <nav className="px-3 pt-4">
              <div className="flex flex-col gap-2 **:flex-row   font-medium">
                <ModeToggle />
                <DrawerClose asChild>
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-400 flex items-center gap-3 rounded-md px-3 py-2 "
                        : "flex items-center gap-3 rounded-md px-3 py-2 "
                    }
                  >
                    <Home size={20} />
                    <span>Home</span>
                  </NavLink>
                </DrawerClose>

                <DrawerClose asChild>
                  <NavLink
                    to="contact"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-400 flex items-center gap-3 rounded-md px-3 py-2 "
                        : "flex items-center rounded-md px-3 py-2 "
                    }
                  >
                    <Phone size={20} />
                    <span>Contact</span>
                  </NavLink>
                </DrawerClose>

                <DrawerClose asChild>
                  <NavLink
                    to="about"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-400 flex items-center gap-3 rounded-md px-3 py-2 "
                        : "flex items-center gap-3 rounded-md px-3 py-2 "
                    }
                  >
                    <Info size={20} />
                    <span>About</span>
                  </NavLink>
                </DrawerClose>

                <DrawerClose asChild>
                  <NavLink
                    to="wishlist"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-400 flex items-center gap-3 rounded-md px-3 py-2 "
                        : "flex items-center gap-3 rounded-md px-3 py-2 "
                    }
                  >
                    <Heart size={20} />
                    <span>Wishlist</span>
                  </NavLink>
                </DrawerClose>

                <DrawerClose asChild>
                  <NavLink
                    to="cart"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-400 flex items-center gap-3 rounded-md px-3 py-2 "
                        : "flex items-center gap-3 rounded-md px-3 py-2 "
                    }
                  >
                    <LucideShoppingCart size={20} />
                    <span>Cart</span>
                  </NavLink>
                </DrawerClose>

                <DrawerClose asChild>
                  <NavLink
                    to="account"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-400 flex items-center gap-3 rounded-md px-3 py-2 "
                        : "flex items-center gap-3 rounded-md px-3 py-2 "
                    }
                  >
                    <User size={20} />
                    <span>Account</span>
                  </NavLink>
                </DrawerClose>

                <DrawerClose asChild>
                  <p
                    onClick={() => {
                      localStorage.removeItem("token");
                      window.location = "/";
                    }}
                    className={
                      "flex text-red-600 items-center gap-3 rounded-md px-3 py-2 "
                    }
                  >
                    <LogOut size={20} />
                    <span>Log out</span>
                  </p>
                </DrawerClose>
              </div>
            </nav>
          </div>

          <DrawerFooter className="px-3">
            <DrawerClose asChild>
              <Button variant="outline" className="w-full">
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      ) : null}
      {token.length < 10 ? (
        <DrawerContent className="h-full w-64 flex flex-col justify-between pb-6">
          <div>
            <DrawerHeader className="border-b">
              <DrawerTitle className="flex items-center gap-2">
                <DrawerClose asChild>
                  <Link to="/" className="flex items-center gap-2">
                    <img src={fastCartLogo} alt="logo" width={120} />
                  </Link>
                </DrawerClose>
              </DrawerTitle>
            </DrawerHeader>

            <nav className="px-3 pt-4">
              <div className="flex flex-col gap-2 **:flex-row   font-medium">
                <ModeToggle />
                <DrawerClose asChild>
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-400 flex items-center gap-3 rounded-md px-3 py-2 "
                        : "flex items-center gap-3 rounded-md px-3 py-2 "
                    }
                  >
                    <Home size={20} />
                    <span>Home</span>
                  </NavLink>
                </DrawerClose>

                <DrawerClose asChild>
                  <NavLink
                    to="contact"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-400 flex items-center gap-3 rounded-md px-3 py-2 "
                        : "flex items-center rounded-md px-3 py-2 "
                    }
                  >
                    <Phone size={20} />
                    <span>Contact</span>
                  </NavLink>
                </DrawerClose>

                <DrawerClose asChild>
                  <NavLink
                    to="about"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-400 flex items-center gap-3 rounded-md px-3 py-2 "
                        : "flex items-center gap-3 rounded-md px-3 py-2 "
                    }
                  >
                    <Info size={20} />
                    <span>About</span>
                  </NavLink>
                </DrawerClose>

                <DrawerClose asChild>
                  <NavLink
                    to="signUp"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-400 flex items-center gap-3 rounded-md px-3 py-2 "
                        : "flex items-center gap-3 rounded-md px-3 py-2 "
                    }
                  >
                    <UserPlus size={20} />
                    <span>Sign Up</span>
                  </NavLink>
                </DrawerClose>

                <DrawerClose asChild>
                  <NavLink
                    to="login"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-400 flex items-center gap-3 rounded-md px-3 py-2 "
                        : "flex items-center gap-3 rounded-md px-3 py-2 "
                    }
                  >
                    <LogIn size={20} />
                    <span>Login</span>
                  </NavLink>
                </DrawerClose>

                <DrawerClose asChild>
                  <NavLink
                    to="wishlist"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-400 flex items-center gap-3 rounded-md px-3 py-2 "
                        : "flex items-center gap-3 rounded-md px-3 py-2 "
                    }
                  >
                    <Heart size={20} />
                    <span>Wishlist</span>
                  </NavLink>
                </DrawerClose>
              </div>
            </nav>
          </div>

          <DrawerFooter className="px-3">
            <DrawerClose asChild>
              <Button variant="outline" className="w-full">
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      ) : null}
    </Drawer>
  );
};

export default Drawer_nav;
