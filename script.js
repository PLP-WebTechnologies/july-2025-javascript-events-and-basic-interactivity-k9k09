/* ==========================
   Part 1: Event Handling
   ========================== */
// Click event
document.getElementById('clickBtn').addEventListener('click', () => {
  document.getElementById('clickMsg').textContent = "Button was clicked!";
});

// Mouseover event
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseover', () => {
  hoverBox.textContent = "You're hovering!";
});
hoverBox.addEventListener('mouseout', () => {
  hoverBox.textContent = "Hover over me!";
});

/* ==========================
   Part 2: Interactive Features
   ========================== */
// Dark Mode Toggle
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Counter
let count = 0;
const counterValue = document.getElementById('counterValue');
document.getElementById('incrementBtn').addEventListener('click', () => {
  count++;
  counterValue.textContent = count;
});
document.getElementById('decrementBtn').addEventListener('click', () => {
  count--;
  counterValue.textContent = count;
});

// Collapsible FAQ
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

/* ==========================
   Part 3: Form Validation
   ========================== */
document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  let valid = true;

  // Clear previous messages
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('passwordError').textContent = '';
  document.getElementById('formSuccess').textContent = '';

  // Name validation
  const name = document.getElementById('name').value.trim();
  if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required.';
    valid = false;
  }

  // Email validation
  const email = document.getElementById('email').value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Invalid email address.';
    valid = false;
  }

  // Password validation
  const password = document.getElementById('password').value.trim();
  if (password.length < 6) {
    document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
    valid = false;
  }

  // Success message
  if (valid) {
    document.getElementById('formSuccess').textContent = 'Form submitted successfully!';
  }
});
