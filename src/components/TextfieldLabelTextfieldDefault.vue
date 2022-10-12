<template>
</template>

<script>
export default {
  name: "TextfieldLabelTextfieldDefault",
  props: ["label", "inputType", "inputPlaceholder"],
};
</script>

<style>
.textfield-label-textfield-default {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 7px;
  left: 87px;
  min-height: 64px;
  position: absolute;
  top: 339px;
  width: 316px;
}

.label {
  letter-spacing: 0.3px;
  margin-top: -1px;
  min-height: 16px;
  width: 316px;
}

.overlap-group-5 {
  align-items: flex-start;
  background-color: var(--coconut);
  border: 1px solid;
  border-color: var(--porcelain);
  border-radius: 8px;
  display: flex;
  height: 42px;
  justify-content: flex-end;
  min-width: 316px;
  padding: 9px;
}

.textfield-31 {
  background-color: transparent;
  border: 0;
  height: 20px;
  letter-spacing: 0.3px;
  line-height: 20px;
  opacity: 0.4;
  padding: 0;
  white-space: nowrap;
  width: 292px;
}

.textfield-31::placeholder {
  color: #4a4f6c99;
}
</style>
