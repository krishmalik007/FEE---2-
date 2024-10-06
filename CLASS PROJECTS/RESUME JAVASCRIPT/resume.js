
const resumeData = {
    name: "KRISH MALIK",
    contact: "krish2044.be23@chitkara.edu.in",
    profilePic: "path/to/your/image.jpg",
    education: [
        "B.S. in Computer Science - Chitkara University, 2024"
    ],
    experience: [
        "FRESHER"
    ],
    skills: [
        "JavaScript", 
        "HTML", 
        "CSS", 
        "Python", 
        "C++",
        "C"
    ]
};

document.getElementById("name").innerText = resumeData.name;
document.getElementById("contact").innerText = resumeData.contact;
document.getElementById("profile-pic").src = resumeData.profilePic;

const educationList = document.getElementById("education");
resumeData.education.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    educationList.appendChild(li);
});

const experienceList = document.getElementById("experience");
resumeData.experience.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    experienceList.appendChild(li);
});

const skillsList = document.getElementById("skills");
resumeData.skills.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    skillsList.appendChild(li);
});
