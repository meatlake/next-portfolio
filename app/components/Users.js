import React from "react";

const Users = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <div className="mt-4 p-12">
      <>
        <h1 className="text-4xl font-semibold">Gebruikertabel</h1>
        <p className="font-normal max-w-screen-md mt-2">
          Hier heb ik gebruik gemaakt van een fake-api die neppe data geeft om
          mee te oefenen. Deze data heb ik in een tabel gezet en met een UI
          library opgemaakt. (DaisyUI)
        </p>
        <table className="table table-bordered mt-4">
          <thead>
            <th>Naam</th>
            <th>Email</th>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <th>{user.name}</th>
                <th>{user.email}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </div>
  );
};

export default Users;
