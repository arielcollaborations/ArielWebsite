const hamburger = document.querySelector(".hamburger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const mobileNav = document.querySelector('.mobileNav');

/* Card Variables for Changing Content on Teaching */

const card1 = document.querySelector('.card-1')
const p1 = document.querySelector('.p1');
const card2 = document.querySelector('.card-2')
const p2 = document.querySelector('.p2');
const card3 = document.querySelector('.card-3')
const p3 = document.querySelector('.p3');
const card4 = document.querySelector('.card-4')
const p4 = document.querySelector('.p4');
const card5 = document.querySelector('.card-5')
const p5 = document.querySelector('.p5');
const card6 = document.querySelector('.card-6')
const p6 = document.querySelector('.p6');
const card7 = document.querySelector('.card-7')
const p7 = document.querySelector('.p7');
const card8 = document.querySelector('.card-8')
const p8 = document.querySelector('.p8');
const card9 = document.querySelector('.card-9')
const p9 = document.querySelector('.p9');



hamburger.addEventListener('click', () => {
    bar1.classList.toggle("animateBar1");
    bar2.classList.toggle("animateBar2");
    bar3.classList.toggle("animateBar3");
    mobileNav.classList.toggle('openDrawer');
    document.body.classList.toggle('no-scroll');
})

card1.addEventListener('click', () => {
    if (p1.textContent === "Investigating Justice") {
        p1.textContent = 'Brandeis University – Legal Studies | Spring 2023';
    } else {
        p1.textContent = 'Investigating Justice';
    };
});

card2.addEventListener('click', () => {
    if (p2.textContent === "United States Policing in Context: Past, Present, Future") {
        p2.textContent = 'Brandeis University - Department of Anthropology | Fall 2022';
    } else {
        p2.textContent = 'United States Policing in Context: Past, Present, Future';
    };
});

card3.addEventListener('click', () => {
    if (p3.textContent === "American Crime Story: The making of crime and disease and their cultural representations") {
        p3.textContent = 'Brandeis University | Spring 2022';
    } else {
        p3.textContent = "American Crime Story: The making of crime and disease and their cultural representations";
    };
});

card4.addEventListener('click', () => {
    if (p4.textContent === "Data & Society") {
        p4.textContent = 'University of Houston - Honors College | Summer 2021 - Spring 2022';
    } else {
        p4.textContent = 'Data & Society';
    };
});

card5.addEventListener('click', () => {
    if (p5.textContent === "B'more: From Incarceration to Liberation") {
        p5.textContent = 'Johns Hopking University - Department of the History of Science and Technology | Winter 2021';
    } else {
        p5.textContent = "B'more: From Incarceration to Liberation";
    };
});

card6.addEventListener('click', () => {
    if (p6.textContent === "Engineering Cultures Instructor") {
        p6.textContent = 'Virginia Polytechnic Institute and State University - Science and Technology in Society | Summer 2017- Spring & Fall 2020';
    } else {
        p6.textContent = "Engineering Cultures Instructor";
    };
});

card7.addEventListener('click', () => {
    if (p7.textContent === "Instructor of Critical Theory") {
        p7.textContent = 'University of Texas Medical Branch - Joint Admission Medical Program | Summer 2016';
    } else {
        p7.textContent = "Instructor of Critical Theory";
    };
});

card8.addEventListener('click', () => {
    if (p8.textContent === "History of Medicine Teaching Assistant") {
        p8.textContent = 'University of Texas Medical Branch - School of Medicine | Summer 2016';
    } else {
        p8.textContent = "History of Medicine Teaching Assistant";
    };
});

card9.addEventListener('click', () => {
    if (p9.textContent === "Creative Expression Project: Humanities, Ethics and Professionalism") {
        p9.textContent = 'University of Texas Medical Branch - School of Medicine | Summer 2016';
    } else {
        p9.textContent = "Creative Expression Project: Humanities, Ethics and Professionalism";
    };
});

