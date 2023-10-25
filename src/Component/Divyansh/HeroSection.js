import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const HeroSection = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <div style={{margin:"0px", padding:"0px", backgroundColor:"black"}}>
    <ImageGallery
      items={images}
      showThumbnails={false}
      showFullscreenButton={false}
      showPlayButton={false}
      showNav={false}
      showBullets={true}
      autoPlay={true}
    />
    </div>
  );
};

export default HeroSection;
