import React from 'react';

const ingredients = [];

export default function UserInput(props) {
  const { setBarContents, setIngName } = props;

  async function submitIng() {

    const input = document.getElementById('ing-input');
    const ingName = input.value;
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/images/ingredients/${ingName}-Medium.png`
      );
      const data = await res;
      let check = data.ok;
      if (check === true) {

        ingredients.push(data.url);
        console.log('data: ', data);
        console.log('ingredients: ', ingredients);

        //name of submitted ingredient
        setIngName(ingName);
        //images from submitted ingredients
        setBarContents(ingredients);
      }


    } catch (err) {
      console.log('Error during fetch for ingredient', err);
    }
  }
  return (
    <div className='stock-bar'>
      <h1>Stock Your Bar</h1>
      <div id="user-input">
        <input type="text" placeholder="Enter Ingredient by Type" id="ing-input" />
        <button className='ingBtn' onClick={submitIng}>Submit</button>
      </div>
      <div className='input-message'></div>
    </div>
  );
}

