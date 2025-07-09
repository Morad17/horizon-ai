import React, { useEffect } from "react";

const InstaHome = () => {
  const instagramPosts = [
    "https://www.instagram.com/p/DJlhL2xocNz/",
    "https://www.instagram.com/p/DIyQ6aBoLuc/",
    "https://www.instagram.com/p/DHIxSUVIHXc/?img_index=1",
    "https://www.instagram.com/p/DBgWzg-okOa/",
  ];

  useEffect(() => {
    // Load Instagram's embed script
    const loadInstagramScript = () => {
      if (window.instgrm) {
        // If script already loaded, process embeds
        window.instgrm.Embeds.process();
      } else {
        // Load the script for the first time
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        script.onload = () => {
          if (window.instgrm) {
            window.instgrm.Embeds.process();
          }
        };
        document.body.appendChild(script);
      }
    };

    // Load script after component mounts
    loadInstagramScript();
  }, []);

  return (
    <div className="instagram-home">
      <h2 className="page-title">Latest from Instagram</h2>

      <div className="instagram-grid">
        {instagramPosts.map((postUrl, index) => (
          <div key={index} className="instagram-post-embed">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={postUrl}
              data-instgrm-version="14"
              data-instgrm-captioned
            >
              <div style={{ padding: "16px" }}>
                <a href={postUrl} target="_blank" rel="noopener noreferrer">
                  View this post on Instagram
                </a>
              </div>
            </blockquote>
          </div>
        ))}
      </div>

      <div className="instagram-cta">
        <a
          href="https://www.instagram.com/_phoenix_ltd/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn instagram-btn"
        >
          Follow Us @_phoenix_ltd
        </a>
      </div>
    </div>
  );
};

export default InstaHome;
