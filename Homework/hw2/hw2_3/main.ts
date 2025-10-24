interface Recipe {
    [key: string]: any;
    image: string;
}

const target = document.getElementsByClassName('target')[0] as HTMLElement | undefined;
if (!target) throw new Error('Target element not found');

fetch('https://dummyjson.com/recipes')
    .then(response => response.json())
    .then((recipesObject: { recipes: Recipe[] }) => {
        const {recipes} = recipesObject;

        for (const recipe of recipes) {
            console.log(recipe);

            const recipeDiv = document.createElement('div');

            for (const recipeKey in recipe) {
                const value = recipe[recipeKey];

                if (Array.isArray(value)) {
                    const arrayAndTitleDiv = document.createElement('div');

                    const title = document.createElement('div');
                    title.innerText = `${recipeKey}:`;

                    const ol = document.createElement('ol');

                    for (const item of value) {
                        const li = document.createElement('li');
                        li.innerText = String(item);
                        ol.appendChild(li);
                    }
                    arrayAndTitleDiv.append(title, ol);
                    recipeDiv.appendChild(arrayAndTitleDiv);
                } else {
                    if (recipeKey !== 'image') {
                        const keyDiv = document.createElement('div');
                        keyDiv.innerText = `${recipeKey}: ${value}`;
                        recipeDiv.appendChild(keyDiv);
                    }
                }
            }
            if (recipe.image) {
                const img = document.createElement('img');
                img.src = recipe.image;
                recipeDiv.appendChild(img);
            }
            target.appendChild(recipeDiv);
        }
    })
    .catch(error => console.error(error));

