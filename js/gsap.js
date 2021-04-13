//add code to experiment with stagger object
gsap.to("#freds img", {
    y: -250,
    stagger: {
        amount: 1,
        from: "end"
    }
});