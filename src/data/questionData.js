import { faker } from "@faker-js/faker";

export const questionData = [
  {
    question: "Êtes-vous capable de vous motiver vous-même ?",
    responses: [
      {
        response: "Oui, j'aime avoir des idées et les appliquer.",
        point: "5",
      },
      {
        response:
          "Si quelqu'un m'aide à démarrer, je continuerai sans aucun doute.",
        point: "3",
      },
      {
        response: "Franchement, je préfère suivre plutôt que diriger.",
        point: "1",
      },
    ],
  },
  {
    question: "Que vous inspire la prise de risque ?",
    responses: [
      {
        response: "J’aime vraiment avoir la sensation de m’aventurer un peu.",
        point: "5",
      },
      {
        response: "Les risques calculés sont parfois acceptables.",
        point: "3",
      },
      {
        response: "Jaime ce qui est sûr et certain.",
        point: "1",
      },
    ],
  },
  {
    question: "Êtes-vous un leader ?",
    responses: [
      {
        response: "Oui.",
        point: "5",
      },
      {
        response: "Oui, quand il le faut.",
        point: "3",
      },
      {
        response: "Non pas vraiment.",
        point: "1",
      },
    ],
  },
  {
    question:
      "Pouvez-vous, vous et votre famille, vous passer d'un revenu régulier ?",
    responses: [
      {
        response: "Oui, si c'est indispensable.",
        point: "5",
      },
      {
        response:
          "Je n'aimerais mieux pas, mais je comprends que cela peut faire partie du processus.",
        point: "3",
      },
      {
        response: "Je n'aime pas du tout cette idée.",
        point: "1",
      },
    ],
  },
  {
    question:
      "Seriez-vous capable de renvoyer quelqu'un qui a vraimen besoin de l'emploi qui occupe dans votre entreprise ?",
    responses: [
      {
        response:
          "Oui, cela ne me plaît peut-être pas, mais c'est parfois inéluctable.",
        point: "5",
      },
      {
        response: "Je l'espère.",
        point: "3",
      },
      {
        response: "Je ne me vois vraiment pas faire cela.",
        point: "1",
      },
    ],
  },
  {
    question: "Êtes-vous prêt à travailler au moins 60 heures par semaine ?",
    responses: [
      {
        response: " Oui, s'il faut en passer par là.",
        point: "5",
      },
      {
        response: "Au début, peut-être.",
        point: "3",
      },
      {
        response:
          "je pense qu'il y a bien d'autres choses plus importantes que le travail.",
        point: "1",
      },
    ],
  },
  {
    question: "Avez-vous confiance en vous ?",
    responses: [
      {
        response: "Bien sûr !",
        point: "5",
      },
      {
        response: " La plupart du temps.",
        point: "3",
      },
      {
        response: " Malheureusement, ce n'est pas l'un de mes points forts.",
        point: "1",
      },
    ],
  },
  {
    question: "Pouvez-vous Vivre dans l'incertitude ?",
    responses: [
      {
        response: "Oui.",
        point: "5",
      },
      {
        response: "Oui, s'il le faut, mais je n'aime pas cela.",
        point: "3",
      },
      {
        response: "Non, j'aime savoir à quoi m'attendre.",
        point: "1",
      },
    ],
  },
  {
    question: "Non, j'aime savoir à quoi m'attendre.",
    responses: [
      {
        response: "Rien ne peut m'en détourner.",
        point: "5",
      },
      {
        response: "La plupart du temps, oui, si j'aime ce que je fais.",
        point: "3",
      },
      {
        response: "Pas toujours.",
        point: "1",
      },
    ],
  },
  {
    question: "Êtes-vous créatif ?",
    responses: [
      {
        response: "Oui, j'ai beaucoup de bonnes idées.",
        point: "5",
      },
      {
        response: "Je peux l'être.",
        point: "3",
      },
      {
        response: "Non pas vraiment.",
        point: "1",
      },
    ],
  },
  {
    question: "Avez-vous l'esprit de compétition ?",
    responses: [
      {
        response: " À l'excès.",
        point: "5",
      },
      {
        response: "Certainement, la plupart du temps.",
        point: "3",
      },
      {
        response: "Pas vraiment, je suis d'une nature plutôt tranquille.",
        point: "1",
      },
    ],
  },
  {
    question: "Avez-vous énormément de volonté et d'autodiscipline ?",
    responses: [
      {
        response: "Oui.",
        point: "5",
      },
      {
        response: "Je suis discipliné quand je dois l'être.",
        point: "3",
      },
      {
        response: "Pas vraiment.",
        point: "1",
      },
    ],
  },
  {
    question:
      "Êtes-vous individualiste ou bien préférez-vous suivre la foule ?",
    responses: [
      {
        response: "Jaime faire les choses moi-même et à ma manière.",
        point: "5",
      },
      {
        response: "Je suis quelque fois un original.",
        point: "3",
      },
      {
        response:
          "Je pense que les gens fortement individualistes sont un peu bizarre.",
        point: "1",
      },
    ],
  },
  {
    question: "Pouvez-vous vous passer de structure ?",
    responses: [
      {
        response: "Oui.",
        point: "5",
      },
      {
        response:
          "En fait, I'idée de vivre sans un travail régulier me met un peu mal à l'aise.",
        point: "3",
      },
      {
        response:
          "Non. J'aime qu'il y ait de la régularité et de l'organisation dans ma vie.",
        point: "1",
      },
    ],
  },
  {
    question:
      "Possédez-vous de nombreuses compétences nécessaires dans les affaires ?",
    responses: [
      {
        response: "Oui, et celles qui me manquent, je les acquerra.",
        point: "5",
      },
      {
        response: "Jen ai quelques-unes.",
        point: "3",
      },
      {
        response: "Non, pas vraiment.",
        point: "1",
      },
    ],
  },
  {
    question:
      "Êtes-vous souple et disposé à changer de méthode quand les choses ne vont pas comme vous le voudriez ?",
    responses: [
      {
        response: "Oui.",
        point: "5",
      },
      {
        response: "Oui, mais les autres ne sont pas forcément d'accord.",
        point: "3",
      },
      {
        response: "Non, j'ai une personnalité plutôt rigide.",
        point: "1",
      },
    ],
  },
  {
    question:
      "Avez-vous une expérience dans l'activité que vous songez à embrasser ?",
    responses: [
      {
        response: "Oui.",
        point: "5",
      },
      {
        response: "Un peu.",
        point: "3",
      },
      {
        response: "Non",
        point: "1",
      },
    ],
  },
  {
    question:
      "pourriez-vous exécuter avec compétence de nombreuses taches dans l'entreprise : comptabilité, vente, marketing, etc. ?",
    responses: [
      {
        response: "Je ne demande qu'à essayer !",
        point: "5",
      },
      {
        response: "Je l'espère.",
        point: "3",
      },
      {
        response: "Cela paraît impressionnant.",
        point: "1",
      },
    ],
  },
  {
    question: " Êtes-vous capable de jongler entre de multiples taches ?",
    responses: [
      {
        response: "Oui.",
        point: "5",
      },
      {
        response: "Je pense.",
        point: "3",
      },
      {
        response: "Ne ne sais pas",
        point: "1",
      },
    ],
  },
  {
    question:
      "Êtes-vous disposé à aller chercher des clients et des donneurs d'ordres ?",
    responses: [
      {
        response: "Bien sûr.",
        point: "5",
      },
      {
        response: "S'il le faut.",
        point: "3",
      },
      {
        response: "Je n'aimerais mieux pas.",
        point: "1",
      },
    ],
  },
  {
    question: "A quel point supportez-vous de vivre sous pression ?",
    responses: [
      {
        response: "Très bien.",
        point: "5",
      },
      {
        response: " Ce n'est pas mon point le plus fort, mais j'y parviens.",
        point: "3",
      },
      {
        response: "Pas bien du tout.",
        point: "1",
      },
    ],
  },
];
