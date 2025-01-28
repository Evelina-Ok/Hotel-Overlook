import { useGet } from "../../hooks/useGet"
import { Card } from "../Card/Card";
import { GridContainer } from "../GridContainer/GridContainer";
import style from "./NewsSection.module.scss"

export function NewsSection () {
    const { data, isLoading, error } = useGet(
        `http://localhost:4000/news`
    );
    if (error) {
        return <p>Error, please try again later</p>;
      }

    console.log('news', data);
    
    return (
        <>
        <h2>Sidste nyt</h2>
        <GridContainer columns={3}>
            {isLoading ? (
                    <div>Loading...</div>
        ) : (
            data?.map((item) => {
                return (
                <Card
                key={item.id}
                image={"./images/"+nyhed-island.jpeg}
                title={item.title}
                ></Card>
                );
})
        )}
        </GridContainer>
        </>
    )
}