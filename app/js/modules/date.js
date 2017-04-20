var today = new Date();
var year = today.getFullYear();
var est = new Date('Sep 8, 2011 12:43:59');
var difference = today.getTime() - est.getTime();
difference = (difference / 31556900000);

var elMsg = document.getElementById('myExperience');
elMsg.textContent = Math.floor(difference) + ' years';

var el = document.getElementById('copyright');
el.innerHTML = '<p property="dc:rights">&copy;<span property="dc:dateCopyrighted"> 2013-' + year + '<span property="dc:publisher"> Anwar Bolatov</span></p>';

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var elDate = document.getElementById('todaysDate');
elDate.innerHTML = monthNames[today.getMonth()] + '<span>&nbsp;<span>' + year;