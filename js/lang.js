lang = "";
storedLang = localStorage.getItem("lang");

function changeLang(newLang){
    if (newLang === null || (newLang != "en" && newLang != "fr")) {
        lang = localStorage.setItem("lang","en");
        lang = "en";
    }
    else {
        lang = newLang;
    }
    
    document.body.className = lang;
    localStorage.setItem("lang",lang);
}

function switchLang() {
    if(lang == "en"){
        changeLang("fr");
    }
    else{
        console.log(lang);
        changeLang("en");
    }
};

changeLang(storedLang);