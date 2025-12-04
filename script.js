const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalOverlay = document.getElementById('modalOverlay');

openModalBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = 'none';
  }
});

const skills = document.querySelectorAll(".skill");

skills.forEach(skill => {
  let percent = skill.getAttribute("data-percent");
  let degree = (percent / 100) * 360;
  skill.querySelector(".circle").style.background =
    `conic-gradient(#11c2ff ${degree}deg, #1c1537 ${degree}deg)`;
});
