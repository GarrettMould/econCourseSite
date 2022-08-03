import { Link } from "react-router-dom";

import { LockKey } from "phosphor-react";

import CourseOverviewHeadline from "../Elements/CourseOverviewHeadline";

import {
  UnitCard,
  UnitNumber,
  UnitName,
  UnitInfoContainer,
  IconContainer
} from "./styles/AllUnitsPage.styled";

import { UnitButton } from "../Elements/styles/Buttons.styled";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const AllUnitsPageMobile = (props) => {
  const mappedUnits = props.courseInfo.map((unit, i) => {
    return (
      <SwiperSlide>
        <Link style={{ textDecoration: "none" }} className={unit.unitUnlocked ? "enabled-link" : "disabled-link"} to="UnitOverviewPage">
          <UnitButton id={unit.unitNumber} onClick={props.changeUnitMainPage}>
            <UnitCard
              backgroundColor={unit.unitBackgroundColor}
              borderColor={unit.unitBorderColor}
            >
              {unit.unitUnlocked  ? <></> : <IconContainer><LockKey size={60} color="#ffffff"/></IconContainer>}
              <UnitInfoContainer>
                <UnitNumber>{unit.unitNumber}</UnitNumber>
                <UnitName>{unit.unitName}</UnitName>
              </UnitInfoContainer>
            </UnitCard>
          </UnitButton>
        </Link>
      </SwiperSlide>
    );
  });
  return (
    <>
      <CourseOverviewHeadline
        isMobile={props.isMobile}
      ></CourseOverviewHeadline>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {mappedUnits}
      </Swiper>
    </>
  );
};

export default AllUnitsPageMobile;