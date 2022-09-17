let faqContainer = document.querySelectorAll('.faq__block');
let faqAnswer = document.querySelectorAll('.faq__answer');


faqContainer.forEach((faqContainer) => {
    faqContainer.addEventListener(('click'), () => {
        faqContainer.classList.toggle('active')
    })
});