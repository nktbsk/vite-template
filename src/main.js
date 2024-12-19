import page from 'page';

// Функция для загрузки HTML-файла
function loadHTML(filePath) {
  return fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load ${filePath}`);
      }
      return response.text();
    })
    .catch(error => {
      console.error(error);
      return '<h1>Ошибка загрузки содержимого</h1>';
    });
}

page('/', async () => {
  const content = await loadHTML('./partials/home.html');
  document.getElementById('app').innerHTML = content; // Вставка содержимого
});

page('/about', async () => {
  const content = await loadHTML('./partials/file.html');
  document.getElementById('app').innerHTML = content; // Вставка содержимого
});

// Настройка ссылок
document.addEventListener('click', event => {
  const target = event.target.closest('a');
  if (target && target.getAttribute('href')) {
    event.preventDefault();
    page(target.getAttribute('href'));
  }
});

// Запуск маршрутизации
page();
