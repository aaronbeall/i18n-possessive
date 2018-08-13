import { possessive } from "../src/possessive";

test("English", () => {
  expect(possessive("John", "en")).toBe("John’s");
});

test("Spanish", () => {
  expect(possessive("Sebastián", "es")).toBe("de Sebastián");
});

test("French", () => {
  expect(possessive("Bella", "fr")).toBe("de Bella");

  expect(possessive("Adalene", "fr")).toBe("d’Adalene");
  expect(possessive("Ella", "fr")).toBe("d’Ella");
  expect(possessive("Isabelle", "fr")).toBe("d’Isabelle");
  expect(possessive("Odette", "fr")).toBe("d’Odette");
  expect(possessive("Udo", "fr")).toBe("d’Udo");
});

test("German", () => {
  expect(possessive("Leon", "de")).toBe("Leons");
  
  expect(possessive("Niklas", "de")).toBe("Niklas’");
  expect(possessive("Heinz", "de")).toBe("Heinz’");
  expect(possessive("Voß", "de")).toBe("Voß’");
  expect(possessive("Hendrix", "de")).toBe("Hendrix’");
});

test("Japanese", () => {
  expect(possessive("はると", "ja")).toBe("はるとの");
});