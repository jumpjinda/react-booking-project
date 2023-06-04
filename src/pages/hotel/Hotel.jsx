import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);

  const handleOpenSlider = (index) => {
    setSlideNumber(index);
    setOpenSlider(true);
  };

  const handleImg = (direction) => {
    let newSlideIndex;

    if (direction === "left") {
      newSlideIndex = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideIndex = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideIndex);
  };
  const hotelImages = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/373670141.jpg?k=54cbd7da98aeb0b56b8b3d93ab2e9ed8c9a43195700a2dc28e959940f34fb551&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/421323032.jpg?k=1f5bea65d0b5763abede8226dac704f97882182b1eda7d9e7fce511ab62dd5a8&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/373670143.jpg?k=8228eaeb97a1ba3d3fdd6ed301a3f1ada52c50d1602fd59f226129822c70bd95&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/373670066.jpg?k=7c650800b5822a934bccdff3b95a00e7eff2e5185b7f90674dced1ff51c9b676&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/421323024.jpg?k=8b7852516f2bf4bc0ae0359d212108aee23d490ab1ffb5cdeb91a02b61592a55&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/421323033.jpg?k=4617234cbb05dc08cf72c605d4c6cea2a37b9f503c409debcca80896a4a73ea8&o=&hp=1",
    },
  ];

  return (
    <div>
      {openSlider && (
        <div className="slider">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="closeBtn"
            onClick={() => setOpenSlider(false)}
          />
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="arrow"
            onClick={() => handleImg("left")}
          />
          <div className="sliderWrapper">
            <img src={hotelImages[slideNumber].src} className="sliderImg" />
          </div>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="arrow"
            onClick={() => handleImg("right")}
          />
        </div>
      )}
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <div className="hotelHeaderWrapper">
            <div className="hotelHeader">
              <h1 className="hotelTitle">Grand Hotel</h1>
              <div className="hotelAddres">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>123 Jatujak Bangkok, Thailand</span>
              </div>
              <div className="hotelDistance">
                Excellent location - 100m from BTS
              </div>
              <div className="hotelPriceHighlight">
                Book a stay over $99 at this property and get a free aiport taxi
              </div>
            </div>
            <button className="reserveBtn">Reserve or Book Now!</button>
          </div>
          <div className="hotelImages">
            {hotelImages.map((image, index) => (
              <div className="hotelImgWrapper">
                <img src={image.src} onClick={() => handleOpenSlider(index)} />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay in the heart of Bangkok</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                consequuntur sit dolor laboriosam esse aliquid cumque,
                repudiandae totam voluptates provident soluta natus consequatur
                aperiam quibusdam reiciendis asperiores vitae numquam fugiat.
                Autem sunt magni provident beatae dolore fugiat et quod natus
                quibusdam libero eos explicabo minima voluptate, eveniet ipsam
                consequuntur voluptas aspernatur aut nam similique sint?
                Similique quas qui officiis dolorum!
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h3 className="priceTitle">Perfect for a 3-night stay!</h3>
              <div className="priceDetail">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, nobis!
              </div>
              <div className="price">
                <h1>$99</h1>
                <span>(3 nights)</span>
              </div>
              <button className="reserveBtn">Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
};

export default Hotel;
