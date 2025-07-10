const fruits = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Orange" },
  { id: 4, name: "Grape" },
  { id: 5, name: "Strawberry" },
  { id: 6, name: "Mango" },
  { id: 7, name: "Pineapple" },
  { id: 8, name: "Watermelon" },
  { id: 9, name: "Kiwi" },
  { id: 10, name: "Peach" }
];

export async function getAllFruits() {
  console.log('Fetching all fruits from array');
  return fruits;
}

export async function getFruitById(id: number) {
  console.log(`Fetching fruit with id: ${id}`);
  const fruit = fruits.find(f => f.id === id);
  if (!fruit) {
    throw new Error('Fruit not found');
  }
  return fruit;
}