import React from "react";
import { Navigation, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const index = () => {
  return (
    <div className="relative w-full">
      <div
        className="hero-default bg-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(179.69deg, rgba(0, 0, 0, 0) 49.49%, #161616 99.73%), url(img/bg.png)`,
        }}
      ></div>
      <div className="container">
        <div className="text-xl font-bold">Event name</div>
        <div className="font-normal text-smd">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat quam
          eget nulla lacus, volutpat integer lorem. Sociis suspendisse mi purus
          sit erat dictum dignissim{" "}
        </div>
        <div className="my-10">
          <div className="flex w-full flex-row items-center justify-between">
            <div className="flex flex-row items-center">
              <img
                src="img/icon2.png"
                alt="icon"
                className="w-4 h-4 object-cover mr-2"
              />
              <p>Lorem Ipsum</p>
            </div>
            <div className="flex flex-row items-center">
              <img
                src="img/icon3.png"
                alt="icon"
                className="w-4 h-4 object-cover mr-2"
              />
              <p>Lorem Ipsum</p>
            </div>
          </div>
          <div className="flex w-full flex-row items-center justify-between mt-5">
            <div className="flex flex-row items-center">
              <img
                src="img/icon4.png"
                alt="icon"
                className="w-4 h-4 object-cover mr-2"
              />
              <p>Lorem Ipsum</p>
            </div>
            <div className="flex flex-row items-center">
              <img
                src="img/icon5.png"
                alt="icon"
                className="w-4 h-4 object-cover mr-2"
              />
              <p>Lorem Ipsum</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-20 w-full">
          <div className="col-span-2 sm:col-span-1 ">
            <div id="map" className="bg-primary p-3 rounded-xl">
              <iframe
                width="100%"
                height="180px"
                allowFullScreen=""
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                style={{
                  border: 0,
                  borderRadius: "15px",
                  position: "relative",
                }}
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=2510%20Holgate%20St%20Tacoma,%20WA%2098402+(Blue%20Frog%20Internet,%20Inc.)&amp;t=p&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
              <div className="text-center pt-2">Cologne, Germany</div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 ">
            <div className="border-y-2 border-primary py-3 flex flex-row items-center justify-between ">
              <div className="flex flex-row items-center">
                <img
                  className="w-16 h-16 object-cover rounded-full mr-2"
                  src="img/profile.jpg"
                />
                <div>
                  <p>Akshay solanki</p>
                  <p>12 event</p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-xl mr-2 bg-secondary flex items-center justify-center">
                <img className="w-5 h-5" src="img/icon1.png" />
              </div>
            </div>
            <div className="py-5 flex flex-row items-center justify-between bottom-attached">
              <div>
                <p>Ticket starts at</p>
                <p className="text-smd font-bold">15,00 $</p>
              </div>
              <div className="py-2 px-10 bg-white text-black rounded-xl">
                Buy a Ticket
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 mb-20">
          <div className="mb-4">Event Images</div>
          <Swiper
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              "@1.50": {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView={5}
            navigation={true}
            modules={[Navigation, Autoplay, Pagination]}
            pagination={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {[1,2,4,5,6,6,6,7,7,7,7].map((val, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <img
                    className="object-cover rounded-xl "
                    src={`https://source.unsplash.com/collection/${idx}/200x200`}
                    style={{
                      height: "200px",
                      width: "200px",
                    }}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <style jsx>
        {`
          .hero-default {
            min-height: 480px;
          }

          @media only screen and (max-width: 575px) {
            .bottom-attached {
              position: fixed;
              bottom: 0;
              left: 0;
              width: 100vw;
              background: #161616;
              padding: 20px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default index;
