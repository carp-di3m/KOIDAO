
const yellowKoi = document.querySelector(".yellowKOI");
const redKoi = document.querySelector(".redKOI");

const tl = new TimelineMax();

// gsap.from(".yellowKOI", {duration: 2, x: -600})
// gsap.from(".redKOI", {duration: 2, x: 600})
// gsap.from(".ethFRAME", {duration: 2, y: -600})

tl.set('.yellowKOI', {
    x: -600,
    y: 30,
    autoAlpha: 0
})
    .to('.yellowKOI', {
        duration: 3,
        x: 175,
        autoAlpha: 1
    });
const tl2 = new TimelineMax();

    tl2.set('.redKOI', {
        x: 600,
        y: -30,
        autoAlpha: 0
    })
        .to('.redKOI', {
            duration: 3,
            x: -175,
            autoAlpha: 1
        });

const tl3 = new TimelineMax();

    tl3.set(".ethFRAME", {
        y: 700,
        autoAlpha: 0
    })
        .to(".ethFRAME", {
            duration: 3,
            y: 0,
            autoAlpha: 1
        })