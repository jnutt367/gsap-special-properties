gsap.to("h1", { duration: 2, color: "white", textAlign: "center" });

//add code to experiment with stagger object
gsap.to("#freds img", {
    y: "-700",
    scale: 1.5,
    duration: 1,
    ease: "none",
    stagger: {
        amount: 2,
        from: "start",
        ease: "power2.inOut",

    }
});