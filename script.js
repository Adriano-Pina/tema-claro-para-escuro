// Seleciona o botão de alternância de tema
const themeToggle = document.querySelector('#theme-toggle');

// Verifica se o tema atual é claro ou escuro
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.body.classList.add(currentTheme);
} else {
  document.body.classList.add('light');
}

// Alterna entre os temas claro e escuro quando o botão é clicado
themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');

  // Salva o tema atual no cache do navegador
  const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});