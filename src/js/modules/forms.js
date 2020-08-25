import {postData} from '../server/server';
import checkNumInputs from './checkNumInputs';

const forms = (state) => {

    const form = document.querySelectorAll('form');

    checkNumInputs('input[name="user_phone"]');

    const mesage = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            if (item.lastElementChild.classList.contains('status')) {
                item.lastElementChild.remove();
            }

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = mesage.loading;
            item.append(statusMessage);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = mesage.success;
                })
                .catch((error) => {
                    statusMessage.textContent = mesage.failure;
                })
                .finally(() => {
                    item.reset();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 2000);
                });
        });
    });
};

export default forms;