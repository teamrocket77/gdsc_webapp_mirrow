import React from "react";
import { useSession } from "next-auth/react";
import Index from "./index.js";
const Dashboard = () => {
  const { data: session, loading, error } = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (session && session.expires < Date.now()) {
    return <p>Session has expired. Login again.</p>;
  }
  return (
    <>
      {session && session.user && <p>Signed in as {session.user.email}</p>}
      {/* After logging out, redirect to the Home Page */}
      {!session && <Index />}
    </>
  );
};

export default Dashboard;
