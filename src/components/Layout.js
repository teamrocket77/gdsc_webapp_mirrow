import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import DefaultNavbar from "../components/navbar";
import DashboardMenu from "./DashboardMenu";

export default function Layout({ children }) {
    const {data: session, loading, error} = useSession();
    const router = useRouter();
    return (
        <>
            {session && session.user && router.pathname.startsWith('/dashboard') ? <DashboardMenu /> : <DefaultNavbar />}
            <main>{children}</main>
        </>
    )
}