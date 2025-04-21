import { useSelector } from "../../../src/services/store";
import EventCardUI from "../ui/EventCardUI/EventCardUI";
import { getEventsList } from "../../../src/services/slices/periodsSlice";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import styles from './EventCardList.module.scss';
import 'swiper/css';
import { useRef } from "react";


const EventCardList: React.FC = () => {
    const eventsList = useSelector(getEventsList);
    // return (
    //     <div className={styles.container}>
    //         <Swiper
    //             slidesPerView={3}
    //         >
    //             {eventsList.map((event, index) => (
    //                 <SwiperSlide key={index}>
    //                     <EventCardUI year={event.year} description={event.description} />
    //                 </SwiperSlide>)
    //             )}
    //         </Swiper>
    //     </div>
    // );

  const swiperRef = useRef<SwiperType>();

  return (
    <div className={styles.container}>
      <button 
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg"
        aria-label="Previous slide"
      >
        ←
      </button>
      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper: SwiperType) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={3}
        spaceBetween={30}
      >
            {eventsList.map((event, index) => (
            <SwiperSlide key={index}>
                <EventCardUI year={event.year} description={event.description} />
            </SwiperSlide>)
        )}
      </Swiper>
      <button 
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg"
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  )
};
export default EventCardList;