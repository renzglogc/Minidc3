<template>
  <div :class="[`form-select-3`, className || ``]">
    <div class="form">
      <div class="form-1">
        <div class="text valign-text-middle publicsans-normal-white-13px">{{ text }}</div>
        <img
          class="chevron-down"
          src="https://anima-uploads.s3.amazonaws.com/projects/6346737d3c195ace20fe33e6/releases/6346744bfb6cd5506eea67db/img/chevron-down@2x.svg"
          alt="chevron-down"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormSelect",
  props: ["text", "className"],
};
</script>

<style>
.form-select-3 {
  align-items: flex-start;
  border: 1px none;
  border-radius: 4px;
  box-shadow: 0px 2px 4px #a5a3ae4c;
  display: flex;
  width: 200px;
}

.form {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--razzmatazz);
  border-radius: 4px;
  display: flex;
  flex: 1;
  overflow: hidden;
}

.form-1 {
  align-items: center;
  border: 1px none;
  border-radius: 2px;
  display: flex;
  flex: 1;
  gap: 8px;
  overflow: hidden;
  padding: 7px 10px;
}

.text {
  flex: 1;
  letter-spacing: 0;
  line-height: 21px;
  margin-top: -1px;
  white-space: nowrap;
}

.chevron-down {
  height: 16px;
  min-width: 16px;
}

.form-select-3.form-select-1 {
  height: 35px;
  margin-top: 38px;
}

.form-select-3.form-select-2 {
  align-items: flex-start;
  border: 1px none;
  border-radius: 4px;
  box-shadow: 0px 2px 4px #a5a3ae4c;
  display: flex;
  margin-top: 38px;
  width: 200px;
}
</style>
