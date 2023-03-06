import React from 'react'
import image1 from './assets/demaciaBack.jpg'
import { FaTimes } from "react-icons/fa";


const ModalDemacia = ({open, onClose}) => {
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
                <h1>Demacia</h1>
                <p>Demacia est un royaume fort, fondé sur des lois strictes et riche d'un passé militaire prestigieux. Ses habitants ont toujours attaché une grande importance aux idéaux de justice, d'honneur et de devoir, et ils sont très fiers de leur héritage culturel. Mais malgré ses valeurs très nobles, cette nation parfaitement autosuffisante est devenue de plus en plus insulaire et isolationniste au cours de ces derniers siècles.</p>
                <p>La capitale, la Grande cité de Demacia, a été fondée pour servir de refuge contre la sorcellerie après le cauchemar des Guerres runiques et a été bâtie sur le mystère de la pétricite, une étrange pierre blanche pouvant saper l'énergie magique. C'est de là que la famille royale a toujours veillé à la défense des villes et villages alentours, ainsi que des terres agricoles, des forêts et des montagnes riches en ressources minérales qui constituent le royaume.</p>
                <p>Tous ceux qui vivent au-delà des frontières bien gardées du royaume sont perçus avec une suspicion grandissante, et en ces temps de doute, beaucoup d'anciens alliés se tournent vers de nouvelles sources de protection. Certains osent murmurer que l'âge d'or de Demacia est révolu et que si son peuple ne parvient pas à s'adapter à un monde en constante évolution, ce dont beaucoup le jugent incapable, le déclin du royaume est inévitable.</p>
            </div>
        </div>
      </div>
    </div>
    )
}

export default ModalDemacia;
