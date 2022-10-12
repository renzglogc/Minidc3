<template>
  <div class="container-center-horizontal">
    <form class="ordertracker screen" name="form3" action="form3" method="post">
      <div class="overlap-group-container">
        <div class="footer-container-1">
          <x-footer />
          <x-footer />
        </div>
        <div class="r-de-container">
          <header-default />
          <div class="sidebar-desktop-1">
            <div class="flex-row-5">
              <img class="golog-logo-white-1-2" :src="gologLogoWhite1" alt="golog logo white 1" />
              <div class="minidc-admin-1 mulish-bold-white-19px">{{ minidcAdmin }}</div>
            </div>
            <sidebar-list-franchise-o
              :title="sidebarListFranchiseO1Props.title"
              :className="sidebarListFranchiseO1Props.className"
            />
            <div class="sidebar-list-my-task-1">
              <div class="overlap-group-6">
                <a href="javascript:SubmitForm('form3')">
                  <div class="title-13 mulish-normal-white-16px">{{ title }}</div> </a
                ><img
                  class="vector-13"
                  src="https://anima-uploads.s3.amazonaws.com/projects/6346737d3c195ace20fe33e6/releases/6346744bfb6cd5506eea67db/img/vector-14@2x.svg"
                  alt="Vector"
                />
                <img
                  class="sheet"
                  src="https://anima-uploads.s3.amazonaws.com/projects/6346737d3c195ace20fe33e6/releases/6346744bfb6cd5506eea67db/img/sheet-1@2x.svg"
                  alt="sheet"
                />
                <div class="selected-1"></div>
              </div>
            </div>
            <sidebar-list-franchise-o :title="sidebarListFranchiseO2Props.title" />
            <sidebar-list-franchise-o
              :title="sidebarListFranchiseO3Props.title"
              :className="sidebarListFranchiseO3Props.className"
            />
            <sidebar-list-franchise-o
              :title="sidebarListFranchiseO4Props.title"
              :className="sidebarListFranchiseO4Props.className"
            />
            <sidebar-list-franchise-o
              :title="sidebarListFranchiseO5Props.title"
              :className="sidebarListFranchiseO5Props.className"
            />
            <sidebar-list-singapore-o />
            <sidebar-list-dhlo :title="sidebarListDHLO1Props.title" />
            <sidebar-list-dhlo :title="sidebarListDHLO2Props.title" />
            <sidebar-list-postal-coverage />
            <sidebar-list-transaction />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import XFooter from "./XFooter";
import HeaderDefault from "./HeaderDefault";
import SidebarListFranchiseO from "./SidebarListFranchiseO";
import SidebarListSingaporeO from "./SidebarListSingaporeO";
import SidebarListDhlo from "./SidebarListDhlo";
import SidebarListPostalCoverage from "./SidebarListPostalCoverage";
import SidebarListTransaction from "./SidebarListTransaction";
export default {
  name: "OrderTracker",
  components: {
    XFooter,
    HeaderDefault,
    SidebarListFranchiseO,
    SidebarListSingaporeO,
    SidebarListDhlo,
    SidebarListPostalCoverage,
    SidebarListTransaction,
  },
  props: [
    "gologLogoWhite1",
    "minidcAdmin",
    "title",
    "sidebarListFranchiseO1Props",
    "sidebarListFranchiseO2Props",
    "sidebarListFranchiseO3Props",
    "sidebarListFranchiseO4Props",
    "sidebarListFranchiseO5Props",
    "sidebarListDHLO1Props",
    "sidebarListDHLO2Props",
  ],
};
</script>

<style>
.ordertracker {
  align-items: flex-start;
  background-color: var(--white-lilac);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-container {
  height: 1318px;
  position: relative;
  width: 1438px;
}

.footer-container-1 {
  height: 20px;
  left: 271px;
  position: absolute;
  top: 1283px;
  width: 1167px;
}

.r-de-container {
  height: 1318px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1367px;
}

.sidebar-desktop-1 {
  align-items: center;
  background: linear-gradient(180deg, rgb(215, 16, 100) 0%, rgb(186, 21, 92) 100%);
  border: 1px none;
  border-radius: 0px 20px 20px 0px;
  display: flex;
  flex-direction: column;
  height: 1318px;
  left: 0;
  overflow: hidden;
  padding: 43px 0;
  position: absolute;
  top: 0;
  width: 255px;
}

.flex-row-5 {
  align-items: flex-start;
  display: flex;
  gap: 18px;
  margin-left: 2px;
  min-width: 205px;
}

.golog-logo-white-1-2 {
  height: 25px;
  object-fit: cover;
  width: 43px;
}

.minidc-admin-1 {
  letter-spacing: 0.4px;
  min-height: 24px;
}

.sidebar-list-my-task-1 {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  justify-content: flex-end;
  margin-right: 2px;
  min-width: 255px;
}

.overlap-group-6 {
  height: 56px;
  position: relative;
  width: 254px;
}

.title-13 {
  cursor: pointer;
  left: 63px;
  letter-spacing: 0.2px;
  position: absolute;
  top: 17px;
  width: 159px;
}

.vector-13 {
  height: 11px;
  left: 30px;
  position: absolute;
  top: 24px;
  width: 16px;
}

.sheet {
  height: 56px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 254px;
}

.selected-1 {
  background-color: var(--bright-red);
  border: 1px none;
  height: 56px;
  left: 0;
  position: absolute;
  top: 0;
  width: 3px;
}
</style>
