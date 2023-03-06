import React from 'react'
import image1 from './assets/bilgewaterBack.jpg'
import { FaTimes } from "react-icons/fa";


const ModalBilgewater = ({open, onClose}) => {
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
                <h1>Bilgewater</h1>
                <p>Nichée dans l'archipel des Îles de la Flamme bleue, Bilgewater est une ville portuaire semblable à nulle autre : elle abrite les pêcheurs de serpents de mer, les gangs des docks et tous les contrebandiers du monde. Ici, les fortunes se font et les ambitions meurent en une fraction de seconde. Pour ceux qui fuient la justice, l'endettement ou la persécution, Bilgewater peut être le lieu d'un nouveau départ, car nul ici ne vous questionne sur votre passé. Pourtant, chaque matin, on retrouve dans les eaux du port des cadavres de voyageurs, la bourse vide et la gorge tranchée…</p>
                <p>Bien que Bilgewater soit une cité dangereuse, elle regorge d'opportunités pour les aventuriers sans scrupule que limitent d'ordinaire les lois et les régulations commerciales. Si vous avez de l'argent, vous pouvez acheter n'importe quoi ici, des technologies Hextech illégales aux faveurs des seigneurs du crime organisé.</p>
                <p>Le dernier roi des pillards de Bilgewater ayant été récemment renversé, la cité est entrée dans une période de transition, alors que les capitaines les plus éminents tentent de se mettre d'accord sur son avenir. Néanmoins, tant qu'il y aura des navires en état de naviguer et des équipages pour les manœuvrer, Bilgewater demeurera certainement l'un des endroits de Runeterra les plus animés et les mieux connectés au reste du monde.</p>
            </div>
        </div>
      </div>
    </div>
    )
}

export default ModalBilgewater;
