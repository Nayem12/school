import Link from "next/link";

const User = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.id}</p>
      <Link href={`/users/user.id`}>Details</Link>
    </div>
  );
};

export default User;
