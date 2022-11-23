/*
 * Login And Password => Setting Login and Password
 */

let Register = () => {
  localStorage.setItem(
    "loginEmail",
    JSON.stringify(document.querySelector(".email").value)
  );
  localStorage.setItem(
    "loginPassword",
    JSON.stringify(document.querySelector(".password").value)
  );
};

/*
 * Dealing With Authentication
 */
document.addEventListener("submit", (e) => {
  // getting input items
  if (document.querySelector(".email") && document.querySelector(".password")) {
    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;

    const loginEmail = JSON.parse(localStorage.getItem("loginEmail"));
    const loginPassword = JSON.parse(localStorage.getItem("loginPassword"));

    // comparing values
    if (email === "example@eg.com" && password === "password") {
      sessionStorage.setItem("isLogin", true);
      window.location.href = "../../pages/dashboard.html";
    } else if (loginEmail === email && loginPassword === password) {
      sessionStorage.setItem("isLogin", true);
      window.location.href = "../../pages/dashboard.html";
    } else {
      alert("Incorrect Email or password!!!");
    }
  }
  e.preventDefault();
});

/*
 * Dealing With Isset
 */

const handleISSet = () => {};

/*
 * Message Dialog
 */

const handleMessage = (messageStatus) => {
  if (!messageStatus) {
    const message = document.querySelector(".message");
    if (document.querySelector(".isMessage") === true) {
      const handleTime = () => {
        message.style.display = "none";
      };

      setTimeout(handleTime, 5000);
    }
    message.style.display = "none";
  }
};

let getAuth = (loadStatus) => {
  if (!loadStatus) {
    if (
      document.querySelector(".email") &&
      document.querySelector(".password")
    ) {
      document.querySelector(".email").value = JSON.parse(
        localStorage.getItem("loginEmail")
      );
      document.querySelector(".password").value = JSON.parse(
        localStorage.getItem("loginPassword")
      );
    }
  }
};

/*
 * Onload Dialog
 */

const handleOnLoad = (loadState, messageState) => {
  if (!sessionStorage.getItem("isLogin")) {
    window.location.href = "../../index.html";
  }

  resultLoad(loadState);
  handleMessage(messageState);
  handleISSet();
  getAuth(loadState);
};

/*
 * Student Records => Dealing With Student Records
 */

const handleSettingSubmit = (isSet) => {
  const school = () => {
    if (document.querySelector(".school").value === "1") {
      return "Secondary";
    } else if (document.querySelector(".school").value === "2") {
      return "Primary";
    }
  };

  const gender = () => {
    if (document.querySelector(".gender").value === "1") {
      return "M";
    } else if (document.querySelector(".gender").value === "2") {
      return "F";
    }
  };

  let studentData = {
    studentName: document.querySelector(".name").value,
    studentClass: document.querySelector(".class").value,
    studentAdmissionNo: document.querySelector(".adminNo").value,
    studentSportHouse: document.querySelector(".sport").value,
    studentAttendance: document.querySelector(".attendance").value,
    studentSchool: school(),
    studentGender: gender(),
  };

  // Setting Student Class Values to LocalStorage
  this.localStorage.setItem("studentData", JSON.stringify(studentData));

  // Setting isSet
  this.localStorage.setItem("isSet", isSet);

  // Redirection to General Settings

  window.location.href = "studmark.html";
  this.preventDefault();
};

/*
 * Dashboard => Dealing With General Student Settings
 */

const handleDashboardSubmit = (isSet) => {
  let settingsData = {
    session: document.querySelector(".session").value,
    term: document.querySelector(".term").value,
    nextTermBegin: document.querySelector(".next").value,
    population: document.querySelector(".population").value,
    phone: {
      first: document.querySelector(".phone1").value,
      second: document.querySelector(".phone2").value,
    },
    secondary: {
      name: document.querySelector(".secondaryName").value,
      address: document.querySelector(".secondaryAddress").value,
    },
    primary: {
      name: document.querySelector(".primaryName").value,
      address: document.querySelector(".primaryAddress").value,
    },
  };

  // Setting School Session Values to LocalStorage
  this.localStorage.setItem("settingsData", JSON.stringify(settingsData));

  // Setting isSet
  this.sessionStorage.setItem("set", isSet);

  // Redirection to Student Marks
  window.location.href = "studdetails.html";
};

/*
 * Student Marks => Dealing With Student Marks
 */

const handleMarksSubmit = () => {
  let studentScores = [
    (first = {
      subject: document.querySelector(".firstsubject").value,
      firstca: document.querySelector(".firstsubjectca1").value,
      secondca: document.querySelector(".firstsubjectca2").value,
      exam: document.querySelector(".firstsubjectexam").value,
      position: document.querySelector(".firstposition").value,
      highestscore: document.querySelector(".firsthigh").value,
      lowestscore: document.querySelector(".firstlow").value,
    }),
    (second = {
      subject: document.querySelector(".secondsubject").value,
      firstca: document.querySelector(".secondsubjectca1").value,
      secondca: document.querySelector(".secondsubjectca2").value,
      exam: document.querySelector(".secondsubjectexam").value,
      position: document.querySelector(".secondposition").value,
      highestscore: document.querySelector(".secondhigh").value,
      lowestscore: document.querySelector(".secondlow").value,
    }),
    (third = {
      subject: document.querySelector(".thirdsubject").value,
      firstca: document.querySelector(".thirdsubjectca1").value,
      secondca: document.querySelector(".thirdsubjectca2").value,
      exam: document.querySelector(".thirdsubjectexam").value,
      position: document.querySelector(".thirdposition").value,
      highestscore: document.querySelector(".thirdhigh").value,
      lowestscore: document.querySelector(".thirdlow").value,
    }),
    (fourth = {
      subject: document.querySelector(".fourthsubject").value,
      firstca: document.querySelector(".fourthsubjectca1").value,
      secondca: document.querySelector(".fourthsubjectca2").value,
      exam: document.querySelector(".fourthsubjectexam").value,
      position: document.querySelector(".fourthposition").value,
      highestscore: document.querySelector(".fourthhigh").value,
      lowestscore: document.querySelector(".fourthlow").value,
    }),
    (fifth = {
      subject: document.querySelector(".fifthsubject").value,
      firstca: document.querySelector(".fifthsubjectca1").value,
      secondca: document.querySelector(".fifthsubjectca2").value,
      exam: document.querySelector(".fifthsubjectexam").value,
      position: document.querySelector(".fifthposition").value,
      highestscore: document.querySelector(".fifthhigh").value,
      lowestscore: document.querySelector(".fifthlow").value,
    }),
    (sixth = {
      subject: document.querySelector(".sixthsubject").value,
      firstca: document.querySelector(".sixthsubjectca1").value,
      secondca: document.querySelector(".sixthsubjectca2").value,
      exam: document.querySelector(".sixthsubjectexam").value,
      position: document.querySelector(".sixthposition").value,
      highestscore: document.querySelector(".sixthhigh").value,
      lowestscore: document.querySelector(".sixthlow").value,
    }),
    (seventh = {
      subject: document.querySelector(".seventhsubject").value,
      firstca: document.querySelector(".seventhsubjectca1").value,
      secondca: document.querySelector(".seventhsubjectca2").value,
      exam: document.querySelector(".seventhsubjectexam").value,
      position: document.querySelector(".seventhposition").value,
      highestscore: document.querySelector(".seventhhigh").value,
      lowestscore: document.querySelector(".seventhlow").value,
    }),
    (eighth = {
      subject: document.querySelector(".eighthsubject").value,
      firstca: document.querySelector(".eighthsubjectca1").value,
      secondca: document.querySelector(".eighthsubjectca2").value,
      exam: document.querySelector(".eighthsubjectexam").value,
      position: document.querySelector(".eighthposition").value,
      highestscore: document.querySelector(".eighthhigh").value,
      lowestscore: document.querySelector(".eighthlow").value,
    }),
    (nineth = {
      subject: document.querySelector(".ninethsubject").value,
      firstca: document.querySelector(".ninethsubjectca1").value,
      secondca: document.querySelector(".ninethsubjectca2").value,
      exam: document.querySelector(".ninethsubjectexam").value,
      position: document.querySelector(".ninethposition").value,
      highestscore: document.querySelector(".ninethhigh").value,
      lowestscore: document.querySelector(".ninethlow").value,
    }),
    (tenth = {
      subject: document.querySelector(".tenthsubject").value,
      firstca: document.querySelector(".tenthsubjectca1").value,
      secondca: document.querySelector(".tenthsubjectca2").value,
      exam: document.querySelector(".tenthsubjectexam").value,
      position: document.querySelector(".tenthposition").value,
      highestscore: document.querySelector(".tenthhigh").value,
      lowestscore: document.querySelector(".tenthlow").value,
    }),
    (eleventh = {
      subject: document.querySelector(".eleventhsubject").value,
      firstca: document.querySelector(".eleventhsubjectca1").value,
      secondca: document.querySelector(".eleventhsubjectca2").value,
      exam: document.querySelector(".eleventhsubjectexam").value,
      position: document.querySelector(".eleventhposition").value,
      highestscore: document.querySelector(".eleventhhigh").value,
      lowestscore: document.querySelector(".eleventhlow").value,
    }),
    (twelveth = {
      subject: document.querySelector(".twelvethsubject").value,
      firstca: document.querySelector(".twelvethsubjectca1").value,
      secondca: document.querySelector(".twelvethsubjectca2").value,
      exam: document.querySelector(".twelvethsubjectexam").value,
      position: document.querySelector(".twelvethposition").value,
      highestscore: document.querySelector(".twelvethhigh").value,
      lowestscore: document.querySelector(".twelvethlow").value,
    }),
  ];

  // Setting School Session Values to LocalStorage
  this.localStorage.setItem("studentScores", JSON.stringify(studentScores));

  // Setting isSet
  this.sessionStorage.setItem("isSet", isSet);

  // Redirection to Student Marks
  window.location.href = "physkills.html";
};

/*
 * Skills and Behavior => Dealing With Student Skills and Behavior
 */

const handleSkillsSubmit = (isSet) => {
  let skills = {
    fluency: document.querySelector(".fluence").value,
    tools: document.querySelector(".tool").value,
    practical: document.querySelector(".physical").value,
    sport: document.querySelector(".sport").value,
    attentiveness: document.querySelector(".attentiveness").value,
    neatness: document.querySelector(".neatness").value,
    obedience: document.querySelector(".obedience").value,
    puntuality: document.querySelector(".puntuality").value,
    control: document.querySelector(".control").value,
    handwriting: document.querySelector(".writing").value,
  };

  // Setting School Session Values to LocalStorage
  this.localStorage.setItem("skills", JSON.stringify(skills));

  // Setting isSet
  this.sessionStorage.setItem("set", isSet);

  // Redirection to Remarks
  window.location.href = "remark.html";
};
/*
 * Skills and Behavior => Dealing With Student Skills and Behavior
 */

const handleRemarkSubmit = () => {
  // Setting School Session Values to LocalStorage
  let remarks = {
    teachersRemark: document.querySelector(".tremark").value,
    PrincipalsRemark: document.querySelector(".premark").value,
  };
  localStorage.setItem("remarks", JSON.stringify(remarks));

  // Redirection to Result
  window.location.href = "result.html";

  // console.log(window.location.href = "result.html");
  // this.preventDefault();
};

/*
 * Logout => Dealing Wtih Logout
 */

const handleLogout = () => {
  sessionStorage.removeItem("isLogin");
  window.location.href = "../../";
};

/*
 * Result Handling => Dealing Wtih Result
 */

// Getting data for the student name in Result
let resultLoad = (load) => {
  if (load) {
    // Getting data for the student name in Result
    const dashboard = JSON.parse(localStorage.getItem("studentData"));
    const settings = JSON.parse(localStorage.getItem("settingsData"));
    const studentScores = JSON.parse(localStorage.getItem("studentScores"));
    const skills = JSON.parse(localStorage.getItem("skills"));
    const remarks = JSON.parse(localStorage.getItem("remarks"));

    if (dashboard.studentSchool === "secondary") {
      document.querySelector(".schoolName").innerHTML = settings.secondary.name;
      document.querySelector(".address").innerHTML = settings.secondary.address;
    } else {
      document.querySelector(".schoolName").innerHTML = settings.primary.name;
      document.querySelector(".address").innerHTML = settings.primary.address;
    }
    document.querySelector(".phone1").innerHTML = settings.phone.first;
    document.querySelector(".phone2").innerHTML = settings.phone.second;
    document.querySelector(".studentName").innerHTML = dashboard.studentName;
    document.querySelector(".class").innerHTML = dashboard.studentClass;
    document.querySelector(".session").innerHTML = settings.session;
    document.querySelector(".admno").innerHTML = dashboard.studentAdmissionNo;
    document.querySelector(".gender").innerHTML = dashboard.studentGender;
    // document.querySelector(".age").innerHTML = dashboard.age;
    document.querySelector(".sportHouse").innerHTML =
      dashboard.studentSportHouse;
    document.querySelector(".begins").innerHTML = settings.nextTermBegin;
    document.querySelector(".attend").innerHTML = dashboard.studentAttendance;
    document.querySelector(".fluency").innerHTML = skills.fluency;
    document.querySelector(".tools").innerHTML = skills.tools;
    document.querySelector(".handwriting").innerHTML = skills.handwriting;
    document.querySelector(".practical").innerHTML = skills.practical;
    document.querySelector(".sport").innerHTML = skills.sport;
    document.querySelector(".attentive").innerHTML = skills.attentiveness;
    document.querySelector(".neatness").innerHTML = skills.neatness;
    document.querySelector(".obedience").innerHTML = skills.obedience;
    document.querySelector(".punctuality").innerHTML = skills.puntuality;
    document.querySelector(".control").innerHTML = skills.control;
    document.querySelector(".teacherRemark").innerHTML = remarks.teachersRemark;
    document.querySelector(".principalRemark").innerHTML =
      remarks.PrincipalsRemark;

    studentScores.map((scores) => {
      let totalScore =
        Number.parseInt(scores.firstca) +
        Number.parseInt(scores.secondca) +
        Number.parseInt(scores.exam);
      let grade,
        remark = "";
      if (totalScore > 75) {
        grade = "C4";
        remark = "CREDIT";
      } else if (totalScore < 75) {
        grade = "f9";
        remark = "FAILED";
      }
      let subjectScores =
        `<tr>
                                                      <th colspan="5"> ` +
        scores.subject +
        ` </th>
                                                      <td>20</td>
                                                      <td class="firstca"> ` +
        scores.firstca +
        ` </td>
                                                      <td>20</td>
                                                      <td class="secondca"> ` +
        scores.secondca +
        ` </td>
                                                      <td>60</td>
                                                      <td class="exam"> ` +
        scores.exam +
        ` </td>
                                                      <td>100</td>
                                                      <td class="scores"> ` +
        totalScore +
        ` </td>
                                                      <td>100</td>
                                                      <td>20</td>
                                                      <td class="position"> ` +
        scores.position +
        ` </td>
                                                      <td class="grade"> ` +
        grade +
        ` </td>
                                                      <td class="remark"> ` +
        remark +
        ` </td>
                                                    </tr>`;

      document.querySelector(".scores").innerHTML += subjectScores;
      // console.log(subjectScores);
    });

    document.querySelector(".acterm").innerHTML = settings.term;
    document.querySelector(".summary").innerHTML = settings.term;
    document.querySelector(".population").innerHTML = settings.population;
  }
};

/* ############# LOGIC CALCULATIONS ############## */
