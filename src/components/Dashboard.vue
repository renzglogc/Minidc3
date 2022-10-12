<template>
  <div class="container-center-horizontal">
    <form class="dashboard screen" name="form1" action="form1" method="post">
      <div class="overlap-group6">
        <div class="overlap-group4">
          <carousel :title="carouselProps.title" :thirdSlide="carouselProps.thirdSlide" />
          <header-default />
          <div class="sidebar-desktop">
            <div class="flex-row">
              <img class="golog-logo-white-1" :src="gologLogoWhite1" alt="golog logo white 1" />
              <div class="minidc-admin mulish-bold-white-19px">{{ minidcAdmin }}</div>
            </div>
            <div class="sidebar-list-dashboard">
              <div class="selected"></div>
              <img
                class="icon-sidebar-active-1-overview"
                src="https://anima-uploads.s3.amazonaws.com/projects/6346737d3c195ace20fe33e6/releases/6346744bfb6cd5506eea67db/img/icon---sidebar---active---1--overview@2x.svg"
                alt="icon / sidebar / active / 1. overview"
              />
              <div class="title mulish-normal-white-16px">{{ title1 }}</div>
            </div>
            <div class="sidebar-list-my-task">
              <img
                class="vector"
                src="https://anima-uploads.s3.amazonaws.com/projects/6346737d3c195ace20fe33e6/releases/6346744bfb6cd5506eea67db/img/vector-3@2x.svg"
                alt="Vector"
              />
              <a href="javascript:SubmitForm('form1')">
                <div class="title-1 mulish-normal-white-16px">{{ title2 }}</div>
              </a>
            </div>
            <sidebar-list-franchise-o :title="sidebarListFranchiseO1Props.title" />
            <sidebar-list-franchise-o
              :title="sidebarListFranchiseO2Props.title"
              :className="sidebarListFranchiseO2Props.className"
            />
            <sidebar-list-franchise-o
              :title="sidebarListFranchiseO3Props.title"
              :className="sidebarListFranchiseO3Props.className"
            />
            <sidebar-list-franchise-o
              :title="sidebarListFranchiseO4Props.title"
              :className="sidebarListFranchiseO4Props.className"
            />
            <sidebar-list-singapore-o />
            <sidebar-list-dhlo :title="sidebarListDHLO1Props.title" />
            <sidebar-list-dhlo :title="sidebarListDHLO2Props.title" />
            <sidebar-list-postal-coverage />
            <sidebar-list-transaction />
          </div>
          <img class="delivery-1 animate-enter" :src="delivery1" alt="delivery 1" />
          <div class="card">
            <div class="card-components-1">
              <div class="flex-col">
                <div class="textfield-4 mulish-bold-razzmatazz-29px">{{ textfield1 }}</div>
                <div class="rectangle-5"></div>
                <div class="flex-row-1">
                  <div class="flex-col-1">
                    <form-select :text="formSelect1Props.text" />
                    <form-select :text="formSelect2Props.text" :className="formSelect2Props.className" />
                    <x-form :text="xForm1Props.text" />
                    <div class="form-container">
                      <form-select2 />
                      <x-form :text="xForm2Props.text" :className="xForm2Props.className" />
                    </div>
                  </div>
                  <div class="flex-col-2">
                    <form-select :text="formSelect3Props.text" />
                    <form-select :text="formSelect4Props.text" :className="formSelect4Props.className" />
                    <x-button :text="xButton1Props.text" />
                  </div>
                </div>
                <div class="rectangle-6"></div>
                <div class="flex-row-2">
                  <div class="textfield-container">
                    <div class="textfield-5" v-html="textfield2"></div>
                    <div class="textfield-6">{{ textfield3 }}</div>
                  </div>
                  <x-button :text="xButton2Props.text" :className="xButton2Props.className" />
                </div>
                <p class="textfield-7">{{ textfield4 }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-container">
          <x-footer />
          <x-footer />
        </div>
        <div class="textfield-8">{{ textfield5 }}</div>
        <div class="guidline mulish-bold-razzmatazz-29px">{{ guidline }}</div>
        <div class="card-1">
          <div class="card-components">
            <div class="shipment mulish-bold-razzmatazz-20px">{{ shipment1 }}</div>
            <div class="overlap-group">
              <div class="o-rder-id-1">
                <div class="textfield-9 mulish-bold-smoky-16px">{{ textfield6 }}</div>
                <div class="textfield-10 mulish-semi-bold-smoky-16px">{{ textfield7 }}</div>
                <div class="textfield-11 mulish-semi-bold-smoky-16px">{{ textfield8 }}</div>
                <div class="textfield-12 mulish-semi-bold-smoky-16px">{{ textfield9 }}</div>
                <div class="textfield mulish-semi-bold-smoky-16px">{{ textfield10 }}</div>
                <div class="textfield-13 mulish-semi-bold-smoky-16px">{{ textfield11 }}</div>
              </div>
              <div class="type-of-shipment">
                <div class="textfield-14 mulish-bold-smoky-16px">{{ textfield12 }}</div>
                <div class="textfield-15 mulish-semi-bold-smoky-16px">{{ textfield13 }}</div>
                <div class="textfield-16 mulish-semi-bold-smoky-16px">{{ textfield14 }}</div>
                <div class="textfield-17 mulish-semi-bold-smoky-16px">{{ textfield15 }}</div>
                <div class="textfield-18 mulish-semi-bold-smoky-16px">{{ textfield16 }}</div>
                <div class="textfield-19 mulish-semi-bold-smoky-16px">{{ textfield17 }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-2">
          <div class="card-components">
            <div class="shipment mulish-bold-razzmatazz-20px">{{ shipment2 }}</div>
            <div class="flex-row-3">
              <div class="type-of-shipment-1">
                <div class="textfield-20 mulish-bold-smoky-16px">{{ textfield18 }}</div>
                <div class="textfield-21 mulish-semi-bold-smoky-16px">{{ textfield19 }}</div>
                <div class="textfield-22 mulish-semi-bold-smoky-16px">{{ textfield20 }}</div>
                <div class="textfield-23 mulish-semi-bold-smoky-16px">{{ textfield21 }}</div>
              </div>
              <div class="o-rder-id">
                <div class="textfield-1 mulish-bold-smoky-16px">{{ textfield22 }}</div>
                <div class="textfield-2 mulish-semi-bold-smoky-16px">{{ textfield23 }}</div>
                <div class="textfield-24 mulish-semi-bold-smoky-16px">{{ textfield24 }}</div>
                <div class="textfield-3 mulish-semi-bold-smoky-16px">{{ textfield25 }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-3">
          <div class="card-components">
            <div class="shipment mulish-bold-razzmatazz-20px">{{ shipment3 }}</div>
            <div class="flex-row-4">
              <div class="type-of-shipment-2">
                <div class="textfield-25 mulish-bold-smoky-16px">{{ textfield26 }}</div>
                <div class="textfield-26 mulish-semi-bold-smoky-16px">{{ textfield27 }}</div>
                <div class="textfield-27 mulish-semi-bold-smoky-16px">{{ textfield28 }}</div>
                <div class="textfield-28 mulish-semi-bold-smoky-16px">{{ textfield29 }}</div>
              </div>
              <div class="o-rder-id">
                <div class="textfield-1 mulish-bold-smoky-16px">{{ textfield30 }}</div>
                <div class="textfield-2 mulish-semi-bold-smoky-16px">{{ textfield31 }}</div>
                <div class="textfield mulish-semi-bold-smoky-16px">{{ textfield32 }}</div>
                <div class="textfield-3 mulish-semi-bold-smoky-16px">{{ textfield33 }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Carousel from "./Carousel";
import HeaderDefault from "./HeaderDefault";
import SidebarListFranchiseO from "./SidebarListFranchiseO";
import SidebarListSingaporeO from "./SidebarListSingaporeO";
import SidebarListDhlo from "./SidebarListDhlo";
import SidebarListPostalCoverage from "./SidebarListPostalCoverage";
import SidebarListTransaction from "./SidebarListTransaction";
import FormSelect from "./FormSelect";
import XForm from "./XForm";
import FormSelect2 from "./FormSelect2";
import XButton from "./XButton";
import XFooter from "./XFooter";
export default {
  name: "Dashboard",
  components: {
    Carousel,
    HeaderDefault,
    SidebarListFranchiseO,
    SidebarListSingaporeO,
    SidebarListDhlo,
    SidebarListPostalCoverage,
    SidebarListTransaction,
    FormSelect,
    XForm,
    FormSelect2,
    XButton,
    XFooter,
  },
  props: [
    "gologLogoWhite1",
    "minidcAdmin",
    "title1",
    "title2",
    "delivery1",
    "textfield1",
    "textfield2",
    "textfield3",
    "textfield4",
    "textfield5",
    "guidline",
    "shipment1",
    "textfield6",
    "textfield7",
    "textfield8",
    "textfield9",
    "textfield10",
    "textfield11",
    "textfield12",
    "textfield13",
    "textfield14",
    "textfield15",
    "textfield16",
    "textfield17",
    "shipment2",
    "textfield18",
    "textfield19",
    "textfield20",
    "textfield21",
    "textfield22",
    "textfield23",
    "textfield24",
    "textfield25",
    "shipment3",
    "textfield26",
    "textfield27",
    "textfield28",
    "textfield29",
    "textfield30",
    "textfield31",
    "textfield32",
    "textfield33",
    "carouselProps",
    "sidebarListFranchiseO1Props",
    "sidebarListFranchiseO2Props",
    "sidebarListFranchiseO3Props",
    "sidebarListFranchiseO4Props",
    "sidebarListDHLO1Props",
    "sidebarListDHLO2Props",
    "formSelect1Props",
    "formSelect2Props",
    "xForm1Props",
    "xForm2Props",
    "formSelect3Props",
    "formSelect4Props",
    "xButton1Props",
    "xButton2Props",
  ],
};
</script>

<style>
.dashboard {
  align-items: flex-start;
  background-color: var(--white-lilac);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group6 {
  height: 1318px;
  position: relative;
  width: 1440px;
}

.overlap-group4 {
  height: 1318px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.sidebar-desktop {
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

.flex-row {
  align-items: flex-start;
  display: flex;
  gap: 18px;
  margin-left: 2px;
  min-width: 205px;
}

.golog-logo-white-1 {
  height: 25px;
  object-fit: cover;
  width: 43px;
}

.minidc-admin {
  letter-spacing: 0.4px;
  min-height: 24px;
}

.sidebar-list-dashboard {
  align-items: center;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/6346737d3c195ace20fe33e6/releases/6346744bfb6cd5506eea67db/img/sheet@2x.svg);
  background-position: 50% 50%;
  background-size: cover;
  border: 1px none;
  display: flex;
  margin-top: 60px;
  min-width: 255px;
}

.selected {
  background-color: var(--bright-red);
  border: 1px none;
  height: 56px;
  width: 3px;
}

.icon-sidebar-active-1-overview {
  height: 16px;
  margin-left: 29px;
  width: 16px;
}

.title {
  letter-spacing: 0.2px;
  margin-bottom: 2px;
  margin-left: 17px;
  min-height: 20px;
  width: 159px;
}

.sidebar-list-my-task {
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

.vector {
  align-self: center;
  height: 11px;
  margin-top: 3.2px;
  width: 16px;
}

.title-1 {
  cursor: pointer;
  letter-spacing: 0.2px;
  min-height: 20px;
  width: 159px;
}

.delivery-1 {
  display: block;
  height: 521px;
  left: 242px;
  object-fit: cover;
  opacity: 0;
  position: absolute;
  top: 192px;
  transform: translate(25px, 0);
  width: 695px;
}

.delivery-1.animate-enter {
  animation: animate-enter-frames 0.2s ease-in-out 0s 1 normal forwards;
  display: block;
  opacity: 0;
  transform: translate(25px, 0);
}

.card {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  border-radius: 6px;
  box-shadow: 0px 4px 18px #4b465c1a;
  display: flex;
  flex-direction: column;
  height: 493px;
  left: 902px;
  padding: 24px;
  position: absolute;
  top: 205px;
  width: 485px;
}

.card-components-1 {
  align-self: stretch;
  border: 1px none;
  height: 459px;
  margin-bottom: -14px;
  min-width: 437px;
}

.flex-col {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 11px;
  min-height: 417px;
  position: relative;
  top: 19px;
  width: 418px;
}

.textfield-4 {
  letter-spacing: -0.3px;
  line-height: 13.5px;
  margin-left: 35px;
  min-height: 28px;
  text-align: center;
  width: 327px;
}

.rectangle-5 {
  background-color: var(--cadet-blue);
  border: 1px none;
  border-radius: 10px;
  height: 2px;
  margin-right: 1px;
  width: 401px;
}

.flex-row-1 {
  align-items: flex-start;
  display: flex;
  gap: 16px;
  height: 254px;
  margin-right: 2px;
  margin-top: 32px;
  min-width: 416px;
}

.flex-col-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 254px;
  position: relative;
  width: 200px;
}

.form-container {
  height: 36px;
  margin-top: 37px;
  position: relative;
  width: 200px;
}

.flex-col-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 253px;
  position: relative;
  width: 200px;
}

.rectangle-6 {
  background-color: var(--cadet-blue);
  border: 1px none;
  border-radius: 10px;
  height: 2px;
  margin-right: 7px;
  margin-top: 22px;
  width: 401px;
}

.flex-row-2 {
  align-items: center;
  display: flex;
  gap: 24px;
  margin-left: 8px;
  margin-top: 14px;
  min-width: 410px;
  position: relative;
}

.textfield-container {
  height: 46px;
  position: relative;
  width: 208px;
}

.textfield-5 {
  color: var(--smoky);
  font-family: var(--font-family-mulish);
  font-size: var(--font-size-xxxs);
  font-weight: 800;
  left: 0;
  letter-spacing: -0.3px;
  line-height: 21px;
  position: absolute;
  top: 0;
  width: 208px;
}

.textfield-6 {
  color: var(--smoky);
  font-family: var(--font-family-mulish);
  font-size: var(--font-size-xl);
  font-weight: 800;
  left: 80px;
  letter-spacing: -0.3px;
  line-height: 21px;
  position: absolute;
  top: 6px;
  width: 85px;
}

.textfield-7 {
  align-self: flex-start;
  color: var(--razzmatazz);
  font-family: var(--font-family-mulish);
  font-size: var(--font-size-s);
  font-weight: 700;
  letter-spacing: -0.3px;
  line-height: 13.5px;
  margin-left: 7px;
  min-height: 17px;
  width: 279px;
}

.footer-container {
  height: 20px;
  left: 271px;
  position: absolute;
  top: 1283px;
  width: 1167px;
}

.textfield-8 {
  color: var(--smoky);
  font-family: var(--font-family-mulish);
  font-size: var(--font-size-xl);
  font-weight: 700;
  left: 291px;
  letter-spacing: -0.3px;
  line-height: 13.5px;
  position: absolute;
  top: 106px;
  width: 536px;
}

.guidline {
  left: 300px;
  letter-spacing: -0.3px;
  line-height: 13.5px;
  position: absolute;
  top: 808px;
  width: 330px;
}

.card-1 {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  border-radius: 10px;
  box-shadow: 0px 4px 18px #4b465c1a;
  display: flex;
  flex-direction: column;
  height: 287px;
  left: 290px;
  padding: 24px;
  position: absolute;
  top: 885px;
  width: 339px;
}

.card-components {
  align-self: stretch;
  border: 1px none;
  height: 272px;
  margin-bottom: -33px;
  min-width: 291px;
  position: relative;
}

.shipment {
  left: 60px;
  letter-spacing: -0.3px;
  line-height: 13.5px;
  position: absolute;
  text-align: center;
  top: 4px;
  width: 172px;
}

.overlap-group {
  height: 180px;
  left: -82px;
  position: absolute;
  top: 47px;
  width: 436px;
}

.o-rder-id-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 277px;
  min-height: 180px;
  position: absolute;
  top: 0;
  width: 159px;
}

.textfield-9 {
  letter-spacing: -0.3px;
  line-height: 13.5px;
  margin-left: 0.33px;
  min-height: 17px;
  width: 147px;
}

.textfield-10 {
  letter-spacing: -0.3px;
  line-height: 13.5px;
  margin-left: 0.33px;
  margin-top: 21px;
  min-height: 17px;
  width: 76px;
}

.textfield-11 {
  letter-spacing: -0.3px;
  line-height: 13.5px;
  margin-left: 0.33px;
  margin-top: 16px;
  min-height: 17px;
  width: 76px;
}

.textfield-12 {
  letter-spacing: -0.3px;
  line-height: 13.5px;
  margin-left: 0.33px;
  margin-top: 13px;
  min-height: 17px;
  width: 76px;
}

.textfield {
  letter-spacing: -0.3px;
  line-height: 13.5px;
  margin-top: 16px;
  min-height: 17px;
  width: 76px;
}

.textfield-13 {
  letter-spacing: -0.3px;
  line-height: 13.5px;
  margin-left: 0.33px;
  margin-top: 14px;
  min-height: 17px;
  width: 76px;
}

.type-of-shipment {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 180px;
  position: absolute;
  top: 0;
  width: 335px;
}

.textfield-14 {
  align-self: flex-start;
  letter-spacing: -0.3px;
  line-height: 13.5px;
  min-height: 17px;
  text-align: center;
  width: 323px;
}

.textfield-15 {
  letter-spacing: -0.3px;
  line-height: 13.5px;
  margin-left: 24.29px;
  margin-top: 21px;
  min-height: 17px;
  width: 167px;
}

.textfield-16 {
  letter-spacing: -0.3px;
  line-height: 13.5px;
  margin-left: 24.11px;
  margin-top: 15px;
  min-height: 17px;
  width: 167px;
}

.textfield-17 {
  letter-spacing: -0.3px;
  line-height: 13.5px;
  margin-left: 24.11px;
  margin-top: 15px;
  min-height: 14px;
  white-space: nowrap;
  width: 167px;
}

.textfield-18 {
  letter-spacing: -0.3px;
  line-height: 13.5px;
  margin-left: 24.11px;
  margin-top: 17px;
  min-height: 17px;
  width: 167px;
}

.textfield-19 {
  letter-spacing: -0.3px;
  line-height: 13.5px;
  margin-left: 24.29px;
  margin-top: 14px;
  min-height: 17px;
  width: 167px;
}

.card-2 {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  border-radius: 10px;
  box-shadow: 0px 4px 18px #4b465c1a;
  display: flex;
  flex-direction: column;
  height: 287px;
  left: 669px;
  padding: 24px;
  position: absolute;
  top: 885px;
  width: 339px;
}

.flex-row-3 {
  align-items: flex-start;
  display: flex;
  gap: 5px;
  height: 116px;
  left: 15px;
  min-width: 335px;
  position: absolute;
  top: 47px;
}

.type-of-shipment-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 116px;
  width: 175px;
}

.textfield-20 {
  letter-spacing: -0.3px;
  line-height: 13.5px;
  margin-left: 0.18px;
  min-height: 17px;
  width: 151px;
}

.textfield-21 {
  letter-spacing: -0.3px;
  line-height: 13.5px;
  margin-top: 21px;
  min-height: 17px;
  width: 167px;
}

.textfield-22 {
  letter-spacing: -0.3px;
  line-height: 13.5px;
  margin-top: 16px;
  min-height: 17px;
  width: 167px;
}

.textfield-23 {
  letter-spacing: -0.3px;
  line-height: 13.5px;
  margin-top: 15px;
  min-height: 14px;
  white-space: nowrap;
}

.o-rder-id {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 116px;
  width: 155px;
}

.textfield-1 {
  letter-spacing: -0.3px;
  line-height: 13.5px;
  min-height: 17px;
  width: 147px;
}

.textfield-2 {
  letter-spacing: -0.3px;
  line-height: 13.5px;
  margin-top: 21px;
  min-height: 17px;
  width: 76px;
}

.textfield-24 {
  letter-spacing: -0.3px;
  line-height: 13.5px;
  margin-top: 16px;
  min-height: 17px;
  width: 115px;
}

.textfield-3 {
  letter-spacing: -0.3px;
  line-height: 13.5px;
  margin-top: 13px;
  min-height: 17px;
  width: 76px;
}

.card-3 {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  border-radius: 10px;
  box-shadow: 0px 4px 18px #4b465c1a;
  display: flex;
  flex-direction: column;
  height: 287px;
  left: 1048px;
  padding: 24px;
  position: absolute;
  top: 885px;
  width: 339px;
}

.flex-row-4 {
  align-items: flex-start;
  display: flex;
  gap: 36px;
  height: 117px;
  left: 14px;
  min-width: 336px;
  position: absolute;
  top: 46px;
}

.type-of-shipment-2 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  min-height: 116px;
  width: 145px;
}

.textfield-25 {
  letter-spacing: -0.3px;
  line-height: 13.5px;
  min-height: 17px;
  width: 137px;
}

.textfield-26 {
  letter-spacing: -0.3px;
  line-height: 13.5px;
  margin-left: 0.28px;
  margin-top: 21px;
  min-height: 17px;
  width: 71px;
}

.textfield-27 {
  letter-spacing: -0.3px;
  line-height: 13.5px;
  margin-left: 0.28px;
  margin-top: 16px;
  min-height: 17px;
  width: 71px;
}

.textfield-28 {
  letter-spacing: -0.3px;
  line-height: 13.5px;
  margin-left: 0.28px;
  margin-top: 15px;
  min-height: 14px;
  white-space: nowrap;
}

@keyframes animate-enter-frames {
  from {
    opacity: 0;
    transform: translate(25px, 0);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}
</style>
