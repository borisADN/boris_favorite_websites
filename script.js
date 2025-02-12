// https://scrollrevealjs.org/guide/hello-world.html

const scrollRevealOption ={
    distance : "50px",
    origin : "bottom",
    duration : 1000,
    reset : true
}

ScrollReveal().reveal(".website",{
    ...scrollRevealOption,
   interval:500});

// ScrollReveal().reveal(".website",{
//     ...scrollRevealOption,
//     origin: "right",
// });

// ScrollReveal().reveal(".website",{
//     ...scrollRevealOption,
//     delay:500
// });
