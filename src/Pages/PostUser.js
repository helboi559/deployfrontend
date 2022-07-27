
import { useState } from "react";

const PostUser = ({ postUserData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <input
        placeholder="First Name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        placeholder="Last Name"
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={(e) => postUserData({ firstName, lastName, email })}>
        Submit
      </button>
    </div>
  );
};

export default PostUser;