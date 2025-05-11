import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewsCaraousal.css"; // Custom styling

const newsData = [
  {
    title: "🌍 Climate Change Alert!",
    description: `Scientists have recorded an unprecedented rise in temperatures across the Antarctic region, leading to accelerated glacier melting. The Thwaites Glacier, often referred to as the "Doomsday Glacier" is losing ice at a much faster rate than previously estimated, contributing significantly to rising global sea levels. Experts warn that if this trend continues, coastal cities around the world could face severe flooding in the coming decades. Climate scientists urge immediate action to reduce carbon emissions and implement sustainable environmental policies to slow down the devastating effects of climate change.`,
    image: "https://wallpapercave.com/wp/wp6225034.jpg",
  },
  {
    title: "🌪️ Extreme Weather Events",
    description: "A powerful EF-4 tornado tore through several towns in Texas, leaving a trail of destruction in its wake. Winds exceeding 170 mph (270 km/h) uprooted trees, flattened homes, and caused widespread power outages. Local authorities have reported multiple injuries and fatalities, and emergency rescue teams are working around the clock to assist those affected. Meteorologists attribute the increasing frequency of such extreme weather events to climate change, which has intensified storm patterns in recent years. The disaster highlights the urgent need for improved weather prediction systems and disaster preparedness plans.",
    image: "https://imgs.search.brave.com/n_KcVfOrdywikOpy5zLJUsX9ZXp5-_u5O4zp_NkjSQI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTYy/NTAwNzEyL3ZpZGVv/LzRrLXRsLWNsb3Vk/eS1za3ktd2l0aC1z/dW4tcmF5cy5qcGc_/Yj0xJnM9NjQweDY0/MCZrPTIwJmM9NlBT/TFRWTkRpZ3FBejhs/Z0tOb0JzaTByNlgz/WXVTc1MyczJfLTgt/YkVJbz0",
  },
  {
    title: "🚀 NASA's New Discovery",
    description: "NASA's latest satellite observations have captured a breathtaking aurora borealis (Northern Lights) dancing over the Arctic Circle. Scientists believe this rare occurrence was triggered by a powerful geomagnetic storm caused by solar flares from the Sun. These stunning lights, often seen in shades of green, blue, and purple, result from charged particles colliding with Earth's atmosphere. The phenomenon not only provides a mesmerizing spectacle but also helps researchers better understand space weather and its effects on Earth's magnetic field.",
    image: "https://imgs.search.brave.com/uPfcVUTfkx26---0ujIxssc-1XSMhsBtqHfP8vIzcXo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L2Jh/UjI2Z1F3SmV1YjRx/c1VwMmQ2ZEgtMTIw/MC04MC5qcGc",
  },
];

const NewsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="news-carousel">
      <h1> Today News </h1>
      <Slider {...settings}>
      {newsData.map((news, index) => (
      <div key={index} className="news-item">
        <h3 className="news-title">{news.title}</h3> {/* Title above the image */}
        <img src={news.image} alt={news.title} />
        <p className="news-description">{news.description}</p> {/* Description below the image */}
      </div>
      ))}
      </Slider>
    </div>
  );
};

export default NewsCarousel;
