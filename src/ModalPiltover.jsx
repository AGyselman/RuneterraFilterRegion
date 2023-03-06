import React from 'react'
import image1 from './assets/piltoverBack.jpg'
import { FaTimes } from "react-icons/fa";


const ModalPiltover = ({open, onClose}) => {
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
                <h1>Piltover</h1>
                <p>Piltover est une cité florissante animée par le progrès, dont la puissance et l'influence ne cessent de croître. C'est le centre culturel de Valoran, où l'art, l'artisanat, le commerce et l'innovation avancent main dans la main. Sa puissance ne repose pas sur sa force militaire, mais sur les rouages bien huilés du libre-échange et de la pensée progressiste. Située sur les falaises qui surplombent le district de Zaun et l'océan, cette ville est le point de convergence de flottes entières de vaisseaux, qui traversent ses titanesques portails marins pour y acheminer des marchandises venues de toutes parts. </p>
                <p>L'opulence dont profite la cité a conduit à un développement urbain spectaculaire et sans précédent. Piltover est parvenue - et parvient toujours ! - à se réinventer constamment, pour devenir une ville où quiconque peut faire fortune et vivre pleinement ses rêves. De jeunes guildes de marchands y financent les entreprises les plus folles : des projets artistiques extravagants et grandioses, des recherches ésotériques sur la technologie Hextech, ou encore des monuments architecturaux qui rendent hommage à leur puissance.</p>
                <p>Grâce à l'afflux toujours grandissant d'inventeurs venus explorer les possibilités du domaine Hextech, Piltover est aujourd'hui un centre névralgique qui attire les meilleurs artisans du monde entier.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ModalPiltover;
