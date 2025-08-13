export default function IngredientsList(props) {
  const ingredientsListItems = props.ingredients.map((ingredient) => {
    return (
      <li
        key={ingredient}
        className="text-[#475467] text-[1.125rem] font-[400] font-[Inter] "
      >
        {ingredient}
      </li>
    );
  });

  return (
    <section className="w-[601px]">
      <h2 className="text-[1.875rem] font-[500] font-[Inter] mb-[24px] ">
        Ingredients on hand:
      </h2>
      <ul className="list-disc list-inside indent-1 mb-[27px]">
        {ingredientsListItems}
      </ul>

      {props.ingredients.length >= 4 && (
        <div className="w-[594] h-[109] bg-[#F0EFEB] rounded-[8px] flex flex-row justify-around items-center mb-[30px]">
          <div>
            <h3 className="text-[1.125rem] font-[Inter] font-[500]">
              Ready for the recipe?
            </h3>
            <p className="text-[#6B7280] text-[0.875rem] font-[Inter]">
              Generate a recipe from your list of ingredients
            </p>
          </div>
          <button
            onClick={props.show}
            className="font-[Inter] text-white text-[0.875rem] rounded-[6px] bg-[#D17557] w-[115px] h-[38px]"
          >
            Get a recipe
          </button>
        </div>
      )}
    </section>
  );
}
