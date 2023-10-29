import React, { useState } from "react";
import axios from "axios";

function Blogsform() {
  const [formData, setFormData] = useState({
    title: "",
    detail: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/blog/addblog",
        formData
      );
      console.log(response.data.message);
    } catch (error) {
      console.error("Error Adding a blog", error);
    }
  };

  return (
    <>
      <hr class=" mt-10" />
      <section
        className="bg-cover back-image space-y-12 flex flex-col items-center justify-center px-6 py-30"
        style={{
          backgroundImage: "url('/assets/9145.jpg')", // Adjusted the URL path
        }}
      >
        <h1 class=" max-w-2xl mb-2 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-transparent bg-clip-text  bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 dark:text-white">
          {" "}
          Add Your Journey{" "}
        </h1>
        <form class="formborder " onSubmit={handleSubmit}>
          <div class="space-y-12 flex flex-col items-center justify-center px-6 py-8 mx-auto ">
            <div class="border-b border-gray-900/10 pb-12">
              <h2 class="text-base font-semibold leading-7 text-gray-900">
                Add Blog
              </h2>
              <p class="mt-1 text-sm leading-6 text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>

              <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                
                <div class="sm:col-span-4">
                  <label
                    for="title"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Title
                  </label>
                  <div class="mt-2">
                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Title"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-span-full">
                  <label
                    for="cover-photo"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Add Photo
                  </label>
                  <input
                    type="file"
                    id="img"
                     value={formData.image}
                     onChange={handleInputChange}
                    name="image"
                    accept="image/*"
                  />
                </div>

                <div class="col-span-full">
                  <label class="block text-sm font-medium leading-6 text-gray-900">
                    Description
                  </label>
                  <div class="mt-2">
                    <textarea
                      id="description"
                      name="detail"
                      rows="3"
                      value={formData.detail}
                      onChange={handleInputChange}
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                  <p class="mt-3 text-sm leading-6 text-gray-600">
                    Add a description about the blog.
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
              >
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Add
                </span>
              </button>
            </div>
          </div>
        </form>
        <hr />
      </section>
    </>
  );
}

export default Blogsform;