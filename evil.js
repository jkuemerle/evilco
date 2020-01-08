(function () {
	var overlay = document.createElement("div");
	overlay.setAttribute("id","overlay");
	//overlay.style.opacity=0.5;
	overlay.style.backgroundColor="#FFFFFF";
	overlay.setAttribute("style","background-color:#FFFFFF");
	overlay.setAttribute("style","z-index: 1000");
	overlay.setAttribute("style","width:500px");
	overlay.setAttribute("style","height:500px");
	overlay.innerHTML = "<p>Session timed out, please reenter your credentials below</p><p>Username: <input type='text' /></p><p>Password: <input type='password'></p><p><input type='button' value='Log In' /></p>";   
   document.body.appendChild(overlay);
})();

