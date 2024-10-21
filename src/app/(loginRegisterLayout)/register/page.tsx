import Link from "next/link";

/* eslint-disable prettier/prettier */
const register = () => {
  return (
    <div>
      Register now
      <h1>
        Already registered ?{" "}
        <span>
          <Link href="/login">Login Now</Link>
        </span>
      </h1>
      <h1>
        <Link href="/">Go back to Home</Link>
      </h1>
    </div>
  );
};

export default register;
