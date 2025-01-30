import { useEffect, useState } from "react";
import style from "./Slider.module.scss";

export function Slider ({ images, title }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000)

    return () => clearInterval(interval);
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
      <span></span>
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
