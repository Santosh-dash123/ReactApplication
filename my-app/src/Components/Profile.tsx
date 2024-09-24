import React from 'react';
import { User } from '../Models/User';

interface dt {
  person: User[];
}

const Profile: React.FC<dt> = ({ person }) => {
  return (
    <div>
      <h2 style={{ textAlign: "center",fontWeight:"bold" }}>Person Data</h2>
      <table className='table table-bordered'>
        <thead className='text-danger'>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Class</th>
            <th>Age</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody className='text-white'>
          {person.map((user) => (
            <tr key={user.Id}>
              <td>{user.Id}</td>
              <td>{user.Name}</td>
              <td>{user.Class}</td>
              <td>{user.Age}</td>
              <td>{user.State}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
