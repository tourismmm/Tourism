import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import img1 from "../assets/img1.jpg";

function Blogs() {
  const [blogData, setBlogData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((response) => {
        setBlogData(response.data.blogs);
        console.log(response.data)
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);



  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
console.log(blogData)

  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(blogData.length / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  const maxVisibleButtons = 3;
  const indexOfLastButton = Math.min(
    Math.max(currentPage + maxVisibleButtons - 1, maxVisibleButtons),
    pageNumbers.length
  );
  const indexOfFirstButton = Math.max(indexOfLastButton - maxVisibleButtons, 0);

  const visiblePageNumbers = pageNumbers.slice(
    indexOfFirstButton,
    indexOfLastButton
  );
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <section className="flex flex-wrap h-90  gap-7  items-center justify-center px-6 py-8 mx-auto">
        {currentBlogs.map((blog, index) => (
          <div
            key={index}
            className="max-w-xs w-full md:w-1/2 lg:w-1/3 transition duration-500 ease-in-out transform hover:scale-105  hover:opacity-100 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href={blog.link}>
              <img className="rounded-t-lg h-60" src={img1} alt={blog.title} />
            </a>
            <div className="p-5 h-60">
              <a href={blog.link}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {blog.title}
                </h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {blog.username}
                </h5>
              </a>
              <Link to={`/blog/${blog.id}`}>
                <button
                  type="submit"
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
                >
                  <span className="relative  px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Read More
                  </span>
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </section>
      <div className="flex justify-center mt-4">
        {blogData.length > 0 && (
          <ul className="flex list-none">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="mr-2 px-4 py-2 border text-black rounded-md"
            >
              Previous Page
            </button>
            {visiblePageNumbers.map((number) => (
              <li key={number} className="mx-1">
                <button
                  onClick={() => paginate(number)}
                  className={`${
                    currentPage === number
                      ? "bg-red-200 w-10 text-black"
                      : "bg-red-300 w-10 text-gray-800"
                  } py-2 px-3 focus:outline-none`}
                >
                  {number}
                </button>
              </li>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === currentBlogs}
              className="px-4 py-2 border text-black rounded-md"
            >
              Next Page
            </button>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Blogs;
