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
        <iframe
          src="//lightwidget.com/widgets/65eec74bcf165701a0fde22a5114bbd6.html"
          scrolling="no"
          allowtransparency="true"
          class="lightwidget-widget"
          style={{ width: "100%", border: 0, overflow: "hidden" }}
        ></iframe>
      </div>
    </div>
  );
};

export default InstaHome;
