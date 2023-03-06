import React from 'react'
import image1 from './assets/noxusBack.jpg'
import { FaTimes } from "react-icons/fa";


const ModalNoxus = ({open, onClose}) => {
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
                <h1>Noxus</h1>
                <p>Noxus est un puissant empire à la réputation terrifiante. Pour les étrangers qui vivent hors de ses frontières, il s'agit d'un pays brutal, expansionniste et agressif, mais ceux qui observent au-delà de cette façade belliqueuse découvrent une société ouverte, où la force et les talents du peuple sont valorisés et cultivés.</p>
                <p>Les Noxiis formaient autrefois un groupe de redoutables tribus barbares, jusqu'à ce qu'ils prennent d'assaut et s'installent dans l'ancienne cité qui constitue aujourd'hui le cœur de leur empire. Menacés de toutes parts, ils sont allés au-devant de leurs ennemis pour combattre, repoussant leurs frontières plus loin chaque année. Cette lutte pour la survie a fait des Noxiens modernes un peuple fier pour qui la force prime sur tout le reste, bien que cette force puisse s'exprimer de différentes façons.</p>
                <p>N'importe quelle personne peut s'élever à une position de pouvoir et de respect à Noxus, indépendamment de son statut social, de ses antécédents, de son lieu d'origine ou de sa richesse, du moment qu'elle fait montre des aptitudes nécessaires. Ceux qui sont capables de manipuler la magie sont tenus en haute estime et activement recherchés, dans l'espoir que leurs talents uniques puissent être affinés et mis au service de l'empire.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ModalNoxus;