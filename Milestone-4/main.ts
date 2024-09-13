/// get refrence to form nad display area//


let form= document.getElementById("resume-form") as HTMLFormElement;
let resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;

/// Handle form submission

form.addEventListener('submit', (event: Event)=>{
    event.preventDefault(); /// prevent page reload


    /// collect input value
    let name = (document.getElementById("name")  as HTMLInputElement).value
    let email = (document.getElementById("email")  as HTMLInputElement).value
    let phoneNumber = (document.getElementById("phone")  as HTMLInputElement).value
    let education = (document.getElementById("education")  as HTMLInputElement).value
    let experience = (document.getElementById("experience")  as HTMLInputElement).value
    let skill = (document.getElementById("skills")  as HTMLInputElement).value

    /// Generate the resume content dynmically

    const resumeHTML= `
    <h2><b>Editable Resume</b> </h2>
    <h3> Personal Information</h3>
    <p> <b>Name:</b> <span contenteditable="true">${name}</span></p>
    <p> <b>Email:</b> <span contenteditable="true">${email}</span></p>
    <p> <b>Phone Number:</b><span contenteditable="true">${phoneNumber}</span></p>

    <h3>Education</h3>
    <p contenteditable="true"> ${education}</p>

    <h3  >Experience</h3>
    <p contenteditable="true">${experience}</p>

    <h3>Skills</h3>
    <p contenteditable="true">${skill}</p>`;

    /// Display the Genearted Resume

    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else{
        console.error('The Resume Display Element Is Missing.');
    }

})
