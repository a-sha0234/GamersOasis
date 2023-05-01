import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";

export default function Carousel(props: any) {
  console.log(props.data);
  const images = [
    {
      original: `${props.data[0].image_url}`,
    },
    {
      original: `${props.data[1].image_url}`,
    },
    {
      original: `${props.data[2].image_url}`,
    },
  ];
  return (
    <div className="image-gallery">
      <ImageGallery
        items={images}
        autoPlay={false}
        showBullets={true}
        showPlayButton={false}
        showFullscreenButton={false}
      />
    </div>
  );
}
