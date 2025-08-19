import CardPizza from "./CardPizza"
import Header from "./Header"
import data from "../data/data"


function Home() {
    return (
        <div>
            <Header />
            <div className="flex flex-row justify-center">

                {data.map(pizza => {
                    return (
                        <div> 
                        <CardPizza
                            key={pizza.name}
                            name={pizza.name}
                            price={pizza.price}
                            ingredients={pizza.ingredients}
                            img={pizza.img}
                        />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Home;
