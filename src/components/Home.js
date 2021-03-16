import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const pageVariants = {
    initial: {
        opacity: 0,
        x: "-100vw",
        scale: 0.8
    },
    in: {
        opacity: 1,
        x: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        x: "100vw",
        scale: 1.2
    }
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
};

const pageStyle = {
    position: "absolute"
};

const Home = () => {
    return (
        <motion.div className="container about mt-1" id="about"
            style={pageStyle}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <h2 className="animated pulse infinite">HOME</h2>
        </motion.div>
    );
}
export default Home;

/*
background: #342A2D;
background: -webkit-linear-gradient(right, #342A2D, #B66E5F);
background: -moz-linear-gradient(right, #342A2D, #B66E5F);
background: linear-gradient(to left, #342A2D, #B66E5F);
*/