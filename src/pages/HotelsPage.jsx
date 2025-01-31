import { useNavigate, useParams } from "react-router-dom";
import { useGet } from "../hooks/useGet";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { Card } from "../components/Card/Card";
import { DestinationNavigation } from "../components/DestinavionNavigation/DestinavionNavigation";
import { Slider } from "../components/Slider/Slider";

export function HotelsPage () {
    const { cityslug, slug } = useParams();
    const { data } = useGet(`http://localhost:4000/destinations/${slug}/${cityslug}`);
    // const { data: otherCities } = useGet(`http://localhost:4000/destinations/${slug}`)
    const navigate = useNavigate();

    const sliderArray = [
        "seljalandvoss-iceland.jpg",
        "city-houses-reykjavik.jpg",
        "frankfurt-skyline-germany.jpg",
      ];
    
    console.log('hotels', data);

    function handleCardClick(countrySlug, cityslug, hotelslug) {
        navigate(`/hotels/${countrySlug}/${cityslug}/${hotelslug}`);
      }
/*     const filteredCities = otherCities?.cities.filter(
        (item) => item.slug !== cityslug
      );
 */
    return (
        <>
        <Slider
            images={sliderArray}
            title="HOTELLER & DESTINATIONER" />
        <DestinationNavigation />
        <section>
            <div>
                <h2>Vores hoteller i {data?.cities[0].name}</h2>
                <h5>{data?.cities[0].description}</h5>
            </div>
            <DestinationNavigation />
            <GridContainer columns={2}>
            {data?.cities.map((item) =>
            item.hotels.map((hotel) => (
                <Card
                key={hotel.hotel_id}
                action={() => handleCardClick(data?.slug, item.slug, hotel.slug)}
                image={`/images/${hotel.HotelImage.hotel_image_filename}`}
                title={hotel.title}
                ></Card>
            )) 
            )}
            </GridContainer>
        </section>
        </>
    )
}