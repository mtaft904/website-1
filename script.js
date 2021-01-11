const paragraph = document.querySelector("#paragraph");
const paragraphContainer = document.querySelector("#topics-content");

const hobbies = document.createElement('div');
hobbies.style = "width: 100%; height: 100%;";
hobbies.innerHTML = document.getElementById('hobbies').innerHTML;

const activities = document.createElement('div');
activities.setAttribute('id', 'activities-div');
activities.style = "width: 100%; height: 100%;";
activities.innerHTML = document.getElementById('activities').innerHTML;

const interests = document.createElement('div');
interests.setAttribute('id', 'interests-div');
interests.innerHTML = document.getElementById('interests').innerHTML;

const classes = document.createElement('div');
classes.setAttribute('id', 'classes-div');
classes.style = "width: 100%; height: 100%";
classes.innerHTML = document.getElementById('classes').innerHTML;

const resume = document.createElement('div');
resume.setAttribute('id', 'resume-div');
resume.style = "width: 100%; height: 100%; display: block;"
resume.innerHTML = document.getElementById('resume').innerHTML;

const topics = document.querySelectorAll("button.topic");
topics.forEach((button) => {
  button.addEventListener("click", ()=> {
    clearDOM();
    changeParagraph(button);
  });
});

function clearDOM(){
  if(paragraphContainer.children.length > 1){
    const lastChild = paragraphContainer.lastChild;
    paragraphContainer.removeChild(lastChild);
  }
}

function changeParagraph(topic){

paragraph.style.marginTop="0";

  if(topic.textContent==="activities"){
    paragraph.textContent = "Activities";
    paragraphContainer.appendChild(activities);
  }
  else if(topic.textContent==="interests"){
    paragraph.textContent = "Interests"
    paragraphContainer.appendChild(interests);
  }

  else if(topic.textContent=="current classes"){
    paragraph.textContent = "Current Classes"
    paragraphContainer.appendChild(classes);
  }

  else if(topic.textContent=="hobbies"){
    paragraph.textContent = "My Hobbies!"
    paragraphContainer.appendChild(hobbies);
  }

  else if(topic.textContent=="resume"){
    paragraph.textContent = "My Resume";
    paragraphContainer.appendChild(resume);
  }
}
const clouds = document.getElementById("background-img");
const header = document.querySelector("header");
