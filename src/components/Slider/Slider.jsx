import { useEffect, useState } from "react";
import style from "./Slider.module.scss";

export function Slider ({ images, title }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const timeout = setTimeout(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000)

    return () => clearTimeout(timeout);
  }, [images])

  if (!images || images.length === 0) {
    return <h3>No images found</h3>
  }

  return (
    <section
      className={style.sliderStyle}>
      <img src={`./images/${images[currentImage]}`} />
    <div>
      <h1>{title}</h1>
    </div>
    </section>
  );
}



/* export function Slider({ backgroundUrl, position }) {
  return (
    <section
      className={style.sliderStyle}
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
    </section>
  );
} */
