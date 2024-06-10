/*navigator script*/

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');


navToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener ('click', () => {
        document.body.classList.remove('nav-open');
    })
})

/*works tab script*/

const tabs = document.querySelectorAll('.tab_btn');
const all_content = document.querySelectorAll('.content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');
        
        var line=document.querySelector('.line');
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";

        all_content.forEach(content=>{content.classList.remove('active')});
        all_content[index].classList.add('active');

    })

})

