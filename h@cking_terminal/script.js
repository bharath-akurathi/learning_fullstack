// //     hacking terminal<br>
// //     <!-- Create a hacking simulator which has green background and it shows these messages with random delay of 1 to 7 seconds  -->

// //     Initializing Hacking...<br>
// //     Reading your Files...<br>
// //     Password files Detected...<br>
// //     Sending all passwords and personal files to server...<br>
// //     Cleaning up...<br>
// //     <!-- The three dots must blink so that it looks like a real terminal --></br>

let messages = [
    "Initializing Hacking",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server.",
    "Cleaning up"
];


async function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            resolve();
        }, ms);
    });
}

// async function showMessage() {
//     let r;
//     for (let i = 0; i < messages.length; i++) {
//         await delay(Math.ceil(Math.random() * 7000));
//         let output = document.createElement('div');
//         output.className = ('output');
//         output.innerHTML += `<div>${messages[i]}</div>`;
//         document.body.append(output)
//         r = setInterval(() => {
//             let last = document.body.getElementsByTagName("div");
//             last = last[last.length - 1]
//             if (last.innerHTML.endsWith("...")) {
//                 last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
//             }
//             else {
//                 last.innerHTML = last.innerHTML + "."
//             }
//         }, 500);
//     }
// }

// showMessage()

async function showMessage() {
  let currentInterval = null;
  let currentLine = null;

  for (let i = 0; i < messages.length; i++) {

    // stop previous blinking when new line is about to print
    if (currentInterval) {
      clearInterval(currentInterval);
      currentLine.textContent = messages[i - 1] + "...";
    }

    // create new line immediately
    const line = document.createElement("div");
    line.className = "output";
    document.body.appendChild(line);

    let dots = 0;

    // start blinking dots NOW
    currentInterval = setInterval(() => {
      dots = (dots + 1) % 4;
      line.textContent = messages[i] + ".".repeat(dots);
    }, 400);

    currentLine = line;

    // wait random 1–7 seconds WHILE blinking
    await delay(Math.ceil(Math.random() * 7000));
  }

  // stop blinking for last line
  if (currentInterval) {
    clearInterval(currentInterval);
    currentLine.textContent = messages[messages.length - 1] + "...";
  }
}

showMessage();






// const addItem = async (item) => {
//     await randomDelay();
//     let div = document.createElement("div");
//     div.innerHTML = item;
//     div.className = "output";
//     document.body.append(div)
// }

// const randomDelay = () => {
//     return new Promise((resolve, reject) => {
//         timeout = 1 + 6 * Math.random();
//         setTimeout(() => {
//             resolve()
//         }, timeout * 1000);
//     })
// }

// async function main() {
//     let t = setInterval(() => {
//         let last = document.body.querySelectorAll(".div");
//         last = last[last.length - 1]
//         if (last.innerHTML.endsWith("...")) {
//             last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
//         }
//         else {
//             last.innerHTML = last.innerHTML + "."
//         }
//     }, 200);
//     let text = ["Initialized Hacking now reading your data",
//         "Reading your Files",
//         "Password files Detected",
//         "Sending all passwords and personal files to server",
//         "Cleaning up"]
//     for (const item of text) {
//         await addItem(item)
//     }
//     await randomDelay()
//     clearInterval(t)
// }
// main()