import { Magician, Daemon } from "./characters";

test("Magician attack without stoned", () => {
  const magician = new Magician("Gandalf");
  magician.distance = 2;
  expect(magician.attack).toBe(90);
});

test("Magician attack with stoned", () => {
  const magician = new Magician("Gandalf");
  magician.distance = 2;
  magician.stoned = true;
  expect(magician.attack).toBeCloseTo(85);
});

test("Daemon attack without stoned", () => {
  const daemon = new Daemon("Balrog");
  daemon.distance = 3;
  expect(daemon.attack).toBe(80); // Обновлено ожидаемое значение
});

test("Daemon attack with stoned", () => {
  const daemon = new Daemon("Balrog");
  daemon.distance = 3;
  daemon.stoned = true;
  expect(daemon.attack).toBeCloseTo(72.075, 3); // Обновлено ожидаемое значение
});
