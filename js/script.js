// Gestion de la section 'Qui' selon la taille de l'écran
const quiBreakpoint = window.matchMedia("(max-width: 850px)");

// Gestion des tailles d'écrans pour les compétences
const competencesBreakpoints = [
  {
    query: "(min-width: 1300px)",
    className: "row-cols-md-4",
  },
  {
    query: "(min-width: 1000px) and (max-width: 1299px)",
    className: "row-cols-md-3",
  },
  {
    query: "(min-width: 426px) and (max-width: 999px)",
    className: "row-cols-md-2",
  },
  {
    query: "(max-width: 425px)",
    className: "row-cols-md-1",
  },
];

const projetsBreakpoints = [
  {
    query: "(min-width: 1300px)",
    className: "row-cols-md-3",
  },
  {
    query: "(min-width: 1000px) and (max-width: 1299px)",
    className: "row-cols-md-2",
  },
  {
    query: "(max-width: 999px)",
    className: "row-cols-md-1",
  },
];

// Gestion des changements
function updateClass() {
  const quiElement = document.getElementById("qui");
  const competencesElement = document.getElementById("competencesCards");
  const projetsSecondaireElements = document.getElementById(
    "projetsSecondaireCards"
  );

  // Remplacement des class de 'Qui'
  if (quiBreakpoint.matches) {
    quiElement.classList.remove("flex-row");
    quiElement.classList.add("flex-column");
  } else {
    quiElement.classList.remove("flex-column");
    quiElement.classList.add("flex-row");
  }

  // Remplacement des class des cards de competences
  competencesBreakpoints.forEach(({ query, className }) => {
    if (window.matchMedia(query).matches) {
      competencesElement.className = "";
      competencesElement.classList.add("row", "row-cols-1", className, "g-4");
    }
  });

  // Remplacement des class des cards de projets
  projetsBreakpoints.forEach(({ query, className }) => {
    if (window.matchMedia(query).matches) {
      projetsSecondaireElements.className = "";
      projetsSecondaireElements.classList.add(
        "row",
        "row-cols-1",
        className,
        "g-4"
      );
    }
  });
}

competencesBreakpoints.forEach(({ query }) => {
  window.matchMedia(query).addEventListener("change", updateClass);
});

projetsBreakpoints.forEach(({ query }) => {
  window.matchMedia(query).addEventListener("change", updateClass);
});

// Ajout de l'écouteur d'événement pour le resize de l'écran
window.addEventListener("resize", updateClass);

updateClass();
