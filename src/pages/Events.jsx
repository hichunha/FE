import React from "react";
import Banner from "../components/events/banner/banner";
import Footer from "../components/global/footer/Footer";
import Header from "../components/global/header/Header";
import Breadcrumb from "../components/global/breadcrumb/Breadcrumb";
import "../styles/event/event.css";
const Events = () => {
  const eventsData = [
    {
      id: 1,
      image: "/images/events/image1.png",
      name: "Strengthening Mental Toughness",
      time: "08 DEC: 5 AM - 7:00 AM",
      address: "101 E 129th St, East Chicago, IN 46312, US",
    },
    {
      id: 2,
      image: "/images/events/image2.png",
      name: "Navigating Life’s Challenges",
      time: "08 DEC: 5Am - 7:00Am",
      address: "101 E 129th St, East Chicago, IN 46312, US",
    },
    {
      id: 3,
      image: "/images/events/image3.png",
      name: "Mastering Emotional Well-Being",
      time: "08 DEC: 5Am - 7:00Am",
      address: "101 E 129th St, East Chicago, IN 46312, US",
    },
    {
      id: 4,
      image: "/images/events/image4.png",
      name: "Thriving Through Change",
      time: "08 DEC: 5Am - 7:00Am",
      address: "101 E 129th St, East Chicago, IN 46312, US",
    },
    {
      id: 5,
      image: "/images/events/image5.png",
      name: "Cultivating a Resilient Mindset",
      time: "12 DEC: 6 PM - 8 PM",
      address: "505 E 133rd St, East Chicago, IN 46312, US",
    },
    {
      id: 6,
      image: "/images/events/image6.png",
      name: "Overcoming Stress and Anxiety",
      time: "13 DEC: 9 AM - 11 AM",
      address: "606 N 134th St, East Chicago, IN 46312, US",
    },
    {
      id: 7,
      image: "/images/events/image1.png",
      name: "Leadership Development Program",
      time: "14 DEC: 2 PM - 4 PM",
      address: "707 S 135th St, East Chicago, IN 46312, US",
    },
    {
      id: 8,
      image: "/images/events/image2.png",
      name: "Building Effective Teams",
      time: "15 DEC: 11 AM - 1 PM",
      address: "808 W 136th St, East Chicago, IN 46312, US",
    },
    {
      id: 9,
      image: "/images/events/image3.png",
      name: "Time Management Techniques",
      time: "16 DEC: 3 PM - 5 PM",
      address: "909 E 137th St, East Chicago, IN 46312, US",
    },
    {
      id: 10,
      image: "/images/events/image4.png",
      name: "Public Speaking Mastery",
      time: "17 DEC: 12 PM - 2 PM",
      address: "1000 N 138th St, East Chicago, IN 46312, US",
    },
    {
      id: 11,
      image: "/images/events/image5.png",
      name: "Stress Management Techniques",
      time: "18 DEC: 8 AM - 10 AM",
      address: "1111 S 139th St, East Chicago, IN 46312, US",
    },
    // {
    //   id: 12,
    //   image: "/images/events/image6.png",
    //   name: "Overcoming Stress and Anxiety",
    //   time: "13 DEC: 9 AM - 11 AM",
    //   address: "606 N 134th St, East Chicago, IN 46312, US",
    // },
  ];

  return (
    <div>
      <Header />
      <Banner />
      <div className="container_content">
        {eventsData.map((event) => (
          <div className="item_events" key={event.id}>
            <div className="container_img_item">
              <img src={event.image} className="img_item_events" />
            </div>
            <div className="item_content">
              <p className="text_title_item">{event.name}</p>
              <div className="item_information">
                <div className="information">
                  <img src="/images/events/Alarm.svg" className="icon" />
                  <p className="text_information">{event.time}</p>
                </div>
                <div className="information">
                  <img src="/images/events/MapPin.svg" className="icon" />
                  <p className="text_information">{event.address}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container_btn_load_more">
        <div className="btn_load_more">
          <p className="text_load_more">Load more</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
