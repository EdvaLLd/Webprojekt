const hamburger = document.getElementsByClassName('mobile-nav-arrow')[0];

function toggleMobileMenu(){
    let menu = document.getElementById('nav-menu');
    menu.classList.toggle('show');
    hamburger.classList.toggle('flip-horizontally')
}

hamburger.addEventListener('click', toggleMobileMenu);



function filterSkills(selection, tagName){

    let allSkills = document.getElementsByClassName("skills");

    document.getElementsByClassName('dropdown-btn')[0].textContent = tagName;

    for (let skill of allSkills) {
        skill.style.position = "absolute";
        skill.style.visibility = "hidden";
    }
    for (let skill of allSkills) {
        if(skill.classList.contains(selection)){
            skill.style.position = "relative";
            skill.style.visibility = "visible";
        }
    }
}