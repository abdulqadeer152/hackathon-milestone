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
    var resumeHTML = "\n    <h2><b>Resume</b> </h2>\n    <h3> Personal Information</h3>\n    <p> <b>Name:</b> ".concat(name, "</p>\n    <p> <b>Email:</b> ").concat(email, "</p>\n    <p> <b>Phone Number:</b> ").concat(phoneNumber, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skill, "</p>");
    /// Display the Genearted Resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume Display Element Is Missing.');
    }
});
