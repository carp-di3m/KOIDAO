
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
        duration: 7,
        x: 175,
        autoAlpha: 0.8,
        ease: "back.out(0.5)"
    });
const tl2 = new TimelineMax();

    tl2.set('.redKOI', {
        x: 600,
        y: -30,
        autoAlpha: 0
    })
        .to('.redKOI', {
            duration: 7,
            x: -175,
            autoAlpha: 0.95,
            ease: "back.out(0.5)"
        });

const tl3 = new TimelineMax();

    tl3.set(".ethFRAME", {
        y: 700,
        autoAlpha: 0
    })
        .to(".ethFRAME", {
            duration: 3,
            y: 0,
            autoAlpha: 1.5,
            ease: "back.out(2)"
        })