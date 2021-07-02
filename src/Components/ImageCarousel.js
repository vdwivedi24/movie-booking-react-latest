import React, { useState, useEffect } from 'react';
import { Carousel } from "react-bootstrap";


function ImageCarousel() {
    const [products, setProducts] = useState([]);
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
  useEffect(() => {
    fetch("http://localhost:3002/carousel", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <Carousel
      activeIndex={index} onSelect={handleSelect}
    >
      {products?.map((item) => (
        <Carousel.Item interval={5000}
        key={item.info.rank}
        style={{ backgroundColor: '#FF9933' }}
         >
          <img
            className="photo"
            src={item.info.image_url}
            alt={item.title}
            style={{ width: '30rem',  marginRight:'.5rem', padding:'.5rem', paddingTop:'1rem', paddingBottom:'5rem'}}
          />
          <Carousel.Caption
          style={{ paddingBottom:'.2rem',paddingTop:'.2rem'}}>
           <p>{item.info.plot}</p>
        </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageCarousel;
