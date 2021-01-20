import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";


export default function Nav() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link
					to="/"
					className="navbar-brand" >
					WasteOfTime
        </Link>
				<div>
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link
								to="/TheScene"
								className={
									window.location.pathname === "/" || window.location.pathname === "/TheScene"
										? "nav-link active"
										: "nav-link"
								}
							>
								The Scene
            </Link>
						</li>
						<li className="nav-item">
							<Link
								to="/TheChallenge"
								className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
							>
								The Challenge
            </Link>

						</li>
						<li className="nav-item mr-sm-2" style={{ marginLeft: 760 }}>
							<Link
								to="/Login"
								className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
							>
								Login
            </Link>

						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
