import React from "react";

export const Address = ({ users }) => {
  return (
    <div>
      <h2>Users from Skopje</h2>

      {users.map((user, i) =>
        user.adresa === "Skopje" ? (
          <div key={i}>
            <h3>
              {user.ime} {user.prezime}
            </h3>
            <p>Address: {user.adresa}</p>
          </div>
        ) : null,
      )}
    </div>
  );
};
