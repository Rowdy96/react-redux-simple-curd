import UserItem from "./UserItem";

function UserList({ users , onSelectUser}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return <UserItem key={user.id} user={user} onSelectUser={onSelectUser}/>;
        })}
      </tbody>
    </table>
  );
}

export default UserList;
