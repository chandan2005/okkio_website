import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="w-full container mx-auto py-8">
      <Slider {...settings}>
        {products && products.map((product) => (
          <div key={product.id}>
            <img src={product.imageUrl} alt={product.name} className="w-full h-96 object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;