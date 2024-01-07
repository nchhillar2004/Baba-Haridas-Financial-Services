'use client'
import React from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import { useSession, signIn, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { Layout } from "@/components/layout/Layout";

// export const metadata = {
//     title: "BHFS - Admin",
// };

function page() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/");
        },
    });
    if (session) {
        return (
            <div>
                <AdminLayout>
                    <main>Admin page</main>
                </AdminLayout>
            </div>
        );
    }
    return (
        <div>
            <Layout>
                <main>Admin acess denied. You are not allowed to view this page.</main>
            </Layout>
        </div>
    );
}

export default page;
