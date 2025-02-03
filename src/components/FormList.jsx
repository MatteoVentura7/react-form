import { useState } from "react";

function FormList() {
  const [shoppingList] = useState(["Pane", "Pizza", "Pasta", "Riso", "Uova"]);

  return (
    <div>
      <ul>
        {shoppingList.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default FormList;
