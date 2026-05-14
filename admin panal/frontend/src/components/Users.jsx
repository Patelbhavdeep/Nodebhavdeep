import Sidebar from "./Sidebar";
import api from "../api/axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/users").then((res) => setUsers(res.data));
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ padding: "20px" }}>
        <h2>Users</h2>
        {users.map((u) => (
          <p key={u._id}>
            {u.email} ({u.role})
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
