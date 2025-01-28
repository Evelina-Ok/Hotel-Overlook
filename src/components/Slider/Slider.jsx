import style from "./Slider.module.scss";

export function Slider({ backgroundUrl, position }) {
  return (
    <section
      className={style.sliderStyle}
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
    </section>
  );
}
