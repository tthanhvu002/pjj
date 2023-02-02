import "./Page2.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Page2() {
  return (
    <div className="page-2">
      <header>Header</header>
      <section>
        <h2 className="title">lorem</h2>
        <div className="input-date">
          <input type="text" placeholder="yyyy/mm/dd hh/mm" />
          <input type="text" placeholder="yyyy/mm/dd hh/mm" />
          <input type="text" placeholder="yyyy/mm/dd hh/mm" />
          <input type="text" placeholder="yyyy/mm/dd hh/mm" />
        </div>
      </section>
      <section>
        <h2 className="title">lorem</h2>
        <Swiper
          spaceBetween={10}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={3}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            {" "}
            <div className="item">lorem</div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="item">lorem</div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="item">lorem</div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="item">lorem</div>{" "}
          </SwiperSlide>
        </Swiper>
      </section>
      <a href="#" className="link">
        lorem
      </a>
    </div>
  );
}

export default Page2;
