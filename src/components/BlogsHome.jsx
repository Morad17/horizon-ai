import graduate from "../assets/images/graduate.jpg";
import { FaCalendarAlt, FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router";

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
        <Link to="/blog-launch">
          <div className="blog-card">
            <div className="blog-tile">
              <div className="blog-date">
                <p className="date-day">01</p>
                <p className="date-month-year">AUG 2023</p>
              </div>
              <div className="blog-image">
                <img
                  src="https://phoenix-scotland.com/wp-content/uploads/2021/09/grad-1200x750.jpg"
                  alt=""
                />
              </div>
              <div className="blog-title">
                <p className="title">Horizon Launch in Edinburgh</p>
              </div>
            </div>
            <div className="blog-info">
              <div className="info-group">
                <FaCalendarAlt /> <span>01 AUG 2023</span>
              </div>
              <div className="info-group">
                <FaPencilAlt /> <span>Admin</span>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/blog-entrepeneurship">
          <div className="blog-card">
            <div className="blog-tile">
              <div className="blog-date">
                <p className="date-day">01</p>
                <p className="date-month-year">AUG 2023</p>
              </div>
              <div className="blog-image">
                <img
                  src="https://phoenix-scotland.com/wp-content/uploads/2023/08/Edinburgh-1200x750.png"
                  alt=""
                />
              </div>
              <div className="blog-title">
                <p className="title">
                  Horizon: Reasons Graduates Should Consider Entrepreneurship
                </p>
              </div>
            </div>
            <div className="blog-info">
              <div className="info-group">
                <FaCalendarAlt /> <span>01 AUG 2023</span>
              </div>
              <div className="info-group">
                <FaPencilAlt /> <span>Admin</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogsHome;
