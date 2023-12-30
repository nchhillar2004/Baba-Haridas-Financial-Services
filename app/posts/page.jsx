import React from "react";
import { Layout } from "@/components/layout/Layout";
import Notification from "@/components/navbar/new-updates/Notification";

export const metadata = {
    title: "BHFS - Posts",
}

function page() {
    return (
        <div>
            <Notification title="New posts" point1="New posts available, check now"/>
            <Layout>
                <div className="posts-section">Posts</div>
            </Layout>
        </div>
    );
}

export default page;