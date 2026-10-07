import React from "react";

export const Age = ({ users }) => {
  return (
    <div>
      <h2>Users by age</h2>

      {users.map((user, i) => (
        <div key={i}>
          <h3>
            {user.ime} {user.prezime}
          </h3>

          {user.godini > 18 ? <p>Age: {user.godini}</p> : <p>Less then 18</p>}
        </div>
      ))}
    </div>
  );
};
