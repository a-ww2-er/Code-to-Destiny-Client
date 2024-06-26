"use client";
import React, { FC, useState } from "react";
import Protected from "../hooks/useProtected";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Profile from "../components/Profile/Profile";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";

type Props = {};

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(5);
  const [route, setRoute] = useState("Login");
  const { user } = useSelector((state: any) => state.auth);
const meta = {
  title:`${user?.name} profile - Code to Destiny`,
  description:"Code to Destiny is a platform for students to learn and get help from teachers",
  keywords:"programming,mern",
  image :`${process.env.WEB_URL}/meta-image.webp`
}
  return (
    <div className="min-h-screen">
           <title>{meta?.title}</title>
      <Protected>
        <Heading
   meta={meta}
        />
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route={route}
        />
        <Profile user={user} />
        <Footer />
      </Protected>
    </div>
  );
};

export default Page;
