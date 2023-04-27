const activityContainer = document.getElementById('activity-container');
const generateActivityButton = document.getElementById('generate-activity-button');

function getRandomActivity() {
  fetch('https://www.boredapi.com/api/activity')
    .then(response => response.json())
    .then(data => {
      const activity = data.activity;
      const activityElement = document.createElement('p');
      activityElement.textContent = activity;
      activityContainer.innerHTML = '';
      activityContainer.appendChild(activityElement);
    })
    .catch(error => {
      console.error(error);
    });
}

generateActivityButton.addEventListener('click', getRandomActivity);
