import { useNavigate } from "react-router-dom";
import { useGet } from "../hooks/useGet";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { Card } from "../components/Card/Card";
import { Slider } from "../components/Slider/Slider";
import { DestinationNavigation } from "../components/DestinavionNavigation/DestinavionNavigation";

export function CountriesPage() {
  const { data } = useGet("http://localhost:4000/destinations");

  const sliderArray = [
    "seljalandvoss-iceland.jpg",
    "city-houses-reykjavik.jpg",
    "frankfurt-skyline-germany.jpg",
  ];
  const navigate = useNavigate();

  console.log("countries", data);

  function handleCardClick(slug) {
    navigate(`/hotels/${slug}`);
  }

  return (
    <>
      <Slider images={sliderArray} title="HOTELLER & DESTINATIONER" />
      <DestinationNavigation />

      <section>
        <div>
          <h2>Vores destinationer</h2>
          <h5>
            {" "}
            Er du klar til at udforske de smukkeste destinationer i Norden og
            Centraleuropa? Vi tilbyder et udvalg af nøje udvalgte hoteller i
            Danmark, Sverige, Norge, Finland, Tyskland, Polen og Island. Uanset
            om du ønsker at opleve den storslåede natur, historiske steder eller
            den moderne storby, så har vi noget for enhver smag.
          </h5>
        </div>
        <GridContainer columns={3}>
          {data?.map((item) => (
            <Card
              key={item.id}
              action={() => handleCardClick(item.slug)}
              image={`../images/${item.CountryImage.country_image_filename}`}
              title={item.name}
              // description={item.description}
            ></Card>
          ))}
        </GridContainer>
      </section>
    </>
  );
}
