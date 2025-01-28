import { Slider } from "../components/Slider/Slider";
import { NewsSection } from "../components/NewsSection/NewsSection";
import { PageTitle } from "../components/PageTitle/PageTitle";


export function FrontPage () {
    return (
        <div>
            <PageTitle pageTitle="VELKOMMEN TIL HOTEL OVERLOOK ONLINE" />
            <Slider backgroundUrl="./images/frankfurt-skyline-germany.jpg" />
            <NewsSection />
        </div>
    )
}


// !hotel == "" && hotelId : ""