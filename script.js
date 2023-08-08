
const courses = [
    { title: 'Introduction to Web Development', price: 49.99 },
    { title: 'JavaScript Fundamentals', price: 59.99 },
    { title: 'html basics ',price:49.99},
    {title:'java script',price:49.99},
    {title:'full stack web development',price:69.99},
    {title: 'frontend developer',price:49.99},
    {title:'devops',price:49.99},
    
    // Add more courses here
];

// Function to display courses
function displayCourses() {
    const courseList = document.querySelector('.course-list');
    courseList.innerHTML = '';
    
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        courseCard.innerHTML = `
            <h2>${course.title}</h2>
            <p>Price: $${course.price}</p>
            <button>Add to Cart</button>
        `;
        
        courseList.appendChild(courseCard);
    });
}

// Load courses on page load
window.addEventListener('load', () => {
    displayCourses();
});