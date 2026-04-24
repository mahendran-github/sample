import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Login() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  function handleLogin() {
    if (name !== "") {
      setUser(name);        // useContext
      navigate("/home");    // useNavigate
    } else {
      alert("Enter name");
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      /><br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;