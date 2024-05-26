import React, { useEffect } from "react";
import "../../global.css";
import Construction from "../Construction/Construction";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BlogPage() {
	useEffect(() => {
		AOS.init({ once: false, duration: 700 });
	}, []);
	return <Construction pageNotFound={false} />;
}
