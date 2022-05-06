let header = document.createElement('h1');
header.textContent = 'RSS Virtual Keyboard';
document.body.append(header);

let main = document.createElement('main');
document.body.append(main);
main.insertAdjacentHTML("afterbegin", `<textarea id="outputText"></textarea>`);
main.insertAdjacentHTML("beforeend", `<div class="keyboard">
   <div class="row">
       <button class="btn">\`</button><button class="btn">1</button><button class="btn">2</button>
       <button class="btn">3</button><button class="btn">4</button><button class="btn">5</button>
       <button class="btn">6</button><button class="btn">7</button><button class="btn">8</button>
       <button class="btn">9</button><button class="btn">0</button><button class="btn">-</button>
       <button class="btn">=</button><button class="btn">Backspace</button>
   </div>
   <div class="row">
       <button class="btn">Tab</button><button class="btn">q</button><button class="btn">w</button><button class="btn">e</button>
       <button class="btn">r</button><button class="btn">t</button><button class="btn">y</button>
       <button class="btn">u</button><button class="btn">i</button><button class="btn">o</button>
       <button class="btn">p</button><button class="btn">[</button><button class="btn">]</button>
       <button class="btn">\\</button><button class="btn">Del</button>
   </div>
   <div class="row">
       <button id="caps" class="btn">CapsLock</button><button class="btn">a</button><button class="btn">s</button>
       <button class="btn">d</button><button class="btn">f</button><button class="btn">g</button>
       <button class="btn">h</button><button class="btn">j</button><button class="btn">k</button>
       <button class="btn">l</button><button class="btn">;</button><button class="btn">'</button>
      <button class="btn enter">Enter</button>
   </div>
   <div class="row">
       <button class="btn shift">Shift</button><button class="btn">z</button><button class="btn">x</button>
       <button class="btn">c</button><button class="btn">v</button><button class="btn">b</button>
       <button class="btn">n</button><button class="btn">m</button><button class="btn">,</button>
       <button class="btn">.</button><button class="btn">/</button><button class="btn">&#8593;</button><button class="btn shift">Shift</button>
   </div>
   <div class="row">
       <button class="btn">Ctrl</button><button class="btn">Win</button><button class="btn">Alt</button>
       <button class="btn area">&#x20;</button><button class="btn">Alt</button><button class="btn">&#8592;</button>
       <button class="btn">&#8595;</button><button class="btn">&#8594;</button><button class="btn">Ctrl</button>
   </div>
</div>`);



window.onload = () => {

    const outputText = document.getElementById('outputText');
    const caps = document.getElementById('caps');

    let isCapsLock = false;

    const insertLetter = (cursorPosition, letter, isCapsLock = false) => {
        if(isCapsLock) {
            letter = letter.toUpperCase();
        }
        outputText.value = outputText.value.substring(0, cursorPosition) + letter
            + outputText.value.substring(cursorPosition, outputText.value.length)
    }

    const buttonListener = (elem) => () => {
        console.log(elem.innerText);

        let startPosition = outputText.selectionStart;
        let endPosition = outputText.selectionEnd;

        outputText.focus();

        if (elem.innerText === 'Backspace') {
            outputText.value = outputText.value.substring(0, startPosition-1)
                + outputText.value.substring(endPosition, outputText.value.length);
            outputText.selectionStart = startPosition-1;
            outputText.selectionEnd = endPosition-1;
        } else if (elem.innerText === 'Enter') {
            outputText.value = outputText.value + '\n';
            insertLetter(startPosition, '\n');
            outputText.selectionStart = startPosition + 1;
            outputText.selectionEnd = endPosition + 1;
        } else if (elem.innerText === 'Tab') {
            outputText.value = outputText.value + '    ';
            outputText.selectionStart = startPosition + 4;
            outputText.selectionEnd = endPosition + 4;
        } else if (elem.innerText === 'Del') {
            outputText.value = outputText.value.substring(0, startPosition)
                + outputText.value.substring(endPosition + 1, outputText.value.length);
            outputText.selectionStart = startPosition;
            outputText.selectionEnd = endPosition;
        } else if (elem.innerText === 'CapsLock') {
            isCapsLock = !isCapsLock;
        } else if (elem.innerText === 'Shift') {
            //outputText.value = outputText.value + .toUpperCase();
        } else if (elem.innerText === 'Win') {
            //outputText.value = outputText.value + .toUpperCase();
        } else if (elem.innerText === 'Alt') {
            //outputText.value = outputText.value + .toUpperCase();
        } else if (elem.innerText === 'Ctrl') {
            //outputText.value = outputText.value + .toUpperCase();
        } else if (elem.innerText === '&#8595;') {
            //outputText.value = outputText.value + .toUpperCase();
        } else if (elem.innerText === '&#8593;') {
            //outputText.value = outputText.value + .toUpperCase();
        } else if (elem.innerText === '&#8592;') {
            //outputText.value = outputText.value + .toUpperCase();
        } else if (elem.innerText === '&#8594;') {
            //outputText.value = outputText.value + .toUpperCase();
        } else {
            insertLetter(startPosition, elem.innerText, isCapsLock);
            outputText.selectionStart = startPosition + 1;
            outputText.selectionEnd = endPosition + 1;
        }
    };

    const buttons = document.getElementsByTagName('button');
    for (let i of buttons) {
        i.onclick = buttonListener(i);
    }
}






