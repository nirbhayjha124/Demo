import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { galleryImage } from './data/gallery';
import ProductCard from './cards/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';


const dummyProducts = [
  {
    id: 1,
    title: 'Budget-Friendly Steal',
    image: 'https://d3pzq99hz695o4.cloudfront.net/temporary/image/20250702064435-129777-190x260.png',
    storeLogo: '/logos/croma.png',
    cashback: 'Flat 2.1%',
    discountedPrice: '19579',
    originalPrice: '21999',
  },
  {
    id: 2,
    title: 'Gear Up For School',
    image: '/images/backpack.png',
    storeLogo: '/logos/amazon.png',
    cashback: 'Upto 4.5%',
    discountedPrice: '601',
    originalPrice: '2100',
  },
 {
    id: 3,
    title: "Power realme G At 12% Off",
    image: "/images/realme.png",
    storeLogo: "/logos/realme.png",
    cashback: "Upto 1.2%",
    discountedPrice: "34579",
    originalPrice: "39999",
  },
  {
    id: 4,
    title: "Amp Up Your Savings",
    image: "/images/boat.png",
    storeLogo: "/logos/boat.png",
    cashback: "Flat 5.2%",
    discountedPrice: "852",
    originalPrice: "4990",
  },
  {
    id: 5,
    title: "Upgrade Your Workspace",
    image: "/images/laptop-setup.png",
    storeLogo: "/logos/dailyobjects.png",
    cashback: "Flat ₹157",
    discountedPrice: "1842",
    originalPrice: "2999",
  },
  {
    id: 6,
    title: "Wireless Bluetooth Speaker",
    image: "/images/speaker.png",
    storeLogo: "/logos/flipkart.png",
    cashback: "Upto 3%",
    discountedPrice: "1599",
    originalPrice: "2499",
  },
  {
    id: 7,
    title: "Smart Watch Pro 2",
    image: "/images/smartwatch.png",
    storeLogo: "/logos/noise.png",
    cashback: "Flat 10%",
    discountedPrice: "2799",
    originalPrice: "3999",
  },
  {
    id: 8,
    title: "Dell 24-inch Monitor",
    image: "/images/monitor.png",
    storeLogo: "/logos/dell.png",
    cashback: "Flat 2.5%",
    discountedPrice: "10599",
    originalPrice: "12999",
  },
  {
    id: 9,
    title: "TWS Earbuds 5.0",
    image: "/images/earbuds.png",
    storeLogo: "/logos/boat.png",
    cashback: "Upto 6%",
    discountedPrice: "1049",
    originalPrice: "1999",
  },
  {
    id: 10,
    title: "Canon DSLR Camera",
    image: "/images/camera.png",
    storeLogo: "/logos/croma.png",
    cashback: "Flat 8%",
    discountedPrice: "35499",
    originalPrice: "40999",
  },
  {
    id: 11,
    title: "Portable Power Bank 20000mAh",
    image: "/images/powerbank.png",
    storeLogo: "/logos/amazon.png",
    cashback: "Flat 3%",
    discountedPrice: "1249",
    originalPrice: "1899",
  },
  {
    id: 12,
    title: "Fitness Tracker Band",
    image: "/images/fitness.png",
    storeLogo: "/logos/mi.png",
    cashback: "Upto 2.5%",
    discountedPrice: "1699",
    originalPrice: "2499",
  },
  {
    id: 13,
    title: "Home Office Chair",
    image: "/images/chair.png",
    storeLogo: "/logos/ikea.png",
    cashback: "Flat ₹200",
    discountedPrice: "4299",
    originalPrice: "4999",
  },
  {
    id: 14,
    title: "Smart LED Bulb Pack",
    image: "/images/bulb.png",
    storeLogo: "/logos/philips.png",
    cashback: "Flat 1.5%",
    discountedPrice: "599",
    originalPrice: "799",
  },
  {
    id: 15,
    title: "Gaming Mouse RGB",
    image: "/images/mouse.png",
    storeLogo: "/logos/logitech.png",
    cashback: "Flat ₹100",
    discountedPrice: "899",
    originalPrice: "1499",
  },
  {
    id: 16,
    title: "Travel Luggage Set",
    image: "/images/luggage.png",
    storeLogo: "/logos/amazon.png",
    cashback: "Upto 4%",
    discountedPrice: "3499",
    originalPrice: "4299",
  },
  {
    id: 17,
    title: "Study Table Wood Finish",
    image: "/images/studytable.png",
    storeLogo: "/logos/urbanladder.png",
    cashback: "Flat 7%",
    discountedPrice: "6799",
    originalPrice: "7999",
  },
  {
    id: 18,
    title: "HD Web Camera",
    image: "/images/webcam.png",
    storeLogo: "/logos/logitech.png",
    cashback: "Flat 5%",
    discountedPrice: "1599",
    originalPrice: "2299",
  },
  {
    id: 19,
    title: "Noise Cancelling Headphones",
    image: "/images/headphones.png",
    storeLogo: "/logos/sony.png",
    cashback: "Upto 10%",
    discountedPrice: "7999",
    originalPrice: "9999",
  },
  {
    id: 20,
    title: "Gaming Keyboard RGB",
    image: "/images/keyboard.png",
    storeLogo: "/logos/redragon.png",
    cashback: "Flat ₹250",
    discountedPrice: "2549",
    originalPrice: "2999",
  },
];


function FlashDeals() {
   return (
    <div className="py-4 px-3 w-[90vw] mx-auto h-auto mt-10 rounded-3xl bg-gradient-to-br from-purple-600 via-blue-600 to-pink-400">
      <Container fluid>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold text-white">Back to Routine – Flash Deals!</h5>
          <Button variant="warning" className="fw-semibold rounded-pill">
            See More ➜
          </Button>
        </div>

        {/* Swiper Product Cards */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          className="py-2"
        >
          {dummyProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );

}

export default FlashDeals;
