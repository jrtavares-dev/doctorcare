onScroll()

window.addEventListener('scroll', onScroll);

function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section){
    const targetLine = scrollY + innerHeight / 2

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    // console.log('Chegou ou passou da linha? ', sectionTopReachOrPassedTargetLine)


    const sectionEndsAt = sectionTop + sectionHeight

    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    // console.log('o fundo da seção passou da linha? ', sectionEndPassedTargetLine
    // )

    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)


    menuElement.classList.remove('active')
    if(sectionBoundaries) {
        menuElement.classList.add('active')
    }
}

function showNavOnScroll(){
    if (scrollY > 0) {
        document.querySelector('#navigation').classList.add('scroll');
    } else {
        document.querySelector('#navigation').classList.remove('scroll');
    }
}

function showBackToTopButtonOnScroll(){
    if(scrollY > 400){
        backToTopButton.classList.add('show');
    } else{
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded');
}

function closeMenu() {
    document.body.classList.remove('menu-expanded');
}

ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 700
}).reveal(`#home, 
 #home img, 
 #home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content,
#about .content img`);