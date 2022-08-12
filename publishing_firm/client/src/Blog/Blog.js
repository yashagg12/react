import { blogs } from "./SingleBlog/blogs.json";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <main className="py-14 bg-[url('https://64.media.tumblr.com/a37e451f108f7045f0d07851e906d57d/tumblr_p8xzhgAmDF1t1sfeho1_500.jpg')] bg-cover text-white">
      <h1 className="my-5 text-center text-3xl font-bold">
        Teaching & Learning Blog
      </h1>
      <p className="text-center text-xl italic px-10">
        Explore insights, trends, and research that impact teaching, learning,
        and leading.
      </p>
      <section className="list w-4/5 mx-auto p-10 bg-slate-600 rounded-xl mt-10 ">
        <ul>
          {blogs.map((blog) => {
            return (
              <li className="my-4">
                <h2 className="text-lg font-semibold uppercase w-5/6 inline-block">
                  {blog.heading}
                </h2>
                <Link to={`/blogs/${blog.id}`} className="w-1/6 underline">
                  {" "}
                  more
                </Link>
                <br />
                <div className="my-1">
                  <span> By: {blog.author}</span>&nbsp;|&nbsp;
                  <span> {blog.date}</span>
                </div>
                <hr />
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default Blog;
