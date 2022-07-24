import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";

import {
  ResourceCard,
  ResourcesContainer,
} from "./styles/AdditionalResources.styled";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {
  GridColumn,
  GridContainer,
  GridRow,
} from "../Components/styles/Grid.styled";

const AdditionalResourcesMobile = (props) => {
  let resources = props.courseInfo[props.selectedUnit].additionalResources;

  const mappedResources = resources.map((resource, i) => {
    var backgroundColor;
    var borderColor;
    var textColor;
    if (resource.subtopic == 1) {
      borderColor = "rgba(255, 195, 0, 0.2)";
      backgroundColor = "rgba(255, 195, 0, 0.5)";
      textColor = "rgba(255, 195, 0, 1)";
    } else if (resource.subtopic == 2) {
      borderColor = "rgba(3, 255, 6, 0.2)";
      backgroundColor = "rgba(3, 255, 6, 0.5)";
      textColor = "rgba(3, 255, 6, 1)";
    } else if (resource.subtopic == 3) {
      borderColor = "rgba(255, 3, 243, 0.2)";
      backgroundColor = "rgba(255, 3, 243, 0.5)";
      textColor = "rgba(255, 3, 243, 1)";
    } else if (resource.subtopic == 4) {
      borderColor = "rgba(3, 42, 255, 0.2)";
      backgroundColor = "rgba(3, 42, 255, 0.5)";
      textColor = "rgba(3, 42, 255, 1)";
    } else if (resource.subtopic == 0) {
      borderColor = "rgba(255, 3, 3, 0.2)";
      backgroundColor = "rgba(255, 3, 3, 0.5)";
      textColor = "rgba(255, 3, 3, 1)";
    } else {
      borderColor = "#121212";
      backgroundColor = "rgba(18, 18, 18, 1)";
    }
    return (
      <GridColumn size="12">
        <SwiperSlide>
          <ResourceCard
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            textColor={textColor}
          >
            <div>
              <a href={resource.link}>
                <h1>{resource.name}</h1>
              </a>
              <h3>{resource.type}</h3>
              <p>{resource.summary}</p>
            </div>
          </ResourceCard>
        </SwiperSlide>
      </GridColumn>
    );
  });
  return (
    <GridContainer width="90%">
      <GridRow>
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {mappedResources}
        </Swiper>
      </GridRow>
    </GridContainer>
  );
};

export default AdditionalResourcesMobile;
