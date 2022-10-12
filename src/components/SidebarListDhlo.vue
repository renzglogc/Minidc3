<template>
  <div class="sidebar-list-3">
    <img
      class="vector-7"
      src="https://anima-uploads.s3.amazonaws.com/projects/6346737d3c195ace20fe33e6/releases/6346744bfb6cd5506eea67db/img/vector-8@2x.svg"
      alt="Vector"
    />
    <div class="title-7 mulish-normal-white-16px">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "SidebarListDhlo",
  props: ["title"],
};
</script>

<style>
.sidebar-list-3,
.sidebar-list-4 {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  gap: 18px;
  height: 56px;
  margin-right: 2px;
  min-width: 255px;
  padding: 13px 31px;
}

.vector-7,
.vector-8 {
  height: 21px;
  width: 16px;
}

.title-7,
.title-8 {
  align-self: center;
  letter-spacing: 0.2px;
  margin-bottom: 2px;
  min-height: 20px;
  width: 159px;
}
</style>
