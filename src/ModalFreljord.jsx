import React from 'react'
import image1 from './assets/freljordBack.jpg'
import { FaTimes } from "react-icons/fa";


const ModalFreljord = ({open, onClose}) => {
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
                <h1>Freljord</h1>
                <p>Freljord est une terre inhospitalière et hostile dont les habitants sont des guerriers-nés, contraints de persévérer envers et contre tout.</p>
                <p>Aussi fières qu'elles sont outrageusement indépendantes, les tribus de Freljord sont souvent considérées comme barbares et sauvages par leurs voisins de Valoran, lesquels ignorent les traditions ancestrales qui les ont façonnées. Il y a plusieurs milliers d'années, l'alliance entre les sœurs Avarosa, Serylda et Lissandra fut brisée lorsqu'une guerre menaça de ravager tout Runeterra à son insu, ce qui plongea les territoires du nord dans le chaos d'un hiver quasi permanent. De nos jours, seuls les mortels exceptionnels qui semblent immunisés contre les ravages du feu ou de la glace sont destinés, ou tout du moins capables de gouverner.</p>
                <p>Malgré les efforts des Gardiens du givre, nombre de mythes et légendes relatent encore les récits des dieux anciens, yétis étranges et autres Gardiens des esprits. Les maraudeurs de la Griffe hivernale s'aventurent chaque année un peu plus loin, tourmentant Demacia au sud et Noxus à l'est. Finalement, en quête d'une destinée meilleure, les tribus indépendantes et irascibles ont commencé l'une après l'autre à accorder leur allégeance à Ashe, la jeune reine des Avarosans.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ModalFreljord;