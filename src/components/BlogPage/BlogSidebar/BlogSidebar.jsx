import React from "react";
import "./BlogSidebar.css";
import BlogPost from "@/components/BlogPage/BlogSidebar/BlogPost.jsx"
import BlogCategories from "@/components/BlogPage/BlogSidebar/BlogCategories"

const BlogSidebar = () => {
  return (
    <div className="blogSideBar-container">
      <BlogPost />
      <BlogCategories />
      
    </div>
  );
};

export default BlogSidebar;
