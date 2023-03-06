import React from 'react'
import image1 from './assets/ioniaBack.jpg'
import { FaTimes } from "react-icons/fa";


const ModalIonia = ({open, onClose}) => {
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
                <h1>Ionia</h1>
                <p>Entourée de mers capricieuses, Ionia est composée de plusieurs provinces alliées réparties à travers un gigantesque archipel appelé les Terres premières. La culture ionienne s'est développée dans le but de maintenir l'équilibre universel, et par conséquent, la frontière entre le monde matériel et le monde spirituel y est plus perméable, particulièrement dans les montagnes et les forêts sauvages.</p>
                <p>Bien que la magie de ces terres soit imprévisible et que les créatures y soient dangereuses et féeriques, la plupart des Ioniens ont vécu dans la paix et la prospérité pendant des siècles. Les moines guerriers, les milices provinciales et Ionia elle-même ont suffi à les protéger.</p>
                <p>Désormais, une paix fragile règne à Ionia. La guerre a provoqué différentes réactions et a divisé la région. Certains groupes, comme les moines de Shojin ou le Kinkou, souhaitent renouer avec leurs valeurs traditionnelles : l'isolement et le pacifisme. D'autres factions, comme la Fraternité Navori ou l'Ordre de l'ombre, sont plus radicales et demandent la militarisation de la magie de leurs terres afin de créer une nation puissante, unie et capable de se venger de Noxus.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ModalIonia;