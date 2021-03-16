import React from "react";
import { motion } from "framer-motion";
import "./Video.css";
import ReactPlayer from 'react-player'

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

const Video = () => {
	return (
		<motion.div className="container certifications mt-1" id="certifications"
			style={pageStyle}
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}
		>
			<h2 className="animated pulse infinite">VIDEO</h2>
			<ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
		</motion.div >
	);
}
export default Video;