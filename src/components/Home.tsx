import React, { useEffect, useState } from "react";
import { getCategories } from "../services/quiz_service";
import { CategoriesType } from "../types/quiz_types";
import "./home.css";
import { useData } from "../context/GlobalContex";

const Home = () => {
  const { formData, setFormData, setSubmit } = useData()!;
  const [categories, setCategories] = useState<CategoriesType[]>([]);

  let difficultyLevel = ["Easy", "Medium", "Hard"];
  let questionCount = [5, 10, 15, 20, 25, 30];

  useEffect(() => {
    async function fetchData() {
      const FetchCatagories = await getCategories();
      setCategories(FetchCatagories);
    }
    fetchData();
  }, []);

  const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    setSubmit(true);
  };

  const handleChange = (event: any) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };
  return (
    <div>
      <h2>Quiz App</h2>
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <label>
            <p>Select A Category</p>
            <select name="category" onChange={handleChange} required>
              <option value="">--Please choose a category--</option>
              {categories.map(({ name, id }, index: number) => (
                <option key={index} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </label>
          <label>
            <p>Select Difficulty Level</p>
            <select name="level" onChange={handleChange} required>
              <option value="">--Please choose a difficulty level--</option>
              {difficultyLevel.map((level, index: number) => (
                <option value={level.toLowerCase()} key={index}>
                  {level}
                </option>
              ))}
            </select>
          </label>
          <label>
            <p>Select Number of Questions</p>
            <select name="count" onChange={handleChange}>
              <option value="">--Please choose number of questions--</option>
              {questionCount.map((count, index: number) => (
                <option value={count} key={index}>
                  {count}
                </option>
              ))}
            </select>
          </label>
          <button type="submit">Start Quiz</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
