const recentGreetings: Set<number> = new Set();
export const maxRecentGreetings = 8; // Number of recent greetings to track

const hoursLeft = 24 - new Date().getHours();

const greetingsText: string[] = [
  "Vamos fazer este dia valer a pena! **1f680**",
  "Faça as coisas acontecerem e conquiste o dia!",
  "Abraçe o poder da produtividade!",
  "Defina suas metas, conquiste-as, repita.",
  "Hoje é uma nova oportunidade para ser produtivo!",
  "Faça cada momento contar.",
  "Mantenha-se organizado, mantenha-se à frente.",
  "Assuma o controle do seu dia!",
  "Uma tarefa de cada vez, você consegue!",
  "Produtividade é a chave para o sucesso. **1f511**",
  "Vamos transformar planos em conquistas!",
  "Comece pequeno, conquiste grandes coisas.",
  "Seja eficiente, seja produtivo.",
  "Aproveite o poder da produtividade!",
  "Prepare-se para fazer as coisas acontecerem!",
  "É hora de riscar as tarefas da lista! **2705**",
  "Comece o seu dia com um plano! **1f5d3-fe0f**",
  "Mantenha o foco, mantenha-se produtivo.",
  "Desbloqueie seu potencial de produtividade. **1f513**",
  "Transforme sua lista de tarefas em uma lista de feitos! **1f4dd**",
  `Tenha uma maravilhosa ${new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
  })}!`,
  `Feliz ${new Date().toLocaleDateString("pt-BR", {
    month: "long",
  })}! Um ótimo mês para produtividade!`,
  hoursLeft > 4
    ? `${hoursLeft} horas restantes no dia. Use-as sabiamente!`
    : `Apenas ${hoursLeft} horas restantes no dia`,
];

/**
 * Returns a random greeting message to inspire productivity.
 * @returns {string} A random greeting message with optional emoji code.
 */
export const getRandomGreeting = (): string => {
  // Function to get a new greeting that hasn't been used recently
  const getUniqueGreeting = (): string => {
    let randomIndex: number;
    do {
      randomIndex = Math.floor(Math.random() * greetingsText.length);
    } while (recentGreetings.has(randomIndex));

    // Update recent greetings
    recentGreetings.add(randomIndex);
    if (recentGreetings.size > maxRecentGreetings) {
      const firstEntry = Array.from(recentGreetings).shift();
      if (firstEntry !== undefined) {
        recentGreetings.delete(firstEntry);
      }
    }

    return greetingsText[randomIndex];
  };

  return getUniqueGreeting();
};
