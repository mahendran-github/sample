import { useEffect, useRef } from "react";

function Dashboard() {
  const inputRef = useRef();

  // useEffect → runs on load
  useEffect(() => {
    console.log("Dashboard Loaded");
    inputRef.current.focus(); // useRef
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Dashboard 📊</h1>

      <input ref={inputRef} placeholder="Auto focus input" />
    </div>
  );
}

export default Dashboard;