import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1>Hlw bro Now I am using next project</h1>
      <h1>
        If you show all the user list{" "}
        <Link href="/users">
          <u>click here...</u>
        </Link>
      </h1>
      If you show all the posts then{" "}
      <Link href="/posts">
        <u>click here....</u>
      </Link>
    </>
  );
}
