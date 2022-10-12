<template>
  <div :class="[`form-3`, className || ``]">
    <div class="form-2">
      <div class="text-1 valign-text-middle publicsans-normal-white-13px-2">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "XForm",
  props: ["text", "className"],
};
</script>

<style>
.form-3 {
  align-items: center;
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--razzmatazz);
  border-radius: 4px;
  box-shadow: 0px 2px 4px #a5a3ae4c;
  display: flex;
  margin-top: 38px;
  width: 200px;
}

.form-2 {
  align-items: center;
  border: 1px none;
  border-radius: 4px;
  display: flex;
  flex: 1;
  gap: 8px;
  overflow: hidden;
  padding: 7px 14px;
}

.text-1 {
  flex: 1;
  letter-spacing: 0;
  line-height: 21px;
  margin-top: -1px;
  white-space: nowrap;
}

.form-3.form-4 {
  left: 0;
  margin-top: unset;
  position: absolute;
  top: 0;
}
</style>
