let toggleButton= document.getElementById("toggle-skills") as HTMLButtonElement;

let skillSection= document.getElementById("skills") as HTMLElement;

toggleButton.addEventListener('click', ()=>{
    if(skillSection.style.display === 'none'){
        skillSection.style.display = 'block'
    }else{
        skillSection.style.display = 'none'
    }
});