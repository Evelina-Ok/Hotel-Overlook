import { useParams } from "react-router-dom"


export function HotelSingle () {
const {hotelslug} = useParams();

console.log('single hotel', hotelslug);


    return (
        <>
        </>
    )
}