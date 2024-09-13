/// get refrence to form nad display area//


let form= document.getElementById("resume-form") as HTMLFormElement;
let resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as
    HTMLButtonElement;

/// Handle form submission

form.addEventListener('submit', (event: Event)=>{
    event.preventDefault(); /// prevent page reload


    /// collect input value
    const username = (document.getElementById('username') as HTMLInputElement).value;
    let name = (document.getElementById("name")  as HTMLInputElement).value
    let email = (document.getElementById("email")  as HTMLInputElement).value
    let phoneNumber = (document.getElementById("phone")  as HTMLInputElement).value
    let education = (document.getElementById("education")  as HTMLInputElement).value
    let experience = (document.getElementById("experience")  as HTMLInputElement).value
    let skill = (document.getElementById("skills")  as HTMLInputElement).value


    const resumeData = {
        name,
        email,
        phoneNumber,
        education,
        experience,
        skill
        };
        localStorage.setItem(username, JSON.stringify(resumeData));
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

    const shareableURL =
`${window.location.origin}?username=${encodeURIComponent(username)}`;
// Display the shareable link
shareableLinkContainer.style.display = 'block';
shareableLinkElement.href = shareableURL;
shareableLinkElement.textContent = shareableURL;
});


// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
    window.print(); 
    });
    // Prefill the form based on the username in the URL
    window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    if (username) {
    
    // Autofill form if data is found in localStorage
    const savedResumeData = localStorage.getItem(username);
    if (savedResumeData) {
    const resumeData = JSON.parse(savedResumeData);
    (document.getElementById('username') as HTMLInputElement).value =
    username;
    (document.getElementById('name') as HTMLInputElement).value =
    resumeData.name;
    (document.getElementById('email') as HTMLInputElement).value =
    resumeData.email;
    (document.getElementById('phone') as HTMLInputElement).value =
    resumeData.phone;
    (document.getElementById('education') as HTMLTextAreaElement).value =
    resumeData.education;
    (document.getElementById('experience') as HTMLTextAreaElement).value
    = resumeData.experience;
    (document.getElementById('skills') as HTMLTextAreaElement).value =
    resumeData.skills;
    }
    }
    });
