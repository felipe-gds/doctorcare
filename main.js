window.addEventListener('scroll', onScroll) /*Dessa forma o evento já é carregado antes da página, evitando o erro de referencia no console*/

onScroll()

function onScroll(){
    showNavOnScroll()
    showBackToTopButtonScroll()
    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)

}


function activateMenuAtCurrentSection(section){
    //linha - meio da tela
    const targetLine = scrollY + innerHeight / 2

    // dados necessários...
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    // Verificar se a seção passou da linha
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop 

    // Verificar se a base está abaixo da linha
    const sectionEndsAt = sectionTop + sectionHeight
    const sectionEndPassedTargetLine = targetLine >= sectionEndsAt 

    //limite da seção
    const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`) // ( *= ) que contenha

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
} 
 

function showNavOnScroll(){
    if(scrollY > 0){
        navId.classList.add('scroll'); // assim acrescenta a class "scroll" adicionando as CSS mudando o NAV (verde)
    }else {
        navId.classList.remove('scroll');
    }
}

function showBackToTopButtonScroll(){
    if(scrollY > 500){
        backToTopButton.classList.add('show'); 
    }else {
        backToTopButton.classList.remove('show');
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded');
}

function closeMenu(){
    document.body.classList.remove('menu-expanded');
}

ScrollReveal( {
    origin: 'top',
    distance: '30px',
    duration: 700,
    //o acento agudo permite pular linha
} ).reveal(`
    #home,
    #home img, 
    #home .stats,
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content
    #contact,
    #contact img`);



    