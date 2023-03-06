import React from 'react'
import image1 from './assets/zaunBack.jpg'
import { FaTimes } from "react-icons/fa";


const ModalZaun = ({open, onClose}) => {
   if(!open) return null 
  return (
    <div onClick={onClose} className='overlay'>
      <div onClick={(e) => {
        e.stopPropagation()
      }} className="modalContainer">
        <img src={image1} />
        <div className="modalRight">
            <p onClick={onClose} className="closeBtn">
              <FaTimes />
              </p>
            <div className="content">
                <h1>Zaun</h1>
                <p>Zaun est un vaste district relié à Piltover, qui s'étend dans les vallées et les profonds canyons situés en contrebas. Le peu de lumière qui atteint cette « basse-ville », filtré par les épaisses fumées émanant de l'entrelacs de tuyaux rouillés dont elle est parsemée, se reflète sur les vitres crasseuses de ses bâtiments à l'architecture industrielle. Zaun et Piltover constituaient autrefois une seule et même cité ; aujourd'hui, ces deux sociétés sont séparées mais vivent en symbiose. Bien qu'elle soit perpétuellement plongée dans un brouillard néfaste, Zaun est une ville florissante, dont les habitants sont dynamiques et la culture très riche.</p>
                <p>L'opulence de Piltover a permis à Zaun de se développer avec elle en tandem, comme un reflet sombre de la ville des hauteurs. La plupart des marchandises qui affluent vers la riche cité finissent par se retrouver sur les marchés noirs de sa sœur en contrebas, et les inventeurs Hextech qui jugent les réglementations de Piltover trop restrictives peuvent souvent mener librement leurs expériences, si dangereuses soient-elles, dans les tréfonds de Zaun.</p>
                <p>Le développement incontrôlé de diverses technologies à risque et l'industrialisation débridée ont transformé d'immenses portions de Zaun en quartiers pollués et mal famés. Des flots de résidus toxiques stagnent dans les bas-fonds de la ville, mais même dans ces secteurs, les habitants parviennent à mener leur vie et à prospérer.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ModalZaun;
