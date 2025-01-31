import { useNavigate, useParams } from "react-router-dom";
import { Slider } from "../components/Slider/Slider";
import { useState } from "react";
import { useGet } from "../hooks/useGet";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { Card } from "../components/Card/Card";
import { DestinationNavigation } from "../components/DestinavionNavigation/DestinavionNavigation";

export function HotelSinglePage() {
  const { slug, cityslug, hotelslug } = useParams();
  const [room, setRoom] = useState();
  const navigate = useNavigate();

  const { data } = useGet(
    `http://localhost:4000/destinations/${slug}/${cityslug}/${hotelslug}`
  );

  const { data: roomData } = useGet(
    `http://localhost:4000/destinations/${slug}/${cityslug}/${hotelslug}/${room}`
  );

  const sliderArray = [
    "seljalandvoss-iceland.jpg",
    "city-houses-reykjavik.jpg",
    "frankfurt-skyline-germany.jpg",
  ];

  console.log("single hotel", hotelslug);

  //   function handleCardClick(countrySlug, cityslug, hotelslug) {
  //     navigate(`/hotels/${countrySlug}/${cityslug}/${hotelslug}`);
  //   }

  return (
    <>
      <Slider images={sliderArray} title="HOTELLER & DESTINATIONER" />
            <DestinationNavigation />
    
      <section>
        <div>
          <h2>
            {data?.cities[0].hotels[0].title} {data?.cities[0].name}
          </h2>
          <p>{data?.cities[0].hotels[0].description}</p>
        </div>
        <GridContainer columns={2}>
          {data?.cities[0].hotels[0].rooms.map((item) => (
              <Card
                key={item.slug}
                image={`public/images/${item.images[0].filename}`}
                title={item.title}
                area={`${item.area}. Plads til ${item.num_persons}`}
                description={item.description}
                price={`Fra ${item.day_price_normal},00 DKK`}
                
              ></Card>
            ))
          }
        </GridContainer>
      </section>
    </>
  );
}
