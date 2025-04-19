# Projects related to Events

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-qvtyupty?file=index.html)


## Project 1 - Unlimited Colors


```javascript
//generate random color

    const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
    };

    let intervalId;

    console.log(randomColor());

    const startChangingColor = function () {
    if(intervalId){
        intervalId = setInterval(changeBgColor, 1000);
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
    };

    const stoptChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
    };

    document.querySelector('#start').addEventListener('click', startChangingColor);

    document.querySelector('#stop').addEventListener('click', stoptChangingColor);


```