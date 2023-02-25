import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, editUser } from "./userSlice";

function AddEditUser({ user, setUser }) {
  const dispatch = useDispatch();
  const nameValue = user?.name ?? "";
  const roleValue = user?.role ?? "";
  const [name, setName] = useState(nameValue);
  const [role, setRole] = useState(roleValue);
  const [submitted, setSubmitted] = useState();
  const userMessage = !user.id ? "New User Added" : "User Updated";

  useEffect(() => {
    setName(nameValue);
    setRole(roleValue);
  }, [nameValue, roleValue]);

  const resetForm = () => {
    setSubmitted(false);
    setUser({});
  };

  const onSave = () => {
    if (name && role) {
      const userData = {
        id: user?.id,
        name,
        role,
      };
      if (user.id) {
        dispatch(editUser(userData));
      } else {
        dispatch(addUser(userData));
      }
      setSubmitted(true);
      resetForm();
    }
  };

  return (
    <div className="add-edit-user-section">
      <form>
        <section className="form-input-section">
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </section>
        {submitted && !name ? (
          <p className="error-text">Name is required</p>
        ) : null}

        <section className="form-input-section">
          <label htmlFor="role">Role: </label>
          <input
            id="role"
            type="text"
            value={role}
            onChange={(event) => setRole(event.target.value)}
            required
          />
        </section>
        {submitted && !role ? (
          <p className="error-text">Role is required</p>
        ) : null}

        <section className="form-action-section">
          <button type="button" onClick={resetForm}>Cancel</button>
          <button type="button" onClick={onSave}>
            Save
          </button>
        </section>

        {submitted ? (
          <p className="success-text"> {userMessage} Successfully!!!</p>
        ) : null}
      </form>
    </div>
  );
}

export default AddEditUser;
