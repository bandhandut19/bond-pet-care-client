import Link from "next/link";

/* eslint-disable prettier/prettier */
const login = () => {
  return (
    <div>
      Login now
      <h1>
        not registered yet ?{" "}
        <span>
          <Link href="/register">Register Now</Link>
        </span>
      </h1>
      <h1>
        <Link href="/">Go back to Home</Link>
      </h1>
    </div>
  );
};

export default login;
