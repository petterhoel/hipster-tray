
/*
* Elements
* */
var tray = document.querySelector("#tray");
var toggleBtn = document.querySelector('button.tray-toggle');

/*
* Functionality
* */
function handleToggle() {
    toggleBtn.textContent = toggleBtn.textContent === 'x' ? 'open' : 'x';
    tray.classList.toggle('open');
}


/*
* Event listeners
* */
toggleBtn.addEventListener('click', handleToggle);
