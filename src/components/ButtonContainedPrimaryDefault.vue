<template>
  <a href="javascript:SubmitForm('form2')">
    <div class="button-contained-primary-default">
      <div class="btn-label">{{ btnLabel }}</div>
    </div></a
  >
</template>

<script>
export default {
  name: "ButtonContainedPrimaryDefault",
  props: ["btnLabel"],
};
</script>

<style>
.button-contained-primary-default {
  align-items: center;
  background-color: var(--razzmatazz-2);
  border: 1px none;
  border-radius: 8px;
  box-shadow: 0px 4px 12px #3751ff3d;
  cursor: pointer;
  display: flex;
  height: 48px;
  left: 87px;
  min-width: 316px;
  padding: 0 24px;
  position: absolute;
  top: 515px;
}

.btn-label {
  color: var(--white);
  font-family: var(--font-family-mulish);
  font-size: var(--font-size-xs);
  font-weight: 600;
  letter-spacing: 0.2px;
  line-height: 20px;
  min-height: 20px;
  text-align: center;
  white-space: nowrap;
  width: 268px;
}
</style>
