import { timeAgo, formatDate, calculateDateDifference } from "../timeUtils";

describe("Funções utilitárias de data", () => {
  beforeEach(() => {
    // Mock do idioma do navegador
    vi.stubGlobal("navigator", { language: "pt-BR" });
  });

  describe("timeAgo", () => {
    it('deve retornar "agora" para datas recentes', () => {
      const now = new Date();
      expect(timeAgo(now)).toBe("agora");
    });

    it('deve retornar "há 2 dias" para uma data de 2 dias atrás', () => {
      const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
      expect(timeAgo(twoDaysAgo)).toBe("há 2 dias");
    });
  });

  describe("formatDate", () => {
    it('deve retornar "hoje" para a data de hoje', () => {
      const today = new Date();
      expect(formatDate(today)).toMatch(/^hoje \d{1,2}:\d{2} (AM|PM)$/);
    });

    it('deve retornar "ontem" para a data de ontem', () => {
      const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
      expect(formatDate(yesterday)).toMatch(/^ontem \d{1,2}:\d{2} (AM|PM)$/);
    });
  });

  describe("calculateDateDifference", () => {
    it('deve retornar o dia da semana e "em 2 dias" para uma data futura em 2 dias', () => {
      const twoDaysLater = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
      const result = calculateDateDifference(twoDaysLater);
      expect(result).toMatch(/^[A-ZÁÉÍÓÚÂÊÎÔÛÃÕÇ][a-záéíóúâêîôûãõç]+ \(em 2 dias\)$/);
    });

    it('deve retornar "Não concluído no prazo" para uma data no passado', () => {
      const pastDate = new Date(Date.now() - 24 * 60 * 60 * 1000);
      expect(calculateDateDifference(pastDate)).toMatch(/^Não concluído no prazo/);
    });
  });
});

describe("com localidade em polonês", () => {
  beforeEach(() => {
    // Mock do idioma do navegador
    vi.stubGlobal("navigator", { language: "pl-PL" });
  });

  describe("timeAgo", () => {
    it('deve retornar "teraz" para datas recentes', () => {
      const now = new Date();
      expect(timeAgo(now)).toBe("teraz");
    });
  });

  describe("formatDate", () => {
    it('deve retornar "dzisiaj" para a data de hoje', () => {
      const today = new Date();
      expect(formatDate(today)).toMatch(/^dzisiaj \d{1,2}:\d{2}$/);
    });

    it('deve retornar "wczoraj" para a data de ontem', () => {
      const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
      expect(formatDate(yesterday)).toMatch(/^wczoraj \d{1,2}:\d{2}$/);
    });
  });
});
