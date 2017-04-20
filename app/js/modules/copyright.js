var today = new Date();
var year = today.getFullYear();

var el = document.getElementById('copyright');
el.innerHTML = '<p property="dc:rights">&copy;<span property="dc:dateCopyrighted"> 2013-' + year + '<span property="dc:publisher"> Anwar Bolatov</span></p>';