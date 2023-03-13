const buttonsCarrossel = document.querySelectorAll('.button');

const images = document.querySelectorAll('.images');


buttonsCarrossel.forEach((button, index) => {
    button.addEventListener('click', () => {
        disabledButtonSelect();

        selectButtonCarrossel(button);

        missingImageActive();

        showImageFromBack(index);
    })
})

function showImageFromBack(index) {
    images[index].classList.add('active');
}

function selectButtonCarrossel(button) {
    button.classList.add('select');
}

function missingImageActive() {
    const imageActive = document.querySelector('.active');

    imageActive.classList.remove('active');
}

function disabledButtonSelect() {
    const buttonSelect = document.querySelector('.select');

    buttonSelect.classList.remove('select');
}