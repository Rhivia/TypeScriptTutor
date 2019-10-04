const drink = {
  color: 'brown',
  cabonated: true,
  sugar: 40
};

// Type alias. Ideia of a tuple, make it reusable.
type Drink = [string, boolean, number];

// Annotating order to tuple types
const pepsi: Drink = ['brown', true, 40];
// pepsi[0] = 40; // Wrong

const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['green', false, 0];

// ==
const carSpecs: [number, number] = [400, 3354];
const carStats = {
  horsepower: 400,
  weight: 3354
};
