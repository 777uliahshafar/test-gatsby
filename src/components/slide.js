import React from "react"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"
import { slideContainer } from "./_slide.module.scss"

const Slide = () => {
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
  ]
  return (
    <div className={slideContainer}>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        slideInterval={8000}
        autoPlay={true}
      />
    </div>
  )
}

export default Slide
