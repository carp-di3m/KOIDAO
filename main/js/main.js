
const yellowKoi = document.querySelector(".yellowKOI");
const redKoi = document.querySelector(".redKOI");

const tl = new TimelineMax();

// gsap.from(".yellowKOI", {duration: 2, x: -600})
// gsap.from(".redKOI", {duration: 2, x: 600})
// gsap.from(".ethFRAME", {duration: 2, y: -600})

tl.set('.yellowKOI', {
    x: -600,
    y: 30,
    autoAlpha: 0,
    rotation: 180
})
    .to('.yellowKOI', {
        duration: 3,
        x: 175,
        autoAlpha: 0.95,
        // ease: "power3.out",
        rotation: 0
    });
const tl2 = new TimelineMax();

    tl2.set('.redKOI', {
        x: 600,
        y: -30,
        autoAlpha: 0,
        rotation: -180
    })
        .to('.redKOI', {
            duration: 3,
            x: -175,
            autoAlpha: 0.95,
            // ease: "power3.out",
            rotation: 0
        });

const tl3 = new TimelineMax();

    tl3.set(".ethFRAME", {
        
        autoAlpha: -0.1
    })
        .to(".ethFRAME", {
            duration: 10,
            y: 0,
            autoAlpha: 1,
            // rotation: 360
            ease: "back.out(1)"
        })