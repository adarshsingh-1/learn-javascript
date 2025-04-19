# Projects related to Events

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-qvtyupty?file=index.html)


## Project 1 - Keyboard Check


```javascript
const insert = document.getElementById('insert')
window.addEventListener('keydown',(e)=>{
  insert.innerHTML = `
  <div class = 'color'>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " "? "Space": e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.Code}</td>
  </tr>
  </div>
  `;
})




```