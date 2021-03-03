var released_projects = false;
var school_projects = false;
var gamejam_projects = false;
var prototypes_projects = false;
var other_projects = false;

var category = document.getElementById("released-items");

function releasedAff() {
  released_projects = !released_projects;
  category = document.getElementById("released-items");
  if (released_projects) { show(); }
  else { hide(); }
}

function schoolAff() {
    school_projects = !school_projects;
    category = document.getElementById("school-items");
    if (school_projects) { show(); }
    else { hide(); }
  }

  function gamejamAff() {
    gamejam_projects = !gamejam_projects;
    category = document.getElementById("gamejam-items");
    if (gamejam_projects) { show(); }
    else { hide(); }
  }

  function prototypesAff() {
    prototypes_projects = !prototypes_projects;
    category = document.getElementById("prototypes-items");
    if (prototypes_projects) { show(); }
    else { hide(); }
  }

  function otherAff() {
    other_projects = !other_projects;
    category = document.getElementById("other-items");
    if (other_projects) { show(); }
    else { hide(); }
  }

  function show(docId) {
    category.classList.add("visible-items");
    category.classList.remove("hidden-items");
    category.parentElement.firstElementChild.lastElementChild.classList.add("category-unwrapped");
  }

  function hide(docId) {
    category.classList.add("hidden-items");
    category.classList.remove("visible-items");
    category.parentElement.firstElementChild.lastElementChild.classList.remove("category-unwrapped");
  }