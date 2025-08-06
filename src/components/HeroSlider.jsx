import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const images = ["/assets/shoe1.png", "/assets/shoe2.png", "/assets/shoe3.png"]; // add actual paths

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      {images.map((img, i) => (
        <img key={i} src={img} alt={`slide-${i}`} className="w-full" />
      ))}
    </Slider>
  );
};

export default HeroSlider;
