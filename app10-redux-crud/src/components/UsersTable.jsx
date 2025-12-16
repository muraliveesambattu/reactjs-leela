import React from "react";

export default function UsersTable({ users,deleteUser }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Role</th>
            <th style={styles.th}>Age</th>
            <th style={styles.th}>City</th>
            <th style={styles.th}> Edit User</th>
            <th style={styles.th}> Delete User</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={styles.td}>{user.id}</td>
              <td style={styles.td}>{user.name}</td>
              <td style={styles.td}>{user.email}</td>
              <td style={styles.td}>{user.role}</td>
              <td style={styles.td}>{user.age}</td>
              <td style={styles.td}>{user.city}</td>
              <td style={styles.td}>
                <button >Edit User</button>
              </td>
              <td style={styles.td}>
                <button onClick={()=>{deleteUser(user)}}>Delete User</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  th: {
    border: "1px solid #ccc",
    padding: "10px",
    background: "#f5f5f5",
  },
  td: {
    border: "1px solid #ccc",
    padding: "10px",
    textAlign: "left",
  },
};
