console.log("MOTHA!");

var template = "<h3 class='animated fadeIn'>Peter Hahn</h3>";
var headshot = "<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/headshot_zpssoavnc6u.jpg' class='animated fadeIn' id='photo'>";
var resume = "<iframe src=\"https://docs.google.com/file/d/0B_QUho3Z8WoPck0xRjA5akRvYjA/preview\" width=\"740\" height=\"580\" class='animated fadeIn' id='resume'></iframe>";

function about_onClick(e) {
	console.log('about');

	$('#content').empty();
	$('#content').append(template);
	$('#content').append(headshot);
	// e.preventDefault();
	// return false;
  }

function resume_onClick() {
	console.log('resume');
	$('#content').empty();
	$('#content').append(resume);
   // alert('a_onClick');
  }

function contact_onClick() {
	console.log('contact');
	$('#content').empty();
   // alert('a_onClick');
  }

function project_onClick() {
	console.log('project');
	$('#content').empty();
   // alert('a_onClick');
  }
