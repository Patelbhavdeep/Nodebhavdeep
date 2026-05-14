import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <Sidebar />

      <div style={styles.main}>
        {/* Header */}
        <div style={styles.header}>
          <h1>Dashboard</h1>
          <p>Welcome back, Admin 👑</p>
        </div>

        {/* Stats cards */}
        <div style={styles.cards}>
          <div style={styles.card}>
            <h3>Total Users</h3>
            <p>128</p>
          </div>

          <div style={styles.card}>
            <h3>Total Products</h3>
            <p>56</p>
          </div>

          <div style={styles.card}>
            <h3>Total Orders</h3>
            <p>342</p>
          </div>

          <div style={styles.card}>
            <h3>Revenue</h3>
            <p>₹4,85,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    backgroundColor: "#f4f6f8",
    minHeight: "100vh"
  },

  main: {
    flex: 1,
    padding: "25px"
  },

  header: {
    marginBottom: "25px"
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px"
  },

  card: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
  }
};

export default Dashboard;
