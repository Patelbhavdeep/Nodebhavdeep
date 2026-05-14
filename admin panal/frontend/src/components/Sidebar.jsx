import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <h2>Admin</h2>
      <Link to="/">Dashboard</Link>
      <Link to="/products">Products</Link>
      <Link to="/users">Users</Link>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "200px",
    height: "100vh",
    background: "#111",
    color: "#fff",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  }
};

export default Sidebar;
