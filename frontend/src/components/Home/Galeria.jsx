// import React from 'react'
import Gallery_1 from '../img/Gallery_1.jpg'
import Gallery_2 from '../img/Gallery_2.jpg'
import Gallery_3 from '../img/Gallery_3.jpg'
import Gallery_4 from '../img/Gallery_4.jpg'
const Galeria = () => {
  return (
    <section className="gallery min-vh-100">
      <div><h1>Nuestros proyectos</h1></div>
      <br/>
      <div className="container-lg">
         <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
            <div className="col">
               <img src={Gallery_1} className="gallery-item" alt="gallery"/>
            </div>
            <div className="col">
               <img src={Gallery_2} className="gallery-item" alt="gallery"/>
            </div>
            <div className="col">
               <img src={Gallery_3} className="gallery-item" alt="gallery"/>
            </div>
            <div className="col">
               <img src={Gallery_4} className="gallery-item" alt="gallery"/>
            </div>
            <div className="col">
               <img src={Gallery_1} className="gallery-item" alt="gallery"/>
            </div>
            <div className="col">
               <img src={Gallery_2} className="gallery-item" alt="gallery"/>
            </div>
         </div>
      </div>
   
 
 {/* <!-- Modal --> */}
 <div className="modal fade" id="gallery-modal"  aria-labelledby="exampleModalLabel" tabIndex="-1" aria-hidden="true" >
   <div className="modal-dialog modal-dialog-centered modal-lg">
     <div className="modal-content">
       <div className="modal-header">
         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
       </div>
       <div className="modal-body">
          <img src="img/1.jpg" className="modal-img" alt="modal img"/>
       </div>
     </div>
   </div>
 </div>
</section>
  )
}

export default Galeria