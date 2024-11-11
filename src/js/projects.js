document.addEventListener("DOMContentLoaded", function () {
  const projects = [
    {
      title: "MCast",
      description:
        "O MCast é um projeto desenvolvido como parte de uma atividade escolar, focado em criar um site sobre podcasts. Ele me permitiu aprimorar minhas habilidades em HTML e CSS. Embora não seja muito completo devido ao tempo limitado, acredito ter refletido a essência do podcast de forma acessível.",
      image: "src/imgs/4-Projetos/projects-images/mcast.png",
      github: "https://github.com/rafaelg3r/1-MCast",
      website: "https://rafaelg3r.github.io/1-MCast/",
    },
    {
      title: "Play & Learn",
      description: "O Play & Learn é um projeto que desenvolvi para uma pesquisa cientifica sobre jogos digitais e personalização do aprendizado. O site documenta o processo da pesquisa realizada e o resultado da mesma. Criado em um curto período de 8 horas, o projeto tem como destaque seu design cativante.",
      image: "src/imgs/4-Projetos/projects-images/play-learn.png",
      github: "https://github.com/rafaelg3r/playandlearn",
      website: "https://rafaelg3r.github.io/playandlearn/",
    },
    {
      title: "Portifólio Pessoal",
      description: "Desenvolvi este portfólio para apresentar minhas habilidades como desenvolvedor front-end e web designer. O site destaca minha biografia, habilidades e projetos concluídos. Usei HTML, CSS e JavaScript para criar uma interface funcional e atraente, além de adotar uma abordagem criativa e moderna no design.",
      image: "src/imgs/4-Projetos/projects-images/play-learn.png",
      github: "https://github.com/rafaelg3r/Personal-Portfolio",
      website: " https://rafaelg3r.github.io/Personal-Portfolio/",
    },
  ];

  let currentProjectIndex = 0;

  const titleElement = document.querySelector(".project-tittle");
  const descriptionElement = document.querySelector(
    ".project-description-text"
  );
  const boxImage = document.querySelector(".box");
  const githubButton = document.getElementById("github-link");
  const websiteButton = document.getElementById("website-link");

  function updateProject() {
    const project = projects[currentProjectIndex];
    titleElement.textContent = project.title;
    descriptionElement.textContent = project.description;
    boxImage.style.backgroundImage = `url(${project.image})`;
    githubButton.setAttribute(
      "onclick",
      `window.open('${project.github}', '_blank')`
    );
    websiteButton.setAttribute(
      "onclick",
      `window.open('${project.website}', '_blank')`
    );
  }

  // Função para ir para o próximo projeto
  function nextProject() {
    boxImage.classList.remove('hovered');
  
  currentProjectIndex = (currentProjectIndex + 1) % projects.length; // Cicla de volta ao início
  updateProject();

  setTimeout(() => {
    boxImage.classList.add('hovered');
  }, 0);
  }


  const toggleButton = document.getElementById("toggle-projects");
  toggleButton.addEventListener("click", nextProject);


  
  updateProject();
});
