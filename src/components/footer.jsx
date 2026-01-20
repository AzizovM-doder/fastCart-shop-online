import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ButtonGroup } from "@/components/ui/button-group";
import { Facebook, Instagram, Linkedin, SearchIcon, SendHorizonal, Twitter } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl text-white *:py-5 p-5 gap-5 m-auto flex flex-col lg:flex-row lg:justify-between">
        <ul className="flex flex-col gap-5">
          <li className="font-bold text-2xl">Exclusive</li>
          <li className="text-xl font-medium">Subscribe</li>
          <li className="text-[#FAFAFA]">Get 10% off your first order</li>
          <ButtonGroup>
            <Input className="w-40" placeholder="Enter your email" />
            <Button variant="outline" className="bg-black">
              <SendHorizonal />
            </Button>
          </ButtonGroup>
        </ul>
        <ul className="flex flex-col gap-5">
          <li className="font-bold text-xl">Support</li>
          <li className="text-[#FAFAFA]">
            111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
          </li>
          <li className="text-[#FAFAFA]">exclusive@gmail.com</li>
          <li className="text-[#FAFAFA]">+88015-88888-9999</li>
        </ul>
        <div className="flex gap-20 lg:justify-between lg:w-1/4">

        <ul className="flex flex-col gap-5">
          <li className="font-bold text-xl">Account</li>
          <li className="text-[#FAFAFA]">My Account</li>
          <li className="text-[#FAFAFA]">Cart</li>
          <li className="text-[#FAFAFA]">Wishlist</li>
        </ul>
        <ul className="flex flex-col gap-5">
          <li className="font-bold text-xl">Quick Link</li>
          <li className="text-[#FAFAFA]">Privacy Policy</li>
          <li className="text-[#FAFAFA]">Terms Of Use</li>
          <li className="text-[#FAFAFA]">FAQ</li>
          <li className="text-[#FAFAFA]">Contact</li>
        </ul>
        </div>
        <ul className="flex flex-col gap-5">
          <li className="font-bold text-xl">Social </li>
          <li className="text-[#FAFAFA] flex gap-5">
            <Facebook/>
            <Twitter/>
            <Instagram/>
            <Linkedin/>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
