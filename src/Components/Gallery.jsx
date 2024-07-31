import React, { useEffect, useState } from 'react'
import ReactImageGallery from "react-image-gallery"
import"react-image-gallery/styles/css/image-gallery.css"
// import "../Components/gallery.css"
import axios from 'axios'

export default function Gallery() {
     const images = [
    {
      original: "https://ld-wt73.template-help.com/wt_prod-31396/images/grid-gallery-5-178x178.jpg",
      thumbnail: "https://picsum.photos/id/1018/150/100/",
      description: "title 1",
    },
    {
      original: "https://ld-wt73.template-help.com/wt_prod-31396/images/grid-gallery-2-178x178.jpg",
      thumbnail: "https://picsum.photos/id/1015/150/100/",
      description: "title 2",
    },
    {
      original: "https://picsum.photos/id/1019/600/400/",
      thumbnail: "https://picsum.photos/id/1019/150/100/",
      description: "title 3",
    },
   ];
  // const [images,setImages]=useState([])
  // useEffect(() => {
  //   axios
  //     .get("https://picsum.photos/v2/list?page=1&limit=30")
      
  //     .then((res) => {
       

  //       const updated = res.data.map(
  //         function (item) {
  //           return { ...item,thumbnail:item.url, description: item.author, original: item.download_url };
  //         }

          
  //       );
      
  //       setImages(updated);
  //     })
  //     .catch((error) => {
  //       console.log("Opps");
  //     });
  // }, []);

return (

    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <ReactImageGallery 
            items={images}
            infinite={false}
            showThumbnails={false}
            showBullets={false}
            showPlayButton={false}
            showNav={false}
            showFullscreenButton={false}
           
            
          />
          
        </div>
        {/* <div className='col-6'>
          <ReactImageGallery
            items={images}
            infinite={false}
            showThumbnails={false}
            showBullets={false}
            showPlayButton={false}
            showNav={false}
            showFullscreenButton={false}
          />
        </div> */}
      </div>
    </div>
  )
}
