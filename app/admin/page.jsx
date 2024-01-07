'use client'
import { useState, useEffect } from "react";
import AdminLayout from "@/components/layout/AdminLayout";

function Page() {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const adminAuth = async () => {
            try {
                const res = await fetch("http://localhost:8080/api/checkAuth", {
                    method: "GET",
                    credentials: "include",
                });

                if (res.ok) {
                    const data = await res.json();
                    setIsAdmin(data.isAdmin);
                } else if (res.status === 403) {
                    window.location.href = '/';
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        adminAuth();
    }, []);

    if (!isAdmin) {
        return <p>Access Denied.</p>;
    }

    return (
        <div>
            <AdminLayout>
                <main>
                    Admin page
                </main>
            </AdminLayout>
        </div>
    );
}

export default Page;
