import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import AnswerSpeak from "./components/AnswerSpeak";
import Welcome from "./components/Welcome";
import AskSpeak from "./components/AskSpeak";
import Opening from "./components/Opening";
import FutureTimes from "./components/FutureTimes";
import Settings from "./components/Settings";
import Plan from "./components/Plan";
import PlansDay from "./components/PlansDay";
import PlanTime from "./components/PlanTime";
import PlansDay1 from "./components/PlansDay1";
import PlansDay12 from "./components/PlansDay12";
import FutureTimesDay1 from "./components/FutureTimesDay1";
import FutureTimesDay from "./components/FutureTimesDay";
import FutureTimesDay12 from "./components/FutureTimesDay12";
import FutureTimesTime from "./components/FutureTimesTime";
import IPhone13ProMax1 from "./components/IPhone13ProMax1";
import IPhone13ProMax2 from "./components/IPhone13ProMax2";
import IPhone13ProMax6 from "./components/IPhone13ProMax6";
import IPhone13ProMax5 from "./components/IPhone13ProMax5";
import IPhone13ProMax3 from "./components/IPhone13ProMax3";
import IPhone13ProMax4 from "./components/IPhone13ProMax4";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/answer-speak">
          <AnswerSpeak
            back="< Back"
            x1200PxLmu_Lions_Logo1="/img/1200px-lmu-lions-logo-1@2x.png"
            iggy1="/img/iggy-1@2x.png"
            text1="ANSWER SAID AND WRITTEN"
            polygon3="/img/polygon-3@2x.png"
            mic21="/img/mic2-1@2x.png"
            askAnother="Ask Another"
          />
        </Route>
        <Route path="/welcome">
          <Welcome {...welcomeData} />
        </Route>
        <Route path="/ask-speak">
          <AskSpeak
            x1200PxLmu_Lions_Logo1="/img/1200px-lmu-lions-logo-1@2x.png"
            sqln1="/img/sqln-1@2x.png"
            iggy1="/img/iggy-1-2@2x.png"
          />
        </Route>
        <Route path="/opening">
          <Opening {...openingData} />
        </Route>
        <Route path="/future-times">
          <FutureTimes {...futureTimesData} />
        </Route>
        <Route path="/settings">
          <Settings {...settingsData} />
        </Route>
        <Route path="/plan">
          <Plan {...planData} />
        </Route>
        <Route path="/plans-day">
          <PlansDay
            back="< Back"
            x1200PxLmu_Lions_Logo1="/img/1200px-lmu-lions-logo-1@2x.png"
            day="Day:"
            spanText="September "
            spanText2={
              <>
                2021:
                <br />
                <br />1 2 3 4 5 6 7 8 <br />9 10 11 12 13 14
                <br />
                15 16 17 18 19 20 <br />
                21 22 23 24 25 26 <br />
                27 28 29 30 31
              </>
            }
            prev="Prev"
            next="Next"
          />
        </Route>
        <Route path="/plan-time">
          <PlanTime {...planTimeData} />
        </Route>
        <Route path="/plans-day-1-1">
          <PlansDay1 {...plansDay1Data} />
        </Route>
        <Route path="/plans-day-1">
          <PlansDay12 {...plansDay12Data} />
        </Route>
        <Route path="/future-times-day-1-1">
          <FutureTimesDay1 {...futureTimesDay1Data} />
        </Route>
        <Route path="/future-times-day">
          <FutureTimesDay
            back="< Back"
            x1200PxLmu_Lions_Logo1="/img/1200px-lmu-lions-logo-1@2x.png"
            day="Day:"
            spanText="September "
            spanText2={
              <>
                2021:
                <br />
                <br />1 2 3 4 5 6 7 8 <br />9 10 11 12 13 14
                <br />
                15 16 17 18 19 20 <br />
                21 22 23 24 25 26 <br />
                27 28 29 30 31
              </>
            }
            prev="Prev"
            next="Next"
          />
        </Route>
        <Route path="/future-times-day-1">
          <FutureTimesDay12 {...futureTimesDay12Data} />
        </Route>
        <Route path="/future-times-time">
          <FutureTimesTime {...futureTimesTimeData} />
        </Route>
        <Route path="/:path(|iphone-13-pro-max-1)">
          <IPhone13ProMax1 {...iPhone13ProMax1Data} />
        </Route>
        <Route path="/iphone-13-pro-max-2">
          <IPhone13ProMax2 {...iPhone13ProMax2Data} />
        </Route>
        <Route path="/iphone-13-pro-max-6">
          <IPhone13ProMax6 {...iPhone13ProMax6Data} />
        </Route>
        <Route path="/iphone-13-pro-max-5">
          <IPhone13ProMax5 {...iPhone13ProMax5Data} />
        </Route>
        <Route path="/iphone-13-pro-max-3">
          <IPhone13ProMax3 {...iPhone13ProMax3Data} />
        </Route>
        <Route path="/iphone-13-pro-max-4">
          <IPhone13ProMax4 {...iPhone13ProMax4Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const welcomeData = {
    title: "Parking Lions",
    x1200PxLmu_Lions_Logo1: "/img/1200px-lmu-lions-logo-1-1@2x.png",
    spanText: <>Class Today:<br /></>,
    spanText2: <><br />9:00 am - Life Science Building<br /></>,
    spanText3: <><br /></>,
    spanText4: <>Where To Park:<br /></>,
    spanText5: <><br />Life Science Lot - Est 32 Spots<br /><br /></>,
    spanText6: "When To Leave:",
    x837Am: "8:37 am",
    xcontinue: "Continue >",
    iggy1: "/img/iggy-1-1@2x.png",
    polygon1: "/img/polygon-1@2x.png",
};

const openingData = {
    back: "< Back",
    x1200PxLmu_Lions_Logo1: "/img/1200px-lmu-lions-logo-1@2x.png",
    accountSettings: "Account & Settings",
    planADrive: "Plan a Drive",
    checkFutureTimes: "Check Future Times",
    spanText: <>Drollinger:<br /></>,
    spanText2: "32 Spots",
    currentParking: "CURRENT PARKING",
    spanText3: <>Uhall:<br /></>,
    spanText4: "32 Spots",
    spanText5: <>Freshman:<br /></>,
    spanText6: "32 Spots",
    spanText7: <>LSB:<br /></>,
    spanText8: "32 Spots",
    spanText9: <>Doolan:<br /></>,
    spanText10: "32 Spots",
    spanText11: <>Hannon:<br /></>,
    spanText12: "32 Spots",
    iggy1: "/img/iggy-1-3@2x.png",
    polygon2: "/img/polygon-1@2x.png",
    text4: "Tap Here To Ask A Question",
    mic21: "/img/mic2-1-1@2x.png",
};

const futureTimesData = {
    back: "< Back",
    x1200PxLmu_Lions_Logo1: "/img/1200px-lmu-lions-logo-1@2x.png",
    accountSettings: "Account & Settings",
    time900Am: <>Time:<br />9:00 am</>,
    day1021: <>Day:<br />10/21</>,
    spanText: <>Drollinger:<br /></>,
    spanText2: "32 Spots",
    spanText3: <>Uhall:<br /></>,
    spanText4: "32 Spots",
    spanText5: <>Freshman:<br /></>,
    spanText6: "32 Spots",
    spanText7: <>LSB:<br /></>,
    spanText8: "32 Spots",
    spanText9: <>Doolan:<br /></>,
    spanText10: "32 Spots",
    spanText11: <>Hannon:<br /></>,
    spanText12: "32 Spots",
    text6: "Lot Business By Hour:",
    graohbusy1: "/img/graohbusy-1@2x.png",
};

const settingsData = {
    x1200PxLmu_Lions_Logo1: "/img/1200px-lmu-lions-logo-1@2x.png",
    back: "< Back",
    lmulogo2: "/img/lmulogo-2@2x.png",
    text8: "ACCOUNT AND SETTINGS",
    text7: "Personal Information",
    classSchedule: "Class Schedule",
    preferances: "Preferances",
    settings: "Settings",
    makeASuggestion: "Make A Suggestion",
    plannedDrives: "Planned Drives",
};

const planData = {
    back: "< Back",
    x1200PxLmu_Lions_Logo1: "/img/1200px-lmu-lions-logo-1@2x.png",
    accountSettings: "Account & Settings",
    day: "Day:",
    pleseSelect: "Plese Select",
    time: "Time:",
    pleseSelect2: "Plese Select",
    classLocation: "Class Location:",
    pleseSelect3: "Plese Select",
    notificationTimes: "Notification Times:",
    pleseSelect4: "Plese Select",
    submit: "Submit",
};

const planTimeData = {
    back: "< Back",
    x1200PxLmu_Lions_Logo1: "/img/1200px-lmu-lions-logo-1@2x.png",
    time: "Time:",
    x900Am: "9:00am",
    x930Am: "9:30am",
    x1000Am: "10:00am",
    x1030Am: "10:30am",
    x1100Am: "11:00am",
    x1130Am: "11:30am",
    x1200Pm: "12:00pm",
    x1230Pm: "12:30pm",
    x100Pm: "1:00pm",
    x130Pm: "1:30pm",
    back2: "< Back",
    accountSettings: "Account & Settings",
    x1200PxLmu_Lions_Logo12: "/img/1200px-lmu-lions-logo-1@2x.png",
    day: "Day:",
    spanText: "October ",
    spanText2: <>2021:<br /><br />1  2  3  4  5  6  7  8 <br />9  10  11  12  13  14<br />15  16  17  18  19  20 <br />21  22  23  24  25  26  <br />27 28 29 30 31<br />Prev                                 Next</>,
    submit: "Submit",
};

const plansDay1Data = {
    back: "< Back",
    x1200PxLmu_Lions_Logo1: "/img/1200px-lmu-lions-logo-1@2x.png",
    day: "Day:",
    spanText: "October ",
    spanText2: <>2021:<br /><br />1  2  3  4  5  6  7  8 <br />9  10  11  12  13  14<br />15  16  17  18  19  20 <br />21  22  23  24  25  26  <br />27 28 29 30 31</>,
    prev: "Prev",
    next: "Next",
    back2: "< Back",
    accountSettings: "Account & Settings",
    x1200PxLmu_Lions_Logo12: "/img/1200px-lmu-lions-logo-1@2x.png",
    day2: "Day:",
    spanText3: "October ",
    spanText4: <>2021:<br /><br />1  2  3  4  5  6  7  8 <br />9  10  11  12  13  14<br />15  16  17  18  19  20 <br />21  22  23  24  25  26  <br />27 28 29 30 31<br />Prev                                 Next</>,
    submit: "Submit",
};

const plansDay12Data = {
    back: "< Back",
    x1200PxLmu_Lions_Logo1: "/img/1200px-lmu-lions-logo-1@2x.png",
    day: "Day:",
    spanText: "August ",
    spanText2: <>2021:<br /><br />1  2  3  4  5  6  7  8 <br />9  10  11  12  13  14<br />15  16  17  18  19  20 <br />21  22  23  24  25  26  <br />27 28 29 30 31</>,
    prev: "Prev",
    next: "Next",
    back2: "< Back",
    accountSettings: "Account & Settings",
    x1200PxLmu_Lions_Logo12: "/img/1200px-lmu-lions-logo-1@2x.png",
    day2: "Day:",
    spanText3: "October ",
    spanText4: <>2021:<br /><br />1  2  3  4  5  6  7  8 <br />9  10  11  12  13  14<br />15  16  17  18  19  20 <br />21  22  23  24  25  26  <br />27 28 29 30 31<br />Prev                                 Next</>,
    submit: "Submit",
};

const futureTimesDay1Data = {
    back: "< Back",
    x1200PxLmu_Lions_Logo1: "/img/1200px-lmu-lions-logo-1-2@2x.png",
    day: "Day:",
    spanText: "August ",
    spanText2: <>2021:<br /><br />1  2  3  4  5  6  7  8 <br />9  10  11  12  13  14<br />15  16  17  18  19  20 <br />21  22  23  24  25  26  <br />27 28 29 30 31</>,
    prev: "Prev",
    next: "Next",
    back2: "< Back",
    accountSettings: "Account & Settings",
    x1200PxLmu_Lions_Logo12: "/img/1200px-lmu-lions-logo-1-2@2x.png",
    day2: "Day:",
    spanText3: "October ",
    spanText4: <>2021:<br /><br />1  2  3  4  5  6  7  8 <br />9  10  11  12  13  14<br />15  16  17  18  19  20 <br />21  22  23  24  25  26  <br />27 28 29 30 31<br />Prev                                 Next</>,
    submit: "Submit",
};

const futureTimesDay12Data = {
    back: "< Back",
    x1200PxLmu_Lions_Logo1: "/img/1200px-lmu-lions-logo-1@2x.png",
    day: "Day:",
    spanText: "October ",
    spanText2: <>2021:<br /><br />1  2  3  4  5  6  7  8 <br />9  10  11  12  13  14<br />15  16  17  18  19  20 <br />21  22  23  24  25  26  <br />27 28 29 30 31</>,
    prev: "Prev",
    next: "Next",
    back2: "< Back",
    accountSettings: "Account & Settings",
    x1200PxLmu_Lions_Logo12: "/img/1200px-lmu-lions-logo-1@2x.png",
    day2: "Day:",
    spanText3: "October ",
    spanText4: <>2021:<br /><br />1  2  3  4  5  6  7  8 <br />9  10  11  12  13  14<br />15  16  17  18  19  20 <br />21  22  23  24  25  26  <br />27 28 29 30 31<br />Prev                                 Next</>,
    submit: "Submit",
};

const futureTimesTimeData = {
    back: "< Back",
    x1200PxLmu_Lions_Logo1: "/img/1200px-lmu-lions-logo-1@2x.png",
    time: "Time:",
    x900Am: "9:00am",
    x930Am: "9:30am",
    x1000Am: "10:00am",
    x1030Am: "10:30am",
    x1100Am: "11:00am",
    x1130Am: "11:30am",
    x1200Pm: "12:00pm",
    x1230Pm: "12:30pm",
    x100Pm: "1:00pm",
    x130Pm: "1:30pm",
    back2: "< Back",
    accountSettings: "Account & Settings",
    x1200PxLmu_Lions_Logo12: "/img/1200px-lmu-lions-logo-1@2x.png",
    day: "Day:",
    spanText: "October ",
    spanText2: <>2021:<br /><br />1  2  3  4  5  6  7  8 <br />9  10  11  12  13  14<br />15  16  17  18  19  20 <br />21  22  23  24  25  26  <br />27 28 29 30 31<br />Prev                                 Next</>,
    submit: "Submit",
};

const iPhone13ProMax1Data = {
    parkingLions: "Parking Lions",
    x1200PxLmu_Lions_Logo1: "/img/1200px-lmu-lions-logo-1@2x.png",
    spanText: <>Class Today:<br /><br /></>,
    spanText2: <>9:00 am<br />Life Science Building<br /><br /></>,
    spanText3: <>Where To Park:<br /><br /></>,
    spanText4: <>Life Science Lot<br />Est 32 Spots</>,
    lmulogo1: "/img/lmulogo-1@2x.png",
    xcontinue: "Continue >",
};

const iPhone13ProMax2Data = {
    back: "< Back",
    accountSettings: "Account & Settings",
    x1200PxLmu_Lions_Logo1: "/img/1200px-lmu-lions-logo-1-2@2x.png",
    planADrive: "Plan a Drive",
    checkFutureTimes: "Check Future Times",
    spanText: <>Drollinger:<br /></>,
    spanText2: "32 Spots",
    currentParking: "CURRENT PARKING",
    spanText3: <>Uhall:<br /></>,
    spanText4: "32 Spots",
    spanText5: <>Freshman:<br /></>,
    spanText6: "32 Spots",
    spanText7: <>LSB:<br /></>,
    spanText8: "32 Spots",
    spanText9: <>Doolan:<br /></>,
    spanText10: "32 Spots",
    spanText11: <>Hannon:<br /></>,
    spanText12: "32 Spots",
    text21: "Lot Business By Hour:",
    graohbusy1: "/img/graohbusy-1@2x.png",
};

const iPhone13ProMax6Data = {
    back: "< Back",
    x1200PxLmu_Lions_Logo1: "/img/1200px-lmu-lions-logo-1-2@2x.png",
    lmulogo2: "/img/lmulogo-2@2x.png",
    text23: "ACCOUNT AND SETTINGS",
    text22: "Personal Information",
    classSchedule: "Class Schedule",
    preferances: "Preferances",
    settings: "Settings",
    makeASuggestion: "Make A Suggestion",
    reportAnIssue: "Report An Issue",
};

const iPhone13ProMax5Data = {
    back: "< Back",
    accountSettings: "Account & Settings",
    x1200PxLmu_Lions_Logo1: "/img/1200px-lmu-lions-logo-1-2@2x.png",
    day: "Day:",
    pleseSelect: "Plese Select",
    time: "Time:",
    pleseSelect2: "Plese Select",
    classLocation: "Class Location:",
    pleseSelect3: "Plese Select",
    notificationTimes: "Notification Times:",
    pleseSelect4: "Plese Select",
    submit: "Submit",
};

const iPhone13ProMax3Data = {
    back: "< Back",
    accountSettings: "Account & Settings",
    x1200PxLmu_Lions_Logo1: "/img/1200px-lmu-lions-logo-1-2@2x.png",
    time900Am: <>Time:<br />9:00 am</>,
    day1021: <>Day:<br />10/21</>,
    spanText: <>Drollinger:<br /></>,
    spanText2: "32 Spots",
    spanText3: <>Uhall:<br /></>,
    spanText4: "32 Spots",
    spanText5: <>Freshman:<br /></>,
    spanText6: "32 Spots",
    spanText7: <>LSB:<br /></>,
    spanText8: "32 Spots",
    spanText9: <>Doolan:<br /></>,
    spanText10: "32 Spots",
    spanText11: <>Hannon:<br /></>,
    spanText12: "32 Spots",
    text25: "Lot Business By Hour:",
    graohbusy1: "/img/graohbusy-1-1@2x.png",
};

const iPhone13ProMax4Data = {
    back: "< Back",
    accountSettings: "Account & Settings",
    x1200PxLmu_Lions_Logo1: "/img/1200px-lmu-lions-logo-1-2@2x.png",
    text26: <>Time:<br />9:00 am<br />9:30 am<br />10:00 am<br />10:30 am<br />11:00 am<br />11:30 am<br />12:00 pm<br />12:30 pm<br />1:00 pm<br />1:30 pm</>,
    spanText: <>Day:<br /></>,
    spanText2: <>September 2021:<br /><br />1 2 3 4 5 6 7 8 <br />9 10 11 12 13 14<br />15 16 17 18 19 20 21 22 23 24<br /></>,
    spanText3: <><br />Prev          Next</>,
    lsb: "LSB:",
    hannon: "Hannon:",
    text28: "Lot Business By Hour:",
};

