import * as React from "react";

import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1 className="mt-12 text-3xl text-red-400 inter text-center">
        404 - Page Not Found
      </h1>{" "}
      <div
        className="text-blue-400  mt-2 hover:text-blue-600"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link href="/">Go to Home Page</Link>
      </div>
    </>
  );
}
