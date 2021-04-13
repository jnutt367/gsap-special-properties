gsap.to("h1", { duration: 2, color: "white", textAlign: "center" });
gsap.to("p", { duration: 2, color: "red", textAlign: "center" });
//add code to experiment with stagger object
gsap.to("#freds img", {
    y: "-700",
    scale: 1.5,
    duration: 1,
    ease: "none",
    stagger: {
        amount: 2,
        from: "end",
        ease: "back",

    }
});