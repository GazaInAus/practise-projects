document.querySelectorAll('.dock li').forEach(li => {
  li.addEventListener('mousemove', e => {
    let item = e.target
    let itemRect = item.getBoundingClientRect()
    let offset = Math.abs(e.clientX - itemRect.left) / itemRect.width

    let prev = item.previousElementSibling || null
    let next = item.nextElementSibling || null

    let scale = 1

    resetScale()

    if (prev) {
      prev.style.setProperty('--scale', 1 + scale * Math.abs(offset - 1))
    }

    item.style.setProperty('--scale', 1 + scale)

    if(next){
      next.style.setProperty('--scale', 1 + scale * offset)
    }
  })
})

document.querySelector('.dock').addEventListener('mouseleave', e => {
  resetScale()
})
function resetScale(){
  document.querySelectorAll('.dock li').forEach(li => {
    li.style.setProperty('--scale', 1)
  })
}

// for (let i = 0; i<content.length; i++){
function showContent(i) {
  var firstContent = document.getElementById("showContent")
  if (i >= 0 && i < content.length) {
    firstContent.innerHTML = "<p>" + content[i] + "</p>"
    firstContent.style.display = "flex"
  }

  document.addEventListener("click", function closePopup(e) {
    if (!e.target.closest(".dock li")) {
      firstContent.style.display = "none"
      // document.removeEventListener("click", closePopup)
    }
  })
}
// document.querySelector('.dock li').forEach(li, e=>{
//   li.addEventListener('click', function(){
//
//   })
// })

var content = ["I am a motivated and enthusiastic full stack software developer. I have a good understanding of test driven development (TDD) and CI/CD pipelines. " +
"I also have working knowledge of cloud computing focusing on AWS and certification. I am seeking an entry level software engineer opportunity to deliver innovative solutions that support business objectives.",
  "Freelance\n" +
  "\n" +
  "WeChat: Air-conditioning company\n" +
  "Key Responsibilities:\n" +
  "• Front-End Development: develop the user interface (UI) and user experience (UX) of mini-program using CSS, JavaScript, WeChat language.\n" +
  "• WeChat API Integration: integrate WeChat APIs for various functionalities: such as user authentication, payment, and sharing.\n" +
  "• Back-End Development: implement server-side logic using Node.js and connect mini-program with database and external APIs.\n" +
  "• Testing: develop and execute test plans to ensure the functionality, security, and performance, and conduct debugging and troubleshoot issues.\n" +
  "Key Achievements:\n" +
  "• Deploy mini-program in WeChat successfully.\n" +
  "• Dependency management.\n" +
  "Technical Skills:\n" +
  "JavaScript, Node.js, CSS, WeChat Style Sheets (WXSS), WeChat Markup Language (WXML).\n" +
  "\n" +
  "Hobby Project\n" +
  "Java Project: Course Information Collection\n" +
  "Key Responsibilities:\n" +
  "• Build-up API connection.\n" +
  "• Filter and collect data from stream.\n" +
  "• Database management.\n" +
  "Key Achievement:\n" +
  "• Store required information in a database.\n" +
  "• Expose collected data over a REST API.\n" +
  "• Allow addition of notes through the API.\n" +
  "• Fill the database.\n" +
  "Technical Skills:\n" +
  "Java, Maven, Jackson, H2 database, Junit.\n" +
  "\n" +
  "Technical Business Analysis - software testing Jan 2020 –--- May 2023\n" +
  "BPC Technology\n" +
  "● Design system functions PDA functions to improve customer service and work efficiency.\n" +
  "● Create detailed system design documents that outline the structure and components.\n" +
  "● Analyze the requirements in function design and translate into technical specifications.\n" +
  "● Conduct testing to ensure that software meets quality standards.\n" +
  "● Work collaboratively with other team members, including developers and general manager.\n" +
  "\n" +
  "Programmer (part-time) Jan 2018 — Jan 2020\n" +
  "BPC Technology\n" +
  "● Update and maintain the company system.\n" +
  "● Fix bugs in systems\n" +
  "● Design and develop new systems for customers.\n" +
  "\n" +
  "Webpage Developer (PY intern) Jun 2016 — Aug 2016\n" +
  "Pacific Group Tour\n" +
  "● Maintain previous accepted webpages.\n" +
  "● Use PHP to develop new webpages to meet market requirements.\n" +
  "● Maintain data servers.\n" +
  "● Develop and maintain WeChat Platform",
"Communication Skills\n" +
"●\n" +
"Clear and fluent communicator who liaises well with colleagues and understands language used in the professional IT industry.\n" +
"●\n" +
"Able to express key information in written form in a succinct and professional manner.\n" +
"Problem Solving:\n" +
"●\n" +
"Able to identify the complex problems, analyze root causes, and develop effective solutions.\n" +
"●\n" +
"Strong critical thinking skills applied to analyze project processes, streamline workflows, and identify areas for improvement.\n" +
"Team Collaboration:\n" +
"●\n" +
"Work closely with cross-functional teams to ensure client satisfaction.\n" +
"●\n" +
"Participate in weekly meetings to foster communication and idea-sharing among team members.\n" +
"Leadership and Recruits’ Management:\n" +
"●\n" +
"Effective time management skills to prioritize tasks, meet deadlines.\n" +
"●\n" +
"Assign tasks based on employees’ abilities to enhance overall work efficiency.",
"Diploma of Cloud Computing\n" +
"Goanna Education\n" +
"Advanced Diploma of Leadership and Management\n" +
"Mercury Institute of Victoria Pty Ltd\n" +
"Diploma of Leadership and Management\n" +
"Mercury Institute of Victoria Pty Ltd\n" +
"Professional Year (IT)\n" +
"Performance Education, Melbourne\n" +
"May 2023 — Aug 2023\n" +
"Sep 2018 — May 2020\n" +
"Sep 2017— Sep 2018\n" +
"Sep 2015 — Aug 2016\n" +
"Master of Information Technology\n" +
"The University of Melbourne, Melbourne\n" +
"Jul 2012 — Jul 2015",
"AWS re/Start Graduate; AWS Certified Cloud Practitioner.",
"English: Fluent in speaking, writing, and reading.\n" +
"Chinese: Mandarin native language.",
"available upon request"]
