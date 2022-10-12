<template>
  <div :class="[`sidebar-list-2`, className || ``]">
    <img
      class="vector-3"
      src="https://anima-uploads.s3.amazonaws.com/projects/6346737d3c195ace20fe33e6/releases/6346744bfb6cd5506eea67db/img/vector-4@2x.svg"
      alt="Vector"
    />
    <div class="title-3 mulish-normal-white-16px">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "SidebarListFranchiseO",
  props: ["title", "className"],
};
</script>

<style>
.sidebar-list-2 {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  gap: 17px;
  height: 56px;
  justify-content: flex-end;
  margin-right: 2px;
  min-width: 255px;
  padding: 17px 31px;
}

.vector-3 {
  align-self: center;
  height: 14px;
  margin-bottom: 1.78px;
  width: 16px;
}

.title-3 {
  letter-spacing: 0.2px;
  min-height: 20px;
  width: 159px;
}

.sidebar-list-2.sidebar-list-bulk-o {
  justify-content: unset;
}

.sidebar-list-2.sidebar-list-bulk-o .vector-3,
.sidebar-list-2.sidebar-list-bulk-o-1 .vector-3 {
  height: 13px;
  margin-bottom: 0.78px;
  width: 17px;
}

.sidebar-list-2.sidebar-list-incoming-o {
  gap: 16px;
}

.sidebar-list-2.sidebar-list-incoming-o .vector-3,
.sidebar-list-2.sidebar-list-incoming-o-1 .vector-3 {
  height: 15px;
  margin-bottom: 0.89px;
  width: 17px;
}

.sidebar-list-2.sidebar-list .vector-3,
.sidebar-list-2.sidebar-list-dashboard-1 .vector-3,
.sidebar-list-2.sidebar-list-1 .vector-3 {
  height: 16px;
  margin-bottom: unset;
}

.sidebar-list-2.sidebar-list-dashboard-1 {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  gap: 17px;
  height: 56px;
  justify-content: flex-end;
  margin-top: 60px;
  min-width: 255px;
  padding: 17px 31px;
}

.sidebar-list-2.sidebar-list-bulk-o-1 {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  gap: 17px;
  height: 56px;
  margin-right: 2px;
  min-width: 255px;
  padding: 17px 31px;
}

.sidebar-list-2.sidebar-list-incoming-o-1 {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  gap: 16px;
  height: 56px;
  justify-content: flex-end;
  margin-right: 2px;
  min-width: 255px;
  padding: 17px 31px;
}
</style>
