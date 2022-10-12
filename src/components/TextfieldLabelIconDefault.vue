<template>
</template>

<script>
export default {
  name: "TextfieldLabelIconDefault",
  props: ["label", "inputType", "inputPlaceholder"],
};
</script>

<style>
.textfield-label-icon-default {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 7px;
  left: 87px;
  min-height: 64px;
  position: absolute;
  top: 427px;
  width: 316px;
}

.label-1 {
  letter-spacing: 0.3px;
  margin-top: -1px;
  min-height: 16px;
  width: 316px;
}

.overlap-group1-2 {
  align-items: flex-start;
  background-color: var(--coconut);
  border: 1px solid;
  border-color: var(--porcelain);
  border-radius: 8px;
  display: flex;
  gap: 8px;
  height: 42px;
  min-width: 316px;
  padding: 9px 15px;
}

.textfield-32 {
  background-color: transparent;
  border: 0;
  height: 20px;
  letter-spacing: 0.3px;
  line-height: 20px;
  opacity: 0.4;
  padding: 0;
  white-space: nowrap;
  width: 256px;
}

.textfield-32::placeholder {
  color: #4a4f6c99;
}

.icon-hide-active {
  height: 20px;
  margin-top: 1px;
  width: 20px;
}
</style>
