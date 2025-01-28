import { useNavigate, useParams } from "react-router-dom";
import { useGet } from "../hooks/useGet";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { Card } from "../components/Card/Card";
import { DestinationNavigation } from "../components/DestinavionNavigation/DestinavionNavigation";

export function HotelPage () {
    const { slug } = useParams();
    const { data } = useGet(`http://localhost:4000/destinations/${slug}`);
    const navigate = useNavigate();

    console.log('hotel', data);

    function handleCardClick(newslug) {
        navigate(`/hotels/${slug}/${newslug}`);
    }

    return (
        <section>
            <div>
                <h2>Vores hoteller i {}</h2>
                <h5></h5>
            </div>
            <DestinationNavigation />
            <GridContainer columns={2}>
            {data?.cities.map((item) => (
                <Card
                key={item.city_id}
                action={() => handleCardClick(item.slug)}
                image={`./images/${item.CityImage.city_image_filename}`}
                title={item.name}
                ></Card>
            ))}
            </GridContainer>
        </section>
    )
}