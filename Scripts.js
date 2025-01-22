const hamburger = document.getElementsByClassName('mobile-nav-arrow')[0];

function toggleMobileMenu(){
    let menu = document.getElementById('nav-menu');
    menu.classList.toggle('show');
    hamburger.classList.toggle('flip-horizontally')
}

hamburger.addEventListener('click', toggleMobileMenu);



function filterArticles(){

    let allSkills = document.getElementsByclass("skills")[0];

    let filterBGrafic = document.getElementById("grafik");
    let filterBProg = document.getElementById("programmering");
    let filterBDesign = document.getElementById("design");

    for (const child of articles.children) {
        child.style.position = "absolute";
        child.style.visibility = "hidden";
    }

    if (filterBGrafic.checked) {
        for (const child of allSkills.children) {

            if (child.classList.contains("filter-grafik")) {
                child.style.position = "relative";
                child.style.visibility = "visible";
            }

        }
    }

    if (filterBProg.checked) {
        for (const child of allSkills.children) {

            if (child.classList.contains("filter-programmering")) {
                child.style.position = "relative";
                child.style.visibility = "visible";
            }

        }
    }

    if (filterBDesign.checked) {
        for (const child of allSkills.children) {

            if (child.classList.contains("filter-design")) {
                child.style.position = "relative";
                child.style.visibility = "visible";
            }

        }
    }

}