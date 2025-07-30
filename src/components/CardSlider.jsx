import React, { useState } from 'react'
import wedding from "../assets/images/stock-photo-catering-wedding-event-plate-service-450w-559912438.webp"
import buffet from "../assets/images/depositphotos_219196920-stock-photo-buffet-food-bar-self-service.jpg"
import party from "../assets/images/depositphotos_68158843-Buffet-heated-trays-ready-for-service-.jpg"


const CardSlider = () => {
  const cards = [
  {
    image: wedding,
    title: "WEDDING SERVICE",
    description:"The chocolate fondant which did not disappoint It was rich and indulgent, with a gooey center that was pure bliss.",
  },

  {
    image: buffet,
    title: "BUFFET SERVICE",
    description:"Assertively myocardinate robust e-tailers for extensible human capital. dpropriately benchmark networks.",
  },

  {
    image: party,
    title: "PARTY SERVICE",
    description: "Assertively myocardinate robust e-tailers for extensible human capital. dpropriately benchmark networks.",
  },

    


    
  ]



  const totalPages = 4;
  const cardsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * cardsPerPage;
  const visibleCards = cards.slice(startIndex, startIndex + cardsPerPage); 


  return (
    <div className="w-full px-6 py-3 flex flex-col items-center space-y-10">
      <div className="flex gap-3">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`w-2 h-2 rounded-full ${
              currentPage === index ? 'bg-orange-700' : 'bg-gray-500'
            } transition duration-300`}
          ></button>
          ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
    {visibleCards.map((card, index) => (
      <div key={index} className="bg-white overflow-hidden shadow-md border border-gray-200 p-4">
        <img src={card.image} alt={card.title} className="w-full h-48 object-cover"/>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{card.title}</h2>
          <p className="text-gray-600 text-sm">{card.description}</p>
          <button className="group inline-flex items-center gap-2 text-orange-700 border border-orange-700 px-4 py-3 mt-5">
  <span className="text-sm font-medium">READ MORE</span>
  <span className="inline-flex items-center gap-1">
    <span className="block w-6 h-[1.5px] bg-orange-700 transition-transform duration-300 group-hover:translate-x-1"></span>
    <span className="text-xs transition-transform duration-300 group-hover:translate-x-1 mb-0.5">→</span>
  </span>
</button>
        </div>
      </div>
    ))}
  </div>

</div>
    






    
      
    
  )
}

export default CardSlider
