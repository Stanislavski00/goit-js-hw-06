const fontSizeControl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

fontSizeControl.addEventListener('input', () => {
    const fontSize = fontSizeControl.value + 'px';
    textEl.style.fontSize = fontSize;
})

