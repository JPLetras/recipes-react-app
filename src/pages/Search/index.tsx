import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import {
  Container,
  Form,
  MealContainer,
  MealImage,
  MealText,
  ZeroContainer,
} from "./styles";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strYoutube: string;
}

function Search() {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState<Meal[]>([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((response) => {
        if (response.data.meals) {
          setResults(response.data.meals);
        } else {
          setResults([]);
        }
        setSearchPerformed(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchText(event.currentTarget.value);
  }

  return (
    <Container>
      <Form>
        <div>
          <h3>Search recipes by name</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search the recipe..."
              value={searchText}
              onChange={handleInputChange}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </Form>
      <ZeroContainer>
        {searchPerformed && results.length === 0 && (
          <p>No recipes found. Please try a different search term.</p>
        )}
      </ZeroContainer>

      {results.map((meal: any) => (
        <MealContainer key={meal.idMeal}>
          <MealImage src={meal.strMealThumb} alt={meal.strMeal} />
          <MealText>
            <h3>{meal.strMeal}</h3>
            <p>
              {meal.strIngredient1} : {meal.strMeasure1}
            </p>
            <p>
              {meal.strIngredient2} : {meal.strMeasure2}
            </p>
            <p>
              {meal.strIngredient3} : {meal.strMeasure3}
            </p>
            <p>
              {meal.strIngredient4} : {meal.strMeasure4}
            </p>
            <p>
              {meal.strIngredient5} : {meal.strMeasure5}
            </p>
            <p>
              {meal.strIngredient6} : {meal.strMeasure6}
            </p>
            <p>
              {meal.strIngredient7} : {meal.strMeasure7}
            </p>
            <p>
              {meal.strIngredient8} : {meal.strMeasure8}
            </p>
            <p>{meal.strInstructions}</p>
            <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">
              {meal.strYoutube}
            </a>
          </MealText>
        </MealContainer>
      ))}
    </Container>
  );
}

export default Search;
