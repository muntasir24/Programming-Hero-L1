import React from 'react';
import no from "../assets/no.png";
import { motion } from "framer-motion";
const NoAppsFound = () => {
    motion
    return (
      <div className=" min-h-screen flex flex-col justify-center items-center ">
        <motion.img
          src={no}
          alt="No apps"
          className="w-40 opacity-90"
          animate={{
            y: [0, -30, 0],
            x: [0, 30, 0],
            rotate: [0, 0, -3, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <p className="text-5xl font-bold text-gray-800  text-center">No Apps Found</p>{" "}
      </div>
    );
};

export default NoAppsFound;