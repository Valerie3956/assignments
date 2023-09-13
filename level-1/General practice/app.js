

var spouses = document.getElementsByTagName("li")
for (var i = 0; i < spouses.length; i++) {
    console.log(spouses[i].innerText)
}

//querySelector
//select a single element

var children = document.querySelectorAll("#SharpChildren > li")


for (var i = 0; i < children.length; i++) {
    children[i].textContent = "** REDACTED **"
}

//querySelectorAll
//select all elements

var spouses = document.querySelectorAll("#SharpByMarriage > li")
for (var i = 0; i < spouses.length; i++) {
    spouses[i].textContent = "** EVEN MORE REDACTED **"
}