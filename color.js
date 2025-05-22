const buttons = document.querySelectorAll('.box');
const container = document.querySelector('body');

buttons.forEach(function(box) {
  box.addEventListener('click', function(event) {
    const id = event.target.id;

    if (id === 'box1') {
      container.style.backgroundColor = '#e1a244';
    } else if (id === 'box2') {
      container.style.backgroundColor = 'lawngreen';
    } else if (id === 'box3') {
      container.style.backgroundColor = '#37dbdb';
    } else if (id === 'box4') {
      container.style.backgroundColor = '#d24fa0';
    } else if (id === 'box5') {
      container.style.backgroundColor = '#e85d5d';
    }
  });
});
