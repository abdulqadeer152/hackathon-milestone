/// get refrence to form nad display area//
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
/// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); /// prevent page reload
    /// collect input value
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skill = document.getElementById("skills").value;
    /// Generate the resume content dynmically
    var resumeHTML = "\n    <h2><b>Editable Resume</b> </h2>\n    <h3> Personal Information</h3>\n    <p> <b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n    <p> <b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n    <p> <b>Phone Number:</b><span contenteditable=\"true\">").concat(phoneNumber, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable=\"true\"> ").concat(education, "</p>\n\n    <h3  >Experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skill, "</p>");
    /// Display the Genearted Resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume Display Element Is Missing.');
    }
});
