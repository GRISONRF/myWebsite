
// Mobile Menu

document.getElementById("hamburguer-icon").onclick = function(){
  document.getElementById("sliding-header-menu-outer").style.right = "0";
}

document.getElementById("sliding-header-menu-close-button").onclick = function(){
  document.getElementById("sliding-header-menu-outer").style.right = "-320px";
}

// About us Tab

var aboutUs = {
  "Education": " <ul><li>Bachelor's degree in Business Administration - 2018</li><li>Complete Javascript & jQuery course with bonus Vue JS intro - Udemy</il><li>Python course - Codecademy</li><li>Javascript course - Codecademy</li><li>React course - Codecademy </li> </ul> ",
  "Work experience": "From 2010 to 2019, I've had numerous work and intern experiences related to business and/or marketing.<br><br> I worked in a Bank, in a Investment Institute and in 2 Governmental Institutions. <br><br> In 2016 I had my own small business, and among many other tasks, I was responsible for creating business plans, arranging financing, reviewing sales, developing marketing strategies, overseeing daily activities, and identifying business opportunities. ",
  "Programming": "I\'m still in the beginning of my journey as a programmer, and so far I only have basic projects to show, such as: <ul><li>This website (JS)</li><li>Self-Service machine (JS)</li><li>T-shirts e-commerce (JS)</li><li>War game (Python)</li><li>Coin toss game (Python)</li></ul>"
};

var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";
var aboutUsTabs = document.getElementsByClassName("single-tab");

for (var a = 0; a < aboutUsTabs.length; a++) {
  aboutUsTabs[a].onclick = function(){
    var clickedValue = this.innerHTML;
    document.getElementById("box-text").innerHTML = aboutUs[clickedValue]

    for (var b = 0; b < aboutUsTabs.length; b++) {
      aboutUsTabs[b].style["background-color"] = unseletectedColor;
      aboutUsTabs[b].style["font-weight"] = "normal"
    }

    this.style["background-color"] = seletectedColor;
    this.style["font-weight"] = "bold";
  }
}


// Service slider

var ourServices = [
  {
    'title': 'Who am I',
    'text':'<br><br>Rafaela Grison, I was born in Maceió - Brazil in 1993<br><br>After earning my Bachelors in Business Administration and years of experience in the field, I decided to come to Denver - Colorado for an exchange program, hoping to improve my English, take business courses and gain the skills I needed to be a better professional.<br>Over the years I got more and more involved and interested in Software Engineering, and I\'ve been getting ready to make this career change for almost 1 year now!'
  },

  {
    'title': 'My professional goals',
    'text': '<br><br> To have excellent Frontend and Backend knowledge - Learn and be good in Java, SQL Databases and Data Analytics. <br> To keep learning and improving my Debugging skills and Logical thinking. <br>Improve team collaboration and communication skills.<br>To be productive and deliver value to the company.<br>'
  },

  {
    'title': 'My personal goals',
    'text': '<br><br>Be a better rock-climber! To lead 5.12 inside and 5.11a outside by the end of the year.<br> Take my skydiving A-license.<br>Travel all over the world!<br>Give back to the community in ways that matter to me.'
  }
  
];


var previousArrow = document.getElementById("service-previous");
var nextArrow = document.getElementById("service-next");
var serviceTitleArea = document.getElementById("service-title");
var serviceTexteArea = document.getElementById("service-text");


var currentService = 0;

document.getElementById('clicking').onclick = function(){
  alert("Sorry, it doens't take you anywhere! I am gonna fix this soon.")
}

document.getElementById('clicking2').onclick = function(){
  alert("Sorry, it doens't take you anywhere! I am gonna fix this soon.")
}


nextArrow.onclick = function(){
  if (currentService == (ourServices.length - 1)){
    currentService = 0;
  } else {
      currentService += 1;
  }

  var title = ourServices[currentService].title;
  var text = ourServices[currentService].text;
  serviceTitleArea.innerHTML = title;
  serviceTexteArea.innerHTML = text;
}

previousArrow.onclick = function(){
  if (currentService == 0){
    currentService = (ourServices.length - 1);
  } else {
      currentService -= 1;
  }
  
  var title = ourServices[currentService].title;
  var text = ourServices[currentService].text;
  serviceTitleArea.innerHTML = title;
  serviceTexteArea.innerHTML = text;
}


// Footer

document.getElementById("current_year").innerHTML = new Date().getFullYear();