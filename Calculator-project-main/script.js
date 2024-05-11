document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.querySelector('.equal').click();
        document.activeElement.blur(); // Remove focus from the button
    }
});


