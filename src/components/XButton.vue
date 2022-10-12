<template>
  <div :class="[`button-1`, className || ``]">
    <div class="button">
      <div class="text-2 valign-text-middle publicsans-medium-white-15px">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "XButton",
  props: ["text", "className"],
};
</script>

<style>
.button-1 {
  align-items: center;
  background-color: var(--razzmatazz);
  border: 1px none;
  border-radius: 6px;
  box-shadow: 0px 2px 4px #a5a3ae4c;
  display: flex;
  height: 30px;
  justify-content: center;
  margin-top: 115px;
  width: 200px;
}

.button {
  align-items: center;
  border: 1px none;
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: -4px;
  margin-top: -4px;
  padding: 10px 20px;
  width: fit-content;
}

.text-2 {
  letter-spacing: 0.43px;
  margin-top: -1px;
  width: fit-content;
}

.button-1.button-2 {
  justify-content: unset;
  margin-bottom: 7.9px;
  margin-top: unset;
  width: 178px;
}
</style>
