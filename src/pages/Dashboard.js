import React, { useState, useEffect, useRef } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row } from "../components/Grid";
// import { Table, Tr, Td } from "../components/Table";
// import { ForwardRefInput, FormBtn } from "../components/Form";
import ProgressBar from "../components/PointTimeline";
// import Recycle from "../components/RecycleLogo";


function Dashboard({ status, username, highScore, score }) {

	// Setting our component's initial state
	return (
		<div>
			<h1 style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				fontcolor: "white",
			}}>Hello,  {username}!</h1>
			<ProgressBar />

		</div>
	)
}

export default Dashboard;
