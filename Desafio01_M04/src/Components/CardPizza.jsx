function CardPizza({ name, price, ingredients, img }) {
    return (
        <div className = "flex">
            <div className="flex flex-col m-4 h-130 rounded overflow-hidden shadow-lg bg-white">
                <img className="w-full h-48 object-cover" src={img} alt="Pizza Napolitana" />
                <div className="px-6 py-4">
                    <h2 className="font-bold text-xl mb-2 text-black">{name}</h2>
                    <p className="text-gray-700 text-base mb-2 font-semibold">🍕 Ingredientes:</p>
                    <ul className="list-disc list-inside text-gray-600 mb-4">
                        {ingredients.map((ing, index) => (
                            <li key={index}> {ing}</li>
                        ))}
                    </ul>
                    <p className="text-lg font-bold text-green-700">Precio: {price}</p>
                </div>
                <div className="px-6 pt-4 pb-6 flex justify-center">
                    <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-2 ">
                        Ver Más 👀
                    </button>
                    <button class="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded m-2">
                        Añadir 🛒
                    </button>
                </div>
            </div>

        </div>

    )
}

export default CardPizza