import Ingredient from "./Ingredient";

const IngredientList = ({ list }) => (
  <ul className="ingredients">
    {list.map((ingredient, i) => (
      <Ingredient key={i} {...ingredient} />
    ))}
    {/*instead of writing amount={ingredient.amount} and so on; this is much better*/}
  </ul>
);

export default IngredientList;
