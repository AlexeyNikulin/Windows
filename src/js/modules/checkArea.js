const checkArea = () => {
    const windowWidth = document.querySelector('#width'),
          windowHeight = document.querySelector('#height');

    let width = false,
        height = false;

    if (windowWidth.value === '') {
        windowWidth.style.border = '1px solid red';
        width = true;
    }

    if (windowHeight.value === '') {
        windowHeight.style.border = '1px solid red';
        height = true;
    }

    function bindEventToElement(event, elem) {
        elem.addEventListener(event, () => {
            elem.style.border = '1px solid #ccc';
        });
    }

    bindEventToElement('input', windowWidth);
    bindEventToElement('input', windowHeight);

    return width || height;
};

export default checkArea;