import { Link } from "react-router-dom";

const GameOver = ({ gameScore }) => {
  // change trigger above

  return (
    <div>
      Game Over! Summary
      <div>{gameScore}</div>
      <button>
        <Link to="/Dashboard" className="cta" style={{ color: "white", marginTop: "30px" }}>
          Confirm Score
        </Link>
      </button>
    </div>
  );
};

export default GameOver;

// take score from the user in App.js (line20 for user state)

// pass the user to the scoreboard/progressbar
