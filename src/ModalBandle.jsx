import React from 'react'
import image1 from './assets/bandleBack.jpg'
import { FaTimes } from "react-icons/fa";


const ModalBandle = ({open, onClose}) => {
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
                <h1>Bandle</h1>
                <p>Les opinions divergent quant à la localisation exacte du foyer d'origine des yordles, bien que quelques mortels prétendent avoir emprunté des chemins invisibles vers une terre d'enchantements étranges au-delà du monde matériel. Ils parlent d'un lieu fécond en magie, où l'imprudent peut se laisser distraire par des myriades de merveilles et se perdre dans un rêve.</p>
                <p>À Bandle, chaque sensation est décuplée pour les êtres qui ne sont pas des yordles. Les couleurs sont incroyablement vives, la nourriture et les boissons enivrent les sens pendant des années et, quand on y a goûté une fois, on n'en oublie plus jamais la saveur. La lumière du soleil est incroyablement dorée, l'eau y est claire comme du cristal et chaque récolte est abondante. Peut-être certaines de ces affirmations sont-elles vraies, peut-être aucune : aucun conteur ne semble d'accord avec les autres sur ce qu'il a vu.</p>
                <p>La seule chose que l'on sache de façon certaine, c'est que Bandle et ses habitants vivent hors du temps. Cela explique peut-être pourquoi les mortels qui parviennent à revenir semblent avoir terriblement vieilli... et pourquoi la plupart ne reviennent jamais.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ModalBandle;
