import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import img1 from "../assets/img1.jpg";

function BlogDetails() {
  const [blogData, setBlogData] = useState(null);
  let { id } = useParams();
  // console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/blog/${id}`)
      .then((response) => {
        setBlogData(response.data.blog[0]);
        console.log(blogData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);
  console.log(blogData);
  return (
    <>
      <Header />
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-3">
          {blogData && Object.keys(blogData).length > 0 ? (
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                {blogData.title ? blogData.title : "Title Not Available"}
              </h2>
              <p className="mb-4">
                {blogData.detail ? blogData.detail : "Content Not Available"}
              </p>
              <p className="mb-4">
                {blogData.username ? blogData.username : "Content Not Available"}
              </p>
              
            </div>
          ) : (
            <p>Loading...</p>
          )}
          {blogData && Object.keys(blogData).length > 0 && blogData.title ? (
            <div className="grid grid-cols-1  mt-8">
              <img
                className="mt-4 w-full lg:mt-10 h-60 object-cover rounded-lg"
                src={img1}
                alt="office content 2"
              />
            </div>
          ) : null}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BlogDetails;

