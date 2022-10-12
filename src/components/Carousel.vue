<template>
  <div class="carousel">
    <div class="frame-3">
      <img
        class="chevron"
        src="https://anima-uploads.s3.amazonaws.com/projects/6346737d3c195ace20fe33e6/releases/6346744bfb6cd5506eea67db/img/chevron-left@2x.svg"
        alt="chevron-left"
      />
    </div>
    <div class="carousel-slide-list">
      <div class="list">
        <div class="carousel-slide-items"></div>
        <div class="carousel-slide-items">
          <h1 class="title-2 sfprodisplay-light-tuna-72px">{{ title }}</h1>
        </div>
        <div class="carousel-slide-items">
          <div class="third-slide sfprodisplay-light-tuna-72px">{{ thirdSlide }}</div>
        </div>
      </div>
    </div>
    <div class="frame-4">
      <img
        class="chevron"
        src="https://anima-uploads.s3.amazonaws.com/projects/6346737d3c195ace20fe33e6/releases/6346744bfb6cd5506eea67db/img/chevron-right@2x.svg"
        alt="chevron-right"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: ["title", "thirdSlide"],
};
</script>

<style>
.carousel {
  align-items: center;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  height: 587px;
  justify-content: center;
  left: 254px;
  position: absolute;
  top: 163px;
  width: 1186px;
}

.frame-3 {
  align-items: center;
  align-self: stretch;
  border: 1px none;
  display: flex;
  justify-content: center;
  padding: 0px 0px 0px 20px;
  width: fit-content;
}

.chevron {
  height: 30px;
  min-width: 30px;
}

.carousel-slide-list {
  align-self: stretch;
  border: 1px none;
  flex: 1;
  height: 587px;
  min-width: 1086px;
  overflow: hidden;
}

.list {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  height: 587px;
  width: 3258px;
}

.carousel-slide-items {
  align-items: center;
  align-self: stretch;
  border: 1px none;
  display: flex;
  flex: 1;
  justify-content: center;
}

.title-2,
.third-slide {
  letter-spacing: 0;
  line-height: 86.4px;
  white-space: nowrap;
  width: fit-content;
}

.frame-4 {
  align-items: center;
  align-self: stretch;
  border: 1px none;
  display: flex;
  justify-content: center;
  padding: 0px 20px 0px 0px;
  width: fit-content;
}
</style>
