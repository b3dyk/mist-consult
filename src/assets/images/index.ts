import logo from "./logo/logo.jpg";
import heroBgMob from "./background/heroMob.webp";
import heroBgMob2x from "./background/heroMob2x.webp";
import heroBgTab from "./background/heroTab.webp";
import heroBgTab2x from "./background/heroTab2x.webp";
import heroBgDesc from "./background/heroDesk.webp";
import heroBgDesc2x from "./background/heroDesk2x.webp";

import aboutUs from "./about/about-us-img.jpg";
import aboutUsMob from "./about/about-us-mob.webp";
import aboutUsMob2x from "./about/about-us-mob2x.webp";
import aboutUsTab from "./about/about-us-tab.webp";
import aboutUsTab2x from "./about/about-us-tab2x.webp";
import aboutUsDesk from "./about/about-us.webp";
import aboutUsDesk2x from "./about/about-us2x.webp";

import serviceCard1 from "./services/field.jpg";
import serviceCard1Mob from "./services/fieldMob.webp";
import serviceCard1Mob2x from "./services/fieldMob2x.webp";
import serviceCard1Tab from "./services/fieldTab.webp";
import serviceCard1Tab2x from "./services/fieldTab2x.webp";
import serviceCard1Desk from "./services/field.webp";
import serviceCard1Desk2x from "./services/field2x.webp";

import serviceCard2 from "./services/building.jpg";
import serviceCard2Mob from "./services/buildingMob.webp";
import serviceCard2Mob2x from "./services/buildingMob2x.webp";
import serviceCard2Tab from "./services/buildingTab.webp";
import serviceCard2Tab2x from "./services/buildingTab2x.webp";
import serviceCard2Desk from "./services/building.webp";
import serviceCard2Desk2x from "./services/building2x.webp";

import serviceCard3 from "./services/street.jpg";
import serviceCard3Mob from "./services/streetMob.webp";
import serviceCard3Mob2x from "./services/streetMob2x.webp";
import serviceCard3Tab from "./services/streetTab.webp";
import serviceCard3Tab2x from "./services/streetTab2x.webp";
import serviceCard3Desk from "./services/street.webp";
import serviceCard3Desk2x from "./services/street2x.webp";

import spOption1 from "./servicesPage/fieldDesk.jpg";
import spOption1Desk from "./servicesPage/fieldDesk.webp";
import spOption1Desk2x from "./servicesPage/fieldDesk2x.webp";
import spOption2 from "./servicesPage/buildingDesk.jpg";
import spOption2Desk from "./servicesPage/buildingDesk.webp";
import spOption2Desk2x from "./servicesPage/buildingDesk2x.webp";
import spOption3 from "./servicesPage/streetDesk.jpg";
import spOption3Desk from "./servicesPage/streetDesk.webp";
import spOption3Desk2x from "./servicesPage/streetDesk2x.webp";

import spOption1Mob from "./servicesPage/fieldMob.webp";
import spOption1Mob2x from "./servicesPage/fieldMob2x.webp";
import spOption2Mob from "./servicesPage/buildingMob.webp";
import spOption2Mob2x from "./servicesPage/buildingMob2x.webp";
import spOption3Mob from "./servicesPage/streetMob.webp";
import spOption3Mob2x from "./servicesPage/streetMob2x.webp";

import spOption1Tab from "./servicesPage/fieldTab.webp";
import spOption1Tab2x from "./servicesPage/fieldTab2x.webp";
import spOption2Tab from "./servicesPage/buildingTab.webp";
import spOption2Tab2x from "./servicesPage/buildingTab2x.webp";
import spOption3Tab from "./servicesPage/streetTab.webp";
import spOption3Tab2x from "./servicesPage/streetTab2x.webp";

import { ReactComponent as UserCheck } from "./svg/user-check.svg";
import { ReactComponent as Calendar } from "./svg/calendar.svg";
import { ReactComponent as BookOpen } from "./svg/book-open.svg";
import { ReactComponent as Burger } from "./svg/burger.svg";
import { ReactComponent as Close } from "./svg/close.svg";
import { ReactComponent as Chevron } from "./svg/chevron.svg";
import { ReactComponent as DoubleChevron } from "./svg/doubleChevron.svg";
import { ReactComponent as Up } from "./svg/up.svg";
import { ReactComponent as Mist } from "./svg/mist.svg";

interface IIMG {
  [key: string]: string;
}

interface ISVG {
  [key: string]: React.FC;
}

export const IMG: IIMG = {
  logo,
  heroBgMob,
  heroBgMob2x,
  heroBgTab,
  heroBgTab2x,
  heroBgDesc,
  heroBgDesc2x,
  aboutUs,
  aboutUsMob,
  aboutUsMob2x,
  aboutUsTab,
  aboutUsTab2x,
  aboutUsDesk,
  aboutUsDesk2x,
  serviceCard1,
  serviceCard1Mob,
  serviceCard1Tab,
  serviceCard1Desk,
  serviceCard1Mob2x,
  serviceCard1Tab2x,
  serviceCard1Desk2x,
  serviceCard2,
  serviceCard2Mob,
  serviceCard2Tab,
  serviceCard2Desk,
  serviceCard2Mob2x,
  serviceCard2Tab2x,
  serviceCard2Desk2x,
  serviceCard3,
  serviceCard3Mob,
  serviceCard3Tab,
  serviceCard3Desk,
  serviceCard3Mob2x,
  serviceCard3Tab2x,
  serviceCard3Desk2x,
  spOption1,
  spOption1Desk,
  spOption1Desk2x,
  spOption2,
  spOption2Desk,
  spOption2Desk2x,
  spOption3,
  spOption3Desk,
  spOption3Desk2x,
  spOption1Mob,
  spOption1Mob2x,
  spOption2Mob,
  spOption2Mob2x,
  spOption3Mob,
  spOption3Mob2x,
  spOption1Tab,
  spOption1Tab2x,
  spOption2Tab,
  spOption2Tab2x,
  spOption3Tab,
  spOption3Tab2x,
};

export const SVG: ISVG = {
  UserCheck,
  Calendar,
  BookOpen,
  Burger,
  Close,
  Chevron,
  DoubleChevron,
  Up,
  Mist,
};
