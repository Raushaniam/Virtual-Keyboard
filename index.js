let header = document.createElement('h1');
header.textContent = 'RSS Virtual Keyboard';
document.body.append(header);

let main = document.createElement('main');
document.body.append(main);
main.insertAdjacentHTML("afterbegin", `<textarea id="outputText"></textarea>`);
main.insertAdjacentHTML("beforeend", `<div class="keyboard">
   <div class="row">
       <button class="littleBtn">\`</button><button class="littleBtn">1</button><button class="littleBtn">2</button>
       <button class="littleBtn">3</button><button class="littleBtn">4</button><button class="littleBtn">5</button>
       <button class="littleBtn">6</button><button class="littleBtn">7</button><button class="littleBtn">8</button>
       <button class="littleBtn">9</button><button class="littleBtn">0</button><button class="littleBtn">-</button>
       <button class="littleBtn">=</button><button class="Backspace">Backspace</button>
   </div>
   <div class="row">
       <button>Tab</button><button class="littleBtn">q</button><button class="littleBtn">w</button><button class="littleBtn">e</button>
       <button class="littleBtn">r</button><button class="littleBtn">t</button><button class="littleBtn">y</button>
       <button class="littleBtn">u</button><button class="littleBtn">i</button><button class="littleBtn">o</button>
       <button class="littleBtn">p</button><button class="littleBtn">[</button><button class="littleBtn">]</button>
       <button class="littleBtn">\\</button><button>Del</button>
   </div>
   <div class="row">
       <button>CapsLock</button><button class="littleBtn">a</button><button class="littleBtn">s</button>
       <button class="littleBtn">d</button><button class="littleBtn">f</button><button class="littleBtn">g</button>
       <button class="littleBtn">h</button><button class="littleBtn">j</button><button class="littleBtn">k</button>
       <button class="littleBtn">l</button><button class="littleBtn">;</button><button class="littleBtn">'</button>
      <button>Enter</button>
   </div>
   <div class="row">
       <button>Shift</button><button class="littleBtn">z</button><button class="littleBtn">x</button>
       <button class="littleBtn">c</button><button class="littleBtn">v</button><button class="littleBtn">b</button>
       <button class="littleBtn">6</button><button class="littleBtn">7</button><button class="littleBtn">8</button>
       <button class="littleBtn">n</button><button class="littleBtn">m</button><button class="littleBtn">,</button>
       <button class="littleBtn">.</button><button class="littleBtn">/</button><button class="littleBtn">&#8593;</button><button>Shift</button>
   </div>
   <div class="row">
       <button class="littleBtn">Ctrl</button><button class="littleBtn">Win</button><button class="littleBtn">Alt</button>
       <button class="space"></button><button class="littleBtn">Alt</button><button class="littleBtn">&#8592;</button>
       <button class="littleBtn">&#8595;</button><button class="littleBtn">	&#8594;</button><button class="littleBtn">Ctrl</button>
   </div>
</div>`);



window.onload = () => {

    const outputText = document.getElementById('outputText');

    const buttonListener = (elem) => () => {
        console.log(elem.innerText);
        

       if(elem.innerText === 'Backspace') {
        outputText.textContent = outputText.textContent.substring(0, outputText.textContent.length - 1);
       } else if(elem.innerText === 'Enter') {
        outputText.textContent = outputText.textContent + '\n';
       } else {
        outputText.textContent = outputText.textContent + elem.innerText;
       }
    };

    const buttons = document.getElementsByTagName('button');
    for(let i of buttons) {
        i.onclick = buttonListener(i);
    }
}






