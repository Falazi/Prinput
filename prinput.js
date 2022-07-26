// creates scrollbar div
var scrollbox = document.createElement('div');
scrollbox.setAttribute("id", "scrollbox");
document.body.appendChild(scrollbox)

// creates input box
const inputel = document.createElement("input");
inputel.setAttribute("type", "text");
inputel.setAttribute("autocomplete", "off");
inputel.setAttribute('id', 'input');

document.body.appendChild(inputel)


function finish() {
    inputel.remove()
}

num = 0

function prinPrint(text) {

    const para = document.createElement("p");
    para.innerHTML = text;
    document.getElementById("scrollbox").appendChild(para)

}

// prints the text but bold
// used for printing from the console rather than input printing
function print(text) {
    prinPrint("<b>" + text + "</b>")
}


// sleep function
// usage example: await sleep(3000)
function sleep(milliseconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({})
        }, milliseconds);
    })
}

function waitingKeypress() {

    // this function waits for enter to be pressed on the input then it resolves the promise
    // which gets sent to the input function and then it prints the input value

    // i dont really understand promises I just frankensteined this together from code I found
    // It works great though
    return new Promise((resolve) => {
        document.querySelector('#input').addEventListener('keypress', function (e) {
            if (e.keyCode === 13) {
                // document.removeEventListener('keypress', onKeyHandler);
                resolve();
            }
        }
        )
    });
}


async function input(text) {
    if (text != null){print(text)}
    // wait for keypress before continuing 
    await waitingKeypress();


    var textbox = document.getElementById('input').value
    document.getElementById('input').value = ""
    prinPrint(textbox)
    return textbox
}




