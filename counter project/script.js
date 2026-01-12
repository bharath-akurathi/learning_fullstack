increment.addEventListener('click', () => {
    let currentCount = parseInt(count.innerText);
    currentCount += 1;
    count.innerText = currentCount;
});

decrement.addEventListener('click', () => {
    let currentCount = parseInt(count.innerText);
    currentCount -= 1;
    count.innerText = currentCount;
});

reset.addEventListener('click', () => {
    count.innerText = 0;
});

submit.addEventListener('click', () => {
    alert(`Submitted count is: ${count.innerText}`);
});