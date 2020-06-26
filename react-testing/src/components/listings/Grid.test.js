//Facbook.github.io/ject
//Numbers testing
import data from "../../data/courses.json";

const numItems = data.length;

test("Number of items = 12", () => {
  expect(numItems).toBe(12);
});

test("Number of items to be greater than 12", () => {
  expect(numItems).toBeGreaterThanOrEqual(12);
});

// Strings testing
const dataTest = data[0].title;

//Two ways to check string
test("There is a JS in this title", () => {
  expect(dataTest).toMatch(/JS/);
});

test("The title contains React ", () => {
  expect(dataTest).toContain("React");
});

// Arrays testing
const arrayData = ["React Native", "MeteorJS"];
test("The list of course mentions React Native and MeteorJs", () => {
  expect(["React Native", "MeteorJS", "React"]).toEqual(
    expect.arrayContaining(arrayData)
  );
});


//Objects
test("The first course to have a property of Title", () => {
  expect(data[0]).toHaveProperty("title");
});

test("The first course to have a property of Title", () => {
  expect(data[0]).toHaveProperty("views", "31,266");
});
