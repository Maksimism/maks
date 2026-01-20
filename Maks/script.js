document.getElementById('createTaskForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Задание создано!');
});

document.getElementById('editTaskForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Задание обновлено!');
});

document.querySelectorAll('.cancelBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Задание отменено!');
  });
});

document.getElementById('assignForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Специалист назначен!');
});

document.getElementById('hireRequestForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Заявка на подбор отправлена!');
});

document.getElementById('hireParamsForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Специалист добавлен!');
});