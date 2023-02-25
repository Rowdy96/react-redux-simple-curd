import { useState } from "react";
import { useSelector } from "react-redux";
import AddEditUser from "./AddEditUser";
import UserList from "./UserList";

const UserDashborad = () => {
  const users = useSelector((state) => state.user);
  const [selectedUser, setSelectedUser] = useState({});
  
  const onSelectUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="user-list">
      <UserList users={users} onSelectUser={onSelectUser} />
      <AddEditUser user={selectedUser} setUser={setSelectedUser}/>
    </div>
  );
};

export default UserDashborad;
