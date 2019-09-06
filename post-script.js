function openForm(){

	document.getElementById("myForm").style.display="block";
}

function closeForm(){

	document.getElementById("myForm").style.display="none";
}

function PutPost(t, a, c){
	var x = document.createElement("DIV");
	x.className = "post";
	x.id="p";
	var comm = "<h3 class=\"title\">Comments</h3>" + "<textarea id= \"com\" class=\"comment-box\" placeholder=\"Write your comment here!\"></textarea>" + "<button class=\"comment-button\" onclick=\"putComment()\">Comment</button>";
	x.innerHTML = "<h1 class = \"title\">" + t + "</h1>" + "<h4 class = \"author\">By: " + a + "</h4>" + "<div class=\"content\"><p>" + c + "</p></div>" + comm;
	document.getElementById("posts").appendChild(x);
}

function getPost() {
	
	var t = document.form.title.value;
	var a =  document.form.author.value;
	var c = document.form.content.value; 

	var p = new PutPost(t, a, c);

	document.form.reset();
}

function putComment(){
	var x = document.getElementById("com").value;
	var y=document.createElement("DIV");
	y.id="c";
	y.innerHTML= "<p class=\"comment-text\">" + x + "</p>" + "<input class=\"reply-box\" id=\"rep\" placeholder = \"Write your reply to the comment here!\">" + "<button class=\"comment-button\" onclick=\"putReply()\">Reply</button>";
	document.getElementById("p").appendChild(y);
}

function putReply(){
	var x = document.getElementById("rep").value;
	var y=document.createElement("DIV");
	y.innerHTML= "<p class=\"reply-text\">" + x + "</p>";
	document.getElementById("p").appendChild(y);
}
