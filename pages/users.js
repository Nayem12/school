import User from "@/components/User";

export default function UsersList({ users }) {
  return (
    <div className="w-[80%] mx-auto">
      <h1 className="bg-slate-700 text-white text-4xl">
        here is {users.length} of users
      </h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user}></User>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      users: data,
    },
  };
}
