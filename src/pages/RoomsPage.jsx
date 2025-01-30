import { useState } from "react";
import { useGet } from "../hooks/useGet";
import { Slider } from "../components/Slider/Slider";
import { GridContainer } from "../components/GridContainer/GridContainer";

export function RoomsPage () {
    const {slug, cityslug, hotelslug} = useParams();
    const [room, setRoom] = useState();

    const {data} = useGet(`http://localhost:4000/destinations/${slug}/${cityslug}/${hotelslug}`);
    // const (data: roomData) = useGet(`http://localhost:4000/destinations/${slug}/${cityslug}/${hotelslug}`/${room});
    
    const sliderArray = ["seljalandvoss-iceland.jpg", "city-houses-reykjavik.jpg", "frankfurt-skyline-germany.jpg"]; 

    return (
        <>
            <Slider
            images={sliderArray}
            title="HOTELLER & DESTINATIONER" />

   {/*          <GridContainer>
                <section>
                    <div>
                        <h2>{data?.cities[0].hotels[0].title}</h2>
                        <p>{data?.cities[0].hotels[0].description}</p>
                        <h4>Vores værelser</h4>
                    </div>
                    <GridContainer>
                        {data?.cities[0].hotels[0].rooms.map((item) => (
                            // <div>
                            // key={item.slug}
                            // imgSrc={`../images/${item.images[0].filename}`}
                            // title={item.title}
                            // </div>

                            {room === item.slug && roomData && (
                                <>
                                <ul>
                                {roomData?.cities[0].hotels[0].rooms[0].room_facilities.map(
                                    (facility) => (
                                        <li key={facility.id}>{facility.title}</li>
                                    )
                                )}
                                    </ul>
                                </>
                            )}

                        ))}
                    </GridContainer>
                </section>
            </GridContainer> */}
        
        </>
    )
}