# **Lingo Bingo: A Vocabulary Learning Application**

## **Overview**
Lingo Bingo is a fun and interactive single-page web application designed to help users expand their vocabulary in a specific language and improve communication skills. This project is focused on making language learning engaging and user-friendly by using structured lessons, interactive tutorials, and vocabulary practice.

---

## **Live URL**
Page: https://lingo-bingo-56adb.web.app/

Backup: https://idyllic-kheer-1916ef.netlify.app/ 

---

## **Features**

### **1. Authentication System**
- Secure login and registration using Firebase Authentication.
- Social Login via Google.
- Password validation includes:
  - At least one uppercase letter.
  - At least one lowercase letter.
  - Minimum 6 characters.
- Forget Password functionality for users to reset their passwords.

### **2. Dynamic Vocabulary Lessons**
- Learn vocabulary in a specific language (e.g., Spanish, French, Japanese).
- JSON file containing vocabulary data with:
  - Word
  - Pronunciation
  - Meaning
  - Examples
- Lessons are dynamically displayed based on the selected lesson.

### **3. Interactive Tutorials**
- Embedded YouTube videos for learning the language alphabet and grammar.
- Private routes ensure only logged-in users can access tutorials.

### **4. User Dashboard**
- Displays user information such as:
  - Name
  - Email
  - Profile picture
- Update Profile functionality to modify user details (name and photo URL) in Firebase.

### **5. Accessibility Features**
- Pronunciation playback for vocabulary words.
- Vocabulary cards are color-coded based on difficulty levels (easy, medium, difficult).

### **6. Responsive Design**
- Fully responsive layout optimized for mobile, tablet, and desktop devices.

### **7. Error Handling**
- Custom 404 error page with navigation back to the home route.

---

## **Technical Implementation**

### **Tech Stack**
- **Frontend**: React.js, Tailwind CSS, DaisyUI
- **Backend**: Firebase (Authentication & Database)
- **Routing**: React Router DOM
- **Hosting**: Netlify/Firebase
