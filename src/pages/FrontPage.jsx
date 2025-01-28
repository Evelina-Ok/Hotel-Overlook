import { Slider } from "../components/Slider/Slider";
import { NewsSection } from "../components/NewsSection/NewsSection";
import { useNavigate } from "react-router-dom";
// import { PageTitle } from "../components/PageTitle/PageTitle";


export function FrontPage () {
    const sliderArray = ["slideshow.jpg", "slideshow1.jpg", "slideshow2.jpg", "slideshow3.jpg", "slideshow4.jpg", "slideshow5.jpg", "slideshow6.jpg"];
    const navigate = useNavigate();

    return (
        <div>
            {/* <PageTitle pageTitle="VELKOMMEN TIL HOTEL OVERLOOK ONLINE" /> */}
            {/* <Slider backgroundUrl="./images/frankfurt-skyline-germany.jpg" /> */}
            <Slider
            images={sliderArray}
            title="VELKOMMEN TIL HOTEL OVERLOOK ONLINE" />
            <NewsSection />
        </div>
    )
}


// !hotel == "" && hotelId : ""