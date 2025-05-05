import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PhotoGallery from "./Gallery";
import VideoGallery from "./video";
import { getItemWithExpiry } from "./storage"; // adjust path

const MediaGallery = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = getItemWithExpiry("s-id");
    setIsLoggedIn(!!user);
  }, []);

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="media-gallery">
      {!isLoggedIn && (
        <div className="text-center mt-4">
          <button
            onClick={handleLoginRedirect}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Login to Upload and Delete
          </button>
        </div>
      )}

      {/* Photo Section */}
      <PhotoGallery isLoggedIn={isLoggedIn} />

      {/* Divider */}
      <hr className="my-10 border-t-2 border-gray-300 w-4/5 mx-auto" />

      {/* Video Section */}
      <VideoGallery isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default MediaGallery;
