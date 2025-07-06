import graduate from "../assets/images/graduate.jpg";

const BlogsHome = () => {
  return (
    <div className="blogs-home">
      <h2 className="page-title">Blogs</h2>
      <p>
        Keep up-to-date with our latest news and press releases on our blog
        page.
      </p>
      <hr className="hr-fade" />
      <div className="blog-posts">
        <div className="blog-card">
          <img className="blog-card-image" src={graduate} alt="" />
          <p className="blog-card-title">
            Horizon: Reasons Graduates Should Consider Entrepreneurship
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogsHome;
