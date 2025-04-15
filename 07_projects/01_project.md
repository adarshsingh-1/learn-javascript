# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-qvtyupty?file=index.html)


## Project 1 - Background Color Switcher


```javascript
console.log("learning javascript")
    const buttons = document.querySelectorAll('.button');
    const body = document.querySelector('body');

    buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'grey') {
        body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
        body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
        body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
        body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'green') {
        body.style.backgroundColor = e.target.id;
        }
    });
    });

```