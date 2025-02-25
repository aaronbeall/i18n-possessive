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

test("Portuguese", () => {
  expect(possessive("Carlos", "pt")).toBe("de Carlos");
});

test("Italian", () => {
  expect(possessive("Giovanni", "it")).toBe("di Giovanni");
});

test("Russian", () => {
  expect(possessive("Анна", "ru")).toBe("Анна’s");
});

test("Hindi", () => {
  expect(possessive("राम", "hi")).toBe("राम का");
});

test("Arabic", () => {
  expect(possessive("علي", "ar")).toBe("ل علي");
});

test("Mandarin Chinese", () => {
  expect(possessive("张", "zh")).toBe("张的");
});

test("Japanese", () => {
  expect(possessive("はると", "ja")).toBe("はるとの");
});

test("Korean", () => {
  expect(possessive("철수", "ko")).toBe("철수의");
});

test("Turkish", () => {
  expect(possessive("Ahmet", "tr")).toBe("Ahmet’ın");
  expect(possessive("Emre", "tr")).toBe("Emre’nın");
});

test("Dutch", () => {
  expect(possessive("Hans", "nl")).toBe("Hans’");
  expect(possessive("Marie", "nl")).toBe("Maries");
});
