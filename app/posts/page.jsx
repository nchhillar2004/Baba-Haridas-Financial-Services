"use client";
import React, { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import Notification from "@/components/navbar/new-updates/Notification";
import { fetchPosts } from "@/utils/posts";
import PostCard from "./postCard";
import PostAds from "./postAds";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

function page() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        document.title = "BHFS - Posts";
        const fetchData = async () => {
            const postsData = await fetchPosts();
            setPosts(postsData);
        };
        fetchData();
    }, []);

    return (
        <div>
            <Notification
                title="New posts"
                point1="New posts available, check now"
            />
            <Layout>
                <div className="posts-section flex justify-between w-full">
                    <div className="posts-left w-2/3">
                        <ul className="flex flex-col-reverse h-fit">
                        {posts.map((post) => (
                            <PostCard key={post._id} post={post} />
                        ))}
                    </ul>
                    </div>
                    <div className="posts-right w-2/6 px-8">
                        <PostAds heading="Balance" link="Add fund" href="https://google.com" image="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png?20230723002237" width="40" right="0.00 INR"/>
                        <PostAds heading="Newsletter" link="Register" href="https://google.com" width="40" right="Register to get latest updates"/>
                        <div className="embedded flex items-center justify-center pb-2 my-2">
                        <iframe width="320" height="190" src="https://www.youtube.com/embed/8CPGf0K7hJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        </div>
                        <PostAds heading="Help & Support" link="Report an issue" href="https://google.com" width="40" right="Report an issue or a post"/>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default page;
