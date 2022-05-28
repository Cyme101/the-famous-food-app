import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sashimi',
    description: 'The finest fish selection',
    price: 32.00,
  },
  {
    id: 'm2',
    name: 'Cauliflower steaks',
    description: 'A Vegan-Keto specialty!',
    price: 17.00,
  },
  {
    id: 'm3',
    name: 'Coconut chicken curry',
    description: 'Inspired by Indian cuisine',
    price: 23.00,
  },
  {
    id: 'm4',
    name: 'The mix grill',
    description: 'Low carb Italian dish',
    price: 28.00,
  },
  {
    id: 'm5',
    name: 'Seared tuna steaks',
    description: 'Meaty tuna with Mediterranean flavors',
    price: 24.00,
  }
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
