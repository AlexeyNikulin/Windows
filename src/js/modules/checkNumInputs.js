const checkNumInputs = (selector) => {
    const phoneInputs = document.querySelectorAll(selector);

    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/g, '');
        });
    });

};

export default checkNumInputs;