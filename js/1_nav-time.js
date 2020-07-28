const clock = () => {

    const time = new Date();

    const seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    const minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();

    document.querySelector('.time span').textContent = `${hours}:${minutes}:${seconds}`;

}

clock();

// It will be invoked asynchronously

setInterval(clock, 1000)