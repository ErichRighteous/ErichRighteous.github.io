const nes = document.querySelector('.nes');
const scroller = nes.querySelector('.scroller');
const next = nes.querySelector('.butn.next');
const prev = nes.querySelector('.butn.prev');
const itemWidth = nes.querySelector('.scrollPic').clientWidth;

console.log(nes, scroller, next, prev, itemWidth)

next.addEventListener('click', scrollToNextItem);
prev.addEventListener('click', scrollToPrevItem);

function scrollToNextItem() {
    if(Math.ceil(scroller.scrollLeft)+10 < scroller.scrollWidth - itemWidth)
    scroller.scrollBy({left: itemWidth, top: 0, behavior: 'smooth'});
    else
    scroller.scrollTo({left: 0, top: 0, behavior: 'smooth'});

}
function scrollToPrevItem() {
    
    if(scroller.scrollLeft != 0)
        scroller.scrollBy({left: -itemWidth, top: 0, behavior: 'smooth'});
    else
        scroller.scrollTo({left: scroller.scrollWidth, top: 0, behavior: 'smooth'})
}



