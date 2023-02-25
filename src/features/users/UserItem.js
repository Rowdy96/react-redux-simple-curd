import { removeUser } from "./userSlice";
import { useDispatch } from "react-redux";

function UserItem({ user , onSelectUser}) {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.role}</td>
      <td>
        <button onClick={() => onSelectUser(user)}>Edit</button>
        <button onClick={() => dispatch(removeUser(user.id))}>Delete</button>
      </td>
    </tr>
  );
}

export default UserItem;
