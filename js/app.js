document.addEventListener('DOMContentLoaded', function () { // console.log('DOM ok');

    var allImg = document.getElementsByTagName('img'); // console.log(allImg);
    var btnHide = document.getElementById('hideButton'); // console.log(btnHide);
    var btnShow = document.getElementById('showButton'); // console.log(btnShow);
    var input = document.getElementById('tagInput'); // console.log(input);
    var textShow = null;
    var textHide = null;

    btnShow.addEventListener('click', function () { // console.warn('Show click'); // console.error(input.value);

        textShow = input.value;
        input.value = ''; // console.log(textShow);

        for (var i = 0; i < allImg.length; i++) { // console.log(allImg[i].dataset); // console.warn(allImg[i].dataset.tag);
            var onlyInputText = allImg[i].dataset.tag.indexOf(textShow); // console.log('indexOf() ' + onlyInputText);

            allImg[i].classList.add('invisible');

            if (onlyInputText >= 0) { // console.warn(allImg[i].dataset.tag);
                allImg[i].classList.remove('invisible')
            }

        }

    });

    btnHide.addEventListener('click', function () { // console.warn('Hide click'); // console.error(input.value);

        textHide = input.value;
        input.value = ''; // console.log(textHide);

        for (var i = 0; i < allImg.length; i++) { // console.log(allImg[i].dataset); // console.warn(allImg[i].dataset.tag);
            var onlyInputText = allImg[i].dataset.tag.indexOf(textHide); // console.log('indexOf() ' + onlyInputText);

            allImg[i].classList.remove('invisible');

            if (onlyInputText >= 0) { // console.warn(allImg[i].dataset.tag);
                allImg[i].classList.add('invisible')
            }

        }

    });

});

// Przy wyszukiwaniu tagu bike, pokazują się także obrazy zawierające słowo bike w tagu np. motorbike.
