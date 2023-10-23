import { matches } from "./data/matches";
import { SportEvent } from "./types/SportEvent";
import { SportBuilder } from "./types/SportBuilder";
import { Soccer } from "./types/Soccer";

test('Detection test Soccer', () => {
  expect(SportBuilder.build(matches[0] as SportEvent).constructor.name).toBe("Soccer");
});

test('Detection test Volleyball', () => {
  expect(SportBuilder.build(matches[1] as SportEvent).constructor.name).toBe("Volleyball");
});

test('Detection test Handball', () => {
  expect(SportBuilder.build(matches[2] as SportEvent).constructor.name).toBe("Handball");
});

test('Detection test Basketball', () => {
  expect(SportBuilder.build(matches[3] as SportEvent).constructor.name).toBe("Basketball");
});

test('Detection test Tennis', () => {
  expect(SportBuilder.build(matches[4] as SportEvent).constructor.name).toBe("Tennis");
});

test('Name test Soccer', () => {
  expect(SportBuilder.build(matches[0] as SportEvent).name).toBe("Chelsea - Arsenal");
});

test('Name test Volleyball', () => {
  expect(SportBuilder.build(matches[1] as SportEvent).name).toBe("Germany - France");
});

test('Name test Handball', () => {
  expect(SportBuilder.build(matches[2] as SportEvent).name).toBe("Pogoń Szczeciń vs Azoty Puławy");
});

test('Name test Basketball', () => {
  expect(SportBuilder.build(matches[3] as SportEvent).name).toBe("GKS Tychy - GKS Katowice");
});

test('Name test Tennis', () => {
  expect(SportBuilder.build(matches[4] as SportEvent).name).toBe("Maria Sharapova vs Serena Williams");
});

test('Score test Soccer', () => {
  expect(SportBuilder.build(matches[0] as SportEvent).score).toBe("2:1");
});

test('Score test Volleyball', () => {
  expect(SportBuilder.build(matches[1] as SportEvent).score).toBe("Main score: 3:0 (set1 25:23, set2 25:19, set3 25:21)");
});

test('Score test Handball', () => {
  expect(SportBuilder.build(matches[2] as SportEvent).score).toBe("34:26");
});

test('Score test Basketball', () => {
  expect(SportBuilder.build(matches[3] as SportEvent).score).toBe("9:7,2:1,5:3,9:9");
});

test('Score test Tennis', () => {
  expect(SportBuilder.build(matches[4] as SportEvent).score).toBe("Main score: 2:1 (set1 7:6, set2 6:3, set3 6:7)");
});
