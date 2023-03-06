import logo from './logo.svg';
import { GalleryData } from './GalleryData';
import React, { useEffect, useState, useRef } from 'react';
import { motion } from "framer-motion";
import images from './images';
// import icons from './icons';

//Import All Modal 
import ModalBandle from './ModalBandle';
import ModalBilgewater from './ModalBilgewater';
import ModalDemacia from './ModalDemacia';
import ModalFreljord from './ModalFreljord';
import ModalIonia from './ModalIonia';
import ModalNoxus from './ModalNoxus';
import ModalPiltover from './ModalPiltover';
import ModalZaun from './ModalZaun';
import ModalShurima from './ModalShurima';


//End Import All Modal

//All Icons
import icon1 from './assets/bandleIcon.png';
import icon2 from './assets/bilgewaterIcon.png';
import icon3 from './assets/demaciaIcon.png';
import icon4 from './assets/freljordIcon.png';
import icon5 from './assets/ioniaIcon.png';
import icon6 from './assets/noxusIcon.png';
import icon7 from './assets/piltoverIcon.png';
import icon8 from './assets/zaunIcon.png';
import icon9 from './assets/shurimaIcon.png';







//End All Icons



function App() {
/* STATE Slider & Images */
const [data,setData] = useState([]);
const [collection,setCollection] = useState([]);

const [width, setWidth] = useState(0);
const carousel = useRef();
/* END STATE Slider & Images */

/* STATE Modal */
const [openModal, setOpenModal] = useState(false)
const [openModal2, setOpenModal2] = useState(false)
const [openModal3, setOpenModal3] = useState(false)
const [openModal4, setOpenModal4] = useState(false)
const [openModal5, setOpenModal5] = useState(false)
const [openModal6, setOpenModal6] = useState(false)
const [openModal7, setOpenModal7] = useState(false)
const [openModal8, setOpenModal8] = useState(false)
const [openModal9, setOpenModal9] = useState(false)








/* END Modal */

/* HOOK */
useEffect(()=>{
  setData(GalleryData);
  setCollection([... new Set(GalleryData.map((item)=> item.title))])
  // console.log(collection);
},[])

useEffect(() => {
  // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
  setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
}, []);
/* END HOOK */

// console.log(collection);
const gallery_filter = (itemData) =>{
  const filterData = GalleryData.filter((item)=> item.title == itemData);
  setData(filterData);
}




  return (
    <div className="App">
      <h1 className='h1'>Régions</h1>
      <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
          <motion.div drag="x"
                      dragConstraints={{ right: 0, left: -width }}
                      className='inner-carousel'>
            {images.map(image => {
              return(
                <motion.div className='item' key={image}>
                  <img src={image}/>
                </motion.div>
              );
            })}
          </motion.div>
      </motion.div>
          {/* <div className='inner-icons'>
            {icons.map(icon => {
              return(
                <div className='item-icon'>
                  <img src={icon}/>
                </div>
              );
            })}
          </div> */}
          <div className='containerIcon'>

          <img onClick={() => setOpenModal(true)} className='item-icon' src={icon1}></img>
          <ModalBandle open={openModal} onClose={() => setOpenModal(false)} />

          <img onClick={() => setOpenModal2(true)} className='item-icon' src={icon2}></img>
          <ModalBilgewater open={openModal2} onClose={() => setOpenModal2(false)} />

          <img onClick={() => setOpenModal3(true)} className='item-icon' src={icon3}></img>
          <ModalDemacia open={openModal3} onClose={() => setOpenModal3(false)} />

          <img onClick={() => setOpenModal4(true)} className='item-icon' src={icon4}></img>
          <ModalFreljord open={openModal4} onClose={() => setOpenModal4(false)} />

          <img onClick={() => setOpenModal5(true)} className='item-icon' src={icon5}></img>
          <ModalIonia open={openModal5} onClose={() => setOpenModal5(false)} />

          <img onClick={() => setOpenModal6(true)} className='item-icon' src={icon6}></img>
          <ModalNoxus open={openModal6} onClose={() => setOpenModal6(false)} />

          <img onClick={() => setOpenModal7(true)} className='item-icon' src={icon7}></img>
          <ModalPiltover open={openModal7} onClose={() => setOpenModal7(false)} />

          <img onClick={() => setOpenModal8(true)} className='item-icon' src={icon8}></img>
          <ModalZaun open={openModal8} onClose={() => setOpenModal8(false)} />

          <img onClick={() => setOpenModal9(true)} className='item-icon' src={icon9}></img>
          <ModalShurima open={openModal9} onClose={() => setOpenModal9(false)} />

          </div>

      <div layout className='galleryWrapper' >
        <div className='filterItem'>
          <ul>
            <li><button onClick={()=> setData(GalleryData)}>All</button></li>
            {
              collection.map((item)=> <li><button onClick={()=>{gallery_filter(item)}}>{item}</button></li>)
            }
          </ul>
        </div>
        <motion.div layout className='galleryContainer'>
        {
            data.map((item, i)=> <motion.div onClick={() => setCollection(collection) } key={item.id} 
             layout
             animate={{ opacity: 1 }}
             initial={{ opacity: 0 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 0.5 }}
             className='galleryItem'><img src={item.image} /></motion.div> )
          }
        </motion.div>

      </div>
    </div>
  );
}

export default App;
