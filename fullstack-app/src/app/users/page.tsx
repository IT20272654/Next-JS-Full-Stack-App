'use client';
import { useEffect, useState } from 'react';

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <div>
      <h1 className="text-2xl">Users</h1>
      <ul>
        {users.map((u: any) => (
          <li key={u._id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
