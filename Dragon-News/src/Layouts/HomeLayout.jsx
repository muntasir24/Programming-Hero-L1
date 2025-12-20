import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/HomeLayout/LeftAside";
import RightAside from "../Components/HomeLayout/RightAside";

const HomeLayout = () => {
  return (
    <div className="p-10">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
            <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto">
            <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 my-3 ">
        <aside className="col-span-3 sticky top-0 h-fit">
            <LeftAside></LeftAside>
        </aside>

        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>

       <aside className="col-span-3 sticky top-0 h-fit"> <RightAside  ></RightAside></aside>
      </main>
    </div>
  );
};

export default HomeLayout;
