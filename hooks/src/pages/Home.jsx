import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

function Home() {
  const { user } = useContext(UserContext);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome {user} 👋</h1>

      <Link to="/dashboard">
        <button>Go to Dashboard</button>
      </Link>
    </div>
  );
}

export default Home;