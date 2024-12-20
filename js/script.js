document.addEventListener("DOMContentLoaded", function () {


    const feedbackForm = document.querySelector("#feedback-form");

    if (localStorage.getItem("feedbackData")) {
      const savedData = JSON.parse(localStorage.getItem("feedbackData"));
      document.querySelector("#name").value = savedData.name;
      document.querySelector("#email").value = savedData.email;
      document.querySelector("#feedback").value = savedData.feedback;
    }
  

    feedbackForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const formData = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        feedback: document.querySelector("#feedback").value
      };
  
  
      localStorage.setItem("feedbackData", JSON.stringify(formData));

      alert("Thank you for your feedback!");
    });
  });
  