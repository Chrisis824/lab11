(function(){

  let myName = document.getElementById("my-name"); 
  let getName = document.getElementById("get-name");
  let userName = document.getElementById("user-name"); 
  let lastName = document.getElementById("last-name"); 
  let nameStored = localStorage.name;
  let lastnameStored = localStorage.lastname;
  console.log(`Name on page load: ${nameStored}`);
  console.log(`Name on page load: ${lastnameStored}`);
  let btnclear = document.getElementById("clearbtn");
  
  if(nameStored) {
    // If there's a name in localStorage, use it:
    myName.innerHTML = `again ${nameStored} ${lastnameStored}`;
    console.log(`Name stored is: ${nameStored}`);
  }
  else {
    // There's no name in localStorage:
    myName.innerHTML = "stranger";
    console.log(`No name stored`);
  }

  function PerformGreeting() {
    if(userName.value === "") {
      alert("Please enter a name");
      userName.focus();
    }
    // Get the name the user entered:
    nameStored = userName.value; //+ " " + lastName.value;
	lastnameStored = lastName.value;
    // Show the name in "my-name":
    myName.innerHTML = nameStored + " " + lastnameStored;
    // Put the name into localStorage:
    localStorage.name = nameStored;
	localStorage.lastname = lastnameStored;
    console.log(`New name stored: ${nameStored}`);
	console.log(`New name stored: ${lastnameStored}`);
    return false;
  }

  // Listens for a form submit action: 
  if (typeof event === "undefined") {
    getName.onsubmit = PerformGreeting; // for Firefox
  }
  else {
    getName.addEventListener("submit", PerformGreeting);
    event.preventDefault();
  }
  
  function emptyStorage() {
  localStorage.clear();
  }
  
  document.getElementById("clearbtn").onclick= emptyStorage;

}());
