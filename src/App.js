import { useState, useEffect } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
  const sortOptions = [
    "Featured",
    "Best Selling",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, low to high",
    "Price, high to low",
  ];

  const [itemList, setItemList] = useState([]);

  async function getItems() {
    const res = await fetch("http://localhost:5001");
    const data = await res.json();
    setItemList(data);
  }

  useEffect(() => {
    getItems();
  }, []);

  const [itemArr, setItemArr] = useState([]);

  const [chosenCat, setCat] = useState("All items");

  const [sortBy, setSortBy] = useState("Featured");

  const [cartArr, setCartArr] = useState([]);

  const categories = [
    "All items",
    ...itemList
      .map((p) => p.category)
      .filter((value, index, array) => array.indexOf(value) === index),
  ];

  useEffect(() => {
    setItemArr(
      sortItems(
        chosenCat === "All items"
          ? itemList
          : itemList.filter((item) => item.category === chosenCat),
        sortBy
      )
    );
    console.log(itemList);
  }, [chosenCat, sortBy, itemList]);

  const sortItems = (arr, chosenSort) =>
    chosenSort === "Featured"
      ? [...arr].sort((a, b) => b.rating.rate - a.rating.rate)
      : chosenSort === "Best Selling"
      ? [...arr].sort((a, b) => b.rating.count - a.rating.count)
      : chosenSort === "Alphabetically, A-Z"
      ? [...arr].sort((a, b) => (b.title < a.title ? 1 : -1))
      : chosenSort === "Alphabetically, Z-A"
      ? [...arr].sort((a, b) => (b.title < a.title ? 1 : -1)).reverse()
      : chosenSort === "Price, low to high"
      ? [...arr].sort((a, b) => b.price - a.price).reverse()
      : chosenSort === "Price, high to low"
      ? [...arr].sort((a, b) => b.price - a.price)
      : {};

  return (
    <>
      <Header
        setCat={setCat}
        setSortBy={setSortBy}
        categories={categories}
        sortOptions={sortOptions}
      />
      <Products itemArr={itemArr} />
      <Cart />
    </>
  );
}

export default App;
