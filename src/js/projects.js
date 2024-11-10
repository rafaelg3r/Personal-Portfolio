
document.addEventListener("DOMContentLoaded", function() {
  const projects = [
      {
          title: "Projeto 1",
          description: "Descrição do Projeto 1.",
          image: "src/imgs/4-Projetos/projects-images/mcast.png",
          github: "https://github.com/rafaelg3r/1-MCast",
          website: "https://rafaelg3r.github.io/1-MCast/"
      },
      {
          title: "Projeto 2",
          description: "Descrição do Projeto 2.",
          image: "src/imgs/4-Projetos/projects-images/play-learn.png",
          github: "https://github.com/rafaelg3r/playandlearn",
          website: "https://rafaelg3r.github.io/playandlearn/"
      },
      {
          title: "Projeto 3",
          description: "Descrição do Projeto 2.",
          image: "src/imgs/4-Projetos/projects-images/play-learn.png",
          github: "https://github.com/rafaelg3r/Personal-Portfolio",
          website: " https://rafaelg3r.github.io/Personal-Portfolio/"
      },
      
  ];

  let currentProjectIndex = 0;

  const titleElement = document.querySelector('.project-tittle');
  const descriptionElement = document.querySelector('.project-description');
  const githubButton = document.getElementById('github-link');
  const websiteButton = document.getElementById('website-link');

  function updateProject() {
      const project = projects[currentProjectIndex];
      titleElement.textContent = project.title;
      descriptionElement.textContent = project.description;
      githubButton.setAttribute('onclick', `window.open('${project.github}', '_blank')`);
      websiteButton.setAttribute('onclick', `window.open('${project.website}', '_blank')`);
  }

  // Função para ir para o próximo projeto
  function nextProject() {
      currentProjectIndex = (currentProjectIndex + 1) % projects.length; // Cicla de volta ao início
      updateProject();
  }

  // Adiciona evento ao botão
  const toggleButton = document.getElementById('toggle-projects');
  toggleButton.addEventListener('click', nextProject);

  // Inicializa o primeiro projeto
  updateProject();
});