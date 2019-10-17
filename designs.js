const appState = {
  "color": "#000002",
  "width": 1,
  "height": 1
};

const makeGrid = (target) => {
  if (appState.width > 0 && appState.height > 0) {

    document.querySelector('#error').textContent = '';

    const canvas = document.querySelector('#pixelCanvas');
    canvas.innerHTML = "";

    let i = 0, j = 0;
    const rowsNum = appState.height, colsNum = appState.width;

    /**
     * this was really bad at performance even if it's O(n)
     * Because of html parse
     */

    // let tds = '';
    // for (j = 0; j < colsNum; j++) {
    //   tds += '<td onclick="changeColor(this)"></td>'
    // }

    // for (j = 0; j < rowsNum; j++) {
    //   let tr = document.createElement('tr');
    //   tr.innerHTML = tds;
    //   canvas.appendChild(tr);
    // }

    for (i = 0; i < rowsNum; i++) {
      let tr = document.createElement('tr');
      for (j = 0; j < colsNum; j++) {
        let td = document.createElement('td');
        td.addEventListener('click', changeColor);
        tr.appendChild(td);
      }
      canvas.appendChild(tr);
    }
  }else{
    document.querySelector('#error').textContent = 'Width / Height should be 1 or higher'
  }
}

const setColor = (target) => {
  appState.color = target.value
}

const setWidth = (target) => {
  appState.width = +target.value
}

const setHeight = (target) => {
  appState.height = +target.value
}
