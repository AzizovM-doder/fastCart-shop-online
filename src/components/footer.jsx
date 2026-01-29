import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Facebook,
  Instagram,
  Linkedin,
  SendHorizonal,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl text-white *:py-5 p-5 gap-5 m-auto flex flex-col lg:flex-row lg:justify-between">
        
        {/* subscribe */}
        <ul className="flex flex-col gap-5">
          <li className="font-bold text-2xl">Elite Market</li>
          <li className="text-xl font-medium">Newsletter</li>
          <li className="text-[#FAFAFA]">
            Get updates about new products & admin features
          </li>
          <ButtonGroup>
            <Input className="w-40" placeholder="Your email" />
            <Button variant="outline" className="bg-black">
              <SendHorizonal />
            </Button>
          </ButtonGroup>
        </ul>

        {/* support */}
        <ul className="flex flex-col gap-5">
          <li className="font-bold text-xl">Support</li>
          <li className="text-[#FAFAFA]">
            Dushanbe, Tajikistan <br /> Central Office
          </li>
          <li className="text-[#FAFAFA]">support@elitemarket.tj</li>
          <li className="text-[#FAFAFA]">+992 900 00 00 00</li>
        </ul>

        {/* links */}
        <div className="flex gap-20 lg:justify-between lg:w-1/4">
          <ul className="flex flex-col gap-5">
            <li className="font-bold text-xl">Account</li>
            <li className="text-[#FAFAFA]">Dashboard</li>
            <li className="text-[#FAFAFA]">Orders</li>
            <li className="text-[#FAFAFA]">Settings</li>
          </ul>

          <ul className="flex flex-col gap-5">
            <li className="font-bold text-xl">Quick Links</li>
            <li className="text-[#FAFAFA]">Admin Panel</li>
            <li className="text-[#FAFAFA]">API Docs</li>
            <li className="text-[#FAFAFA]">Help Center</li>
            <li className="text-[#FAFAFA]">Contact</li>
          </ul>
        </div>

        {/* socials */}
        <ul className="flex flex-col gap-5">
          <li className="font-bold text-xl">Social</li>
          <li className="text-[#FAFAFA] flex gap-5">
            <Facebook />
            <Twitter />
            <Instagram />
            <Linkedin />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
