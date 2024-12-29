import React, { useState } from "react";
import styles from "./About.module.scss";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  Image,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import classnames from "classnames";

//! SLIDER IS APLACEHOLDER, SHOULD GET IMAGES FROM DB/BACKEND

const About = () => {

  return (
    <section className={styles["about-section"]}>
      <div className={styles["about-section__text-block"]}>
        <h3 className={styles["about-section__title"]}>About us</h3>
        <p className={styles["about-section__text"]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          aliquam porro consequatur sint eos quis quod ducimus ratione dolore
          laudantium dolores voluptatem at aut sit, esse, consequuntur modi quia
          aliquid itaque omnis, nam voluptates repellat tempore. Odio soluta id
          harum.
        </p>
        <button>Interested?</button>
      </div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={4}
        isPlaying={true}
        interval={2000}
        playDirection="forward"
        infinite={true}
        orientation={"vertical"}
        className={styles["about-section__slider-provider"]}
      >
        <DotGroup
          dotNumbers={true}
          className={styles["about-section__buttons"]}
        />
        <Slider className={styles["about-section__slider"]}>
          <Slide index={0} className={styles["about-section__slide"]}>
            <Image src="https://dummyimage.com/400x600/000/fff" alt="img" />
          </Slide>
          <Slide index={1} className={styles["about-section__slide"]}>
            {" "}
            <Image
              className={styles["about-section__slide-image"]}
              src="https://dummyimage.com/400x600/000/fff"
              alt="img"
            />
          </Slide>
          <Slide index={2} className={styles["about-section__slide"]}>
            {" "}
            <Image
              className={styles["about-section__slide-image"]}
              src="https://dummyimage.com/400x600/000/fff"
              alt="img"
            />
          </Slide>
          <Slide index={3} className={styles["about-section__slide"]}>
            {" "}
            <Image
              className={styles["about-section__slide-image"]}
              src="https://dummyimage.com/400x600/000/fff"
              alt="img"
            />
          </Slide>
        </Slider>

        <ButtonBack
          className={classnames(
            styles["about-section__nav-button"],
            styles["about-section__backwards-button"]
          )}
        >
          Back
        </ButtonBack>
        <ButtonNext
          className={classnames(
            styles["about-section__nav-button"],
            styles["about-section__forwards-button"]
          )}
        >
          Next
        </ButtonNext>
      </CarouselProvider>
    </section>
  );
};

export default About;
