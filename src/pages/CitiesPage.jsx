import { useNavigate, useParams } from "react-router-dom";
import { useGet } from "../hooks/useGet";
import { Slider } from "../components/Slider/Slider";
import { DestinationNavigation } from "../components/DestinavionNavigation/DestinavionNavigation";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { Card } from "../components/Card/Card";

export function CitiesPage() {
  const { slug } = useParams();
  const { data } = useGet(`http://localhost:4000/destinations/${slug}`);
  const sliderArray = [
    "seljalandvoss-iceland.jpg",
    "city-houses-reykjavik.jpg",
    "frankfurt-skyline-germany.jpg",
  ];
  const navigate = useNavigate();

  function handleCardClick(cityslug) {
    navigate(`/hotels/${slug}/${cityslug}`);
  }

  return (
    <>
      <Slider images={sliderArray} 
      title="HOTELLER & DESTINATIONER"/>
      <DestinationNavigation />
      <GridContainer columns={3}>
        <section>
            <div>
            <h2>Vores hoteller i {data?.name}</h2>
            <h5>{data?.description}</h5>
            </div>
            <GridContainer columns={2}>
                {data?.cities.map((item) => (
                    <Card
                    action={() => handleCardClick(item.slug)}
                    key={item.city_id}
                    image={`../images/${item.CityImage.city_image_filename}`}
                    title={item.name}
                    ></Card>
                ))}
            </GridContainer>
        </section>
      </GridContainer>
    </>
  );
}
