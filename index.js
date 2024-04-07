const observer = new IntersectionObserver((entries)=>{
    entries.forEach((ent)=>{
        console.log(ent);
        if(ent.isIntersecting){
            ent.target.classList.add('show');
        }
    })
})
const animation = document.querySelectorAll('.anim') ;
animation.forEach((el)=>{
    observer.observe(el);
})