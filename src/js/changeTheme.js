const html = document.documentElement;
const btnChangeContext = document.getElementById('change-theme');

function changeContext(context) {
    html.setAttribute('data-context', context);
    updateButtonUI(context);
}

function updateButtonUI(context) {
    btnChangeContext.textContent = context === 'day' ? '☀️' : '🌙';
}

btnChangeContext.addEventListener('click', () => {
    const currentContext = html.getAttribute('data-context');
    const newContext = currentContext === 'day' ? 'night' : 'day';
    changeContext(newContext);
});
