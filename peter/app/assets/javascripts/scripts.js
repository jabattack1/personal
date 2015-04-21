console.log("MOTHA!");

function about_onClick(e) {
	console.log('about');
	$('#content').empty();
	$('#content').append("<p>Peter Hahn</p>");
	// e.preventDefault();
	// return false;
  }

function resume_onClick() {
	console.log('resume');
	$('#content').empty();
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
