// script.js

// Emotion Check-In: Allow user to select their current emotion
const emotionButtons = document.querySelectorAll('.emotion-btn');
const selectedFeeling = document.getElementById('selected-feeling');

emotionButtons.forEach(button => {
    button.addEventListener('click', function() {
        const feeling = this.getAttribute('data-feeling');
        selectedFeeling.textContent = `You are feeling: ${feeling}`;
    });
});

// Learn More About the Brain: Button to reveal more brain facts
const learnMoreBrainButton = document.getElementById('learn-more-brain');
learnMoreBrainButton.addEventListener('click', function() {
    alert("When you practice deep breathing or counting, you help your brain calm down. Your upstairs brain (prefrontal cortex) can take charge and make good decisions.");
});

// Daily Activities: Change activity text on button click
const activityContent = document.getElementById('activity-content');
const nextActivityButton = document.getElementById('next-activity');
let currentActivity = 0;

const activities = [
    "Let’s start by practicing deep breathing. Take 5 slow breaths. Ready? Go!",
    "Now, let's try to count to 10 slowly. This helps your brain focus.",
    "Let's think about a time you felt frustrated. What could you do to calm down next time?",
    "Take a break by stretching! Reach up to the sky, and down to your toes."
];

nextActivityButton.addEventListener('click', function() {
    currentActivity = (currentActivity + 1) % activities.length;
    activityContent.textContent = activities[currentActivity];
});

// Strengths: Save the strengths the user enters and display them
const strengthInput = document.getElementById('strength-input');
const savedStrengths = document.getElementById('saved-strengths');
const saveStrengthsButton = document.getElementById('save-strengths');

saveStrengthsButton.addEventListener('click', function() {
    const strengths = strengthInput.value;
    if (strengths) {
        savedStrengths.textContent = `Your strengths: ${strengths}`;
    } else {
        savedStrengths.textContent = "Please enter your strengths!";
    }
});
