var toggleButton = document.getElementById("toggle-skills");
var skillSection = document.getElementById("skills");
toggleButton.addEventListener('click', function () {
    if (skillSection.style.display === 'none') {
        skillSection.style.display = 'block';
    }
    else {
        skillSection.style.display = 'none';
    }
});
