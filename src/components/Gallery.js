import React from "react";

const Gallery = () => {
  const images = [
    {
      src: "/sports_day.jpg",
      alt: "Students participating in various sports events.",
    },
    {
      src: "/science_exhibition.jpg",
      alt: "Students presenting their science projects.",
    },
    {
      src: "/cultural_fest.jpg",
      alt: "Students performing in the cultural fest.",
    },
    { src: "/classroom.jpg", alt: "A glimpse of our interactive classrooms." },
    {
      src: "/library.jpg",
      alt: "Students reading and studying in the school library.",
    },
  ];

  const videos = [
    {
      src: "/school_tour.mp4",
      alt: "Virtual tour of Springdale Public School.",
    },
    {
      src: "/annual_function.mp4",
      alt: "Highlights from the Annual Function 2023.",
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Photos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full h-auto rounded shadow-md"
            />
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Videos</h3>
        <div className="space-y-4">
          {videos.map((video, index) => (
            <video
              key={index}
              controls
              className="w-full h-auto rounded shadow-md"
            >
              <source src={video.src} type="video/mp4" />
              {video.alt}
            </video>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
