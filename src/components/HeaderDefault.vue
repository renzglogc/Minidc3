<template>
  <div class="header-default">
    <img
      class="vector-1"
      src="https://anima-uploads.s3.amazonaws.com/projects/6346737d3c195ace20fe33e6/releases/6346744bfb6cd5506eea67db/img/vector@2x.svg"
      alt="Vector"
    />
    <img
      class="divider-line-vertical"
      src="https://anima-uploads.s3.amazonaws.com/projects/6346737d3c195ace20fe33e6/releases/6346744bfb6cd5506eea67db/img/divider---line---vertical@2x.svg"
      alt="divider / line / vertical"
    />
    <div class="overlap-group2">
      <div class="name mulish-semi-bold-steel-gray-14px">John Doe</div>
      <div class="icon-notifications-new">
        <div class="overlap-group1">
          <img
            class="icon-notifications"
            src="https://anima-uploads.s3.amazonaws.com/projects/6346737d3c195ace20fe33e6/releases/6346744bfb6cd5506eea67db/img/vector-1@2x.svg"
            alt="icon-notifications"
          />
          <div class="new"></div>
        </div>
      </div>
    </div>
    <router-link to="login">
    <div class="overlap-group-1">
      <img
        class="avatar-man-_header"
        src="https://anima-uploads.s3.amazonaws.com/projects/6346737d3c195ace20fe33e6/releases/6346744bfb6cd5506eea67db/img/avatar---man----header@2x.svg"
        alt="avatar / man / _header"
      />
      <div class="profile-circle"></div>
    </div>
  </router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderDefault",
};
</script>

<style>
.header-default,
.header-default-1 {
  align-items: center;
  border: 1px none;
  display: flex;
  height: 44px;
  justify-content: flex-end;
  left: 245px;
  min-width: 1122px;
  position: absolute;
  top: 30px;
}

.vector-1,
.vector-2 {
  height: 17px;
  margin-top: 1px;
  width: 15px;
}

.divider-line-vertical,
.divider-line-vertical-1 {
  align-self: flex-end;
  height: 32px;
  margin-bottom: 2px;
  margin-left: 22px;
  width: 1px;
}

.overlap-group2,
.overlap-group2-1 {
  height: 18px;
  margin-left: 12px;
  margin-top: 2px;
  position: relative;
  width: 109px;
}

.name,
.name-1 {
  left: 0;
  letter-spacing: 0.2px;
  line-height: 20px;
  position: absolute;
  text-align: right;
  top: 0;
  white-space: nowrap;
  width: 109px;
}

.icon-notifications-new,
.icon-notifications-new-1 {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  height: 16px;
  justify-content: flex-end;
  left: 6px;
  min-width: 16px;
  position: absolute;
  top: 1px;
}

.overlap-group1,
.overlap-group1-1 {
  height: 18px;
  margin-top: -2.5px;
  position: relative;
  width: 16px;
}

.icon-notifications,
.icon-notifications-1 {
  height: 16px;
  left: 0;
  position: absolute;
  top: 2px;
  width: 14px;
}

.new,
.new-1 {
  background-color: var(--rusty-red);
  border: 1.5px solid;
  border-color: var(--white-lilac);
  border-radius: 4.5px;
  height: 9px;
  left: 8px;
  position: absolute;
  top: 0;
  width: 9px;
}

.overlap-group-1,
.overlap-group-2 {
  align-self: flex-start;
  border-radius: 23.5px;
  height: 47px;
  margin-left: 12px;
  margin-top: -1.5px;
  position: relative;
  width: 47px;
}

.avatar-man-_header,
.avatar-man-_header-1 {
  height: 40px;
  left: 4px;
  position: absolute;
  top: 4px;
  width: 40px;
}

.profile-circle,
.profile-circle-1 {
  border: 1.5px solid;
  border-color: var(--snuff);
  border-radius: 23.5px;
  height: 47px;
  left: 0;
  position: absolute;
  top: 0;
  width: 47px;
}
</style>
