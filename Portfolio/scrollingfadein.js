
const About = document.querySelectorAll('.fade-in')
const Project_Items = document.querySelectorAll('.slide-in')

const appearoptions = {
  threshold: 0.25,
  rootMargin: "0px 0px -100px 0px"
}

const appearonScroll =  new IntersectionObserver
(function(entries,appearonScroll){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    }
    else{
      entry.target.classList.add('appear-in');
      appearonScroll.unobserve(entry.target);
    }
  })


}, appearoptions)


Project_Items.forEach(item => {
  appearonScroll.observe(item)
});

About.forEach(item => {
  appearonScroll.observe(item)
})