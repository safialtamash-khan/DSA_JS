const { jsPDF } = require("jspdf");
const fs = require("fs");

async function createPdf(text, filename = "resume.pdf") {
  const doc = new jsPDF();
  let y = 20; // Starting Y position

  const lines = text.split("\n");

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (!trimmedLine) {
      continue; // Skip empty lines
    }

    if (trimmedLine.toUpperCase().endsWith(":")) { // section heading
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text(trimmedLine.replace(":", ""), 20, y);
      y += 10;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
    } else if (trimmedLine.includes("@") || trimmedLine.includes("LinkedIn") || trimmedLine.startsWith("+") && trimmedLine.length < 50) { //contact info
      if (y ===20) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(18);
        doc.text(trimmedLine, 20, y);
        y+=10;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
      }
      else {
        doc.text(trimmedLine, 20, y);
        y += 6;
      }
    } else if (
      trimmedLine.toUpperCase() === "TECHNICAL SKILLS" ||
      trimmedLine.toUpperCase() === "ADDITIONAL INFORMATION"
    ) {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text(trimmedLine, 20, y);
      y += 10;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
    } else if (
      trimmedLine.toUpperCase() === "PROFESSIONAL EXPERIENCE" ||
      trimmedLine.toUpperCase() === "PROJECTS" ||
      trimmedLine.toUpperCase() === "EDUCATION" ||
      trimmedLine.toUpperCase() === "CERTIFICATIONS" ||
      trimmedLine.toUpperCase() === "PROFESSIONAL SUMMARY"
    ) {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text(trimmedLine, 20, y);
      y += 10;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
    } else if (trimmedLine.includes("–") && trimmedLine.length < 100) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.text(trimmedLine, 25, y);
        y+=7;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
    }
    else {
      doc.text(trimmedLine, 25, y);
      y += 6;
    }
    if (y > doc.internal.pageSize.height - 20) {
      doc.addPage();
      y = 20; // Reset Y for new page
    }
  }

  const pdfBytes = doc.output("arraybuffer");
  fs.writeFileSync(filename, Buffer.from(pdfBytes));
  console.log(`PDF created: ${filename}`);
}

const resumeText = `
Safi Altamash Khan
Front-End Developer (React.js)
Hyderabad, India | altamash167@gmail.com | 9665550532
LinkedIn: linkedin.com/in/safi-altamash-khan-a72910211


Professional Summary
Experienced React.js Developer with 2+ years of expertise in building scalable, high-performance web applications. Proficient in React.js, JavaScript (ES6+), TypeScript, React Query, React Router, MUI, Bootstrap, and Axios. Strong background in UI development, API integration, state management, and performance optimization.


Technical Skills
Frontend: HTML, CSS, JavaScript (ES6+), TypeScript, React.js, React Router, React Query, Redux, Context API
UI Libraries: Bootstrap, MUI (Material-UI)
API Integration: Axios, REST APIs
Version Control: Git, GitHub


Professional Experience
Front-End Developer | Zaps Marketing Technology
Hyderabad, India | May 2023 – Present

Developed and optimized scalable front-end architecture for ZAPS Premium and ZAPS Rewards platforms.
Integrated RESTful APIs using Axios and React Query for efficient data fetching.
Built reusable, modular React components following Atomic Design principles.
Managed project-wide routing with React Router, including private routes and role-based access.
Implemented authentication and authorization flows with secure token storage.
Improved application performance through lazy loading, memoization, and caching strategies.
Debugged and optimized API integrations in collaboration with backend teams.


Projects
ZAPS Premium Management System
March 2024 – Present
Description: Premium is a website and mobile app that offers airport services such as meet-and-greet and airport transfers. Additionally, it caters to premium bank customers in Saudi Arabia and Dubai, providing them with exclusive mobile services. Played a key role in developing the front-end, ensuring a seamless and engaging user experience across web and mobile platforms.
Key Contributions:

Developed and optimized the front-end using React.js, ensuring a responsive and intuitive user interface.
Structured the project following Atomic Design principles to maintain a scalable and maintainable folder structure.
Created and managed project-wide routes using React Router, implementing layouts, private routes, and protected routes.
Developed the login page with authentication and authorization mechanisms, securely storing tokens for future API calls.
Configured Axios instance to manage API requests and responses, handling token expiration effectively.
Implemented data encryption for user security and utilized environment variables (.env) for secure API keys and encryption keys.
Managed error handling using try-catch blocks and implemented error boundaries to enhance application stability.
Dynamically managed the side navigation menu, displaying the sidebar list based on user roles and permissions.
Designed and implemented dashboards for multiple modules, including users, clients, and airport booking requests.
Handled date formatting using Moment.js for Unix timestamps and other time-related operations.
Optimized API calls using memoization to cache responses and reduce redundant network requests.
Tech Stack: HTML, CSS, JavaScript (ES6), MUI, Bootstrap, React.js, React Router, React Query, Axios, Express.js, MySQL, Azure.


ZAPS Rewards Management System
June 2023 – Present
Description: The ZAPS Reward platform is a Rewards Management System designed to assist businesses in managing their entire process. It provides both stand-alone and coalition mobile and web applications for end-users, as well as a web-based system for its business partners. The platform also features a gift card online store for users.
Key Contributions:

Developed and optimized the front-end of the ZAPS Rewards platform using React.js, ensuring a seamless and responsive user experience.
Integrated RESTful APIs using Axios and React Query, facilitating efficient data fetching and state management.
Coordinated with the backend team to debug API issues, ensuring smooth communication between the frontend and backend.
Created and maintained reusable UI components using MUI and Bootstrap to improve development efficiency and consistency.
Implemented dynamic and interactive features to enhance user engagement and platform usability.
Tech Stack: HTML, CSS, JavaScript (ES6), TypeScript, MUI, Bootstrap, React.js, React Router, React Query, Axios, Java, Spring Boot, JDBC Template, MySQL, AWS.


Education
Bachelor of Computer Application (BCA)
Shri Shivaji Science College, Amravati | Sant Gadge Baba Amravati University
Amravati, India | November 2021


Certifications
Web Developer Trainee, 2021 – Obdurate Technologies


Additional Information
Languages: English, Hindi
Work Authorization: Open to relocation & remote opportunities
`;

createPdf(resumeText);