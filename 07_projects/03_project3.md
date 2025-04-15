# Projects related to DOM 

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-qvtyupty?file=index.html)


## Project 3 - Digital Clock


```javascript
    // const clock = document.querySelector('clock')
    const clock = document.querySelector('#clock')

    let date = new Date();
    console.log(date.toLocaleTimeString());


    setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
    },1000);

```