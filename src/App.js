import logo from './logo.svg';
import './App.css';
import uniqid from "uniqid";
import Swal from "sweetalert2";
import Header from "./Header";
import { useState } from "react";
import Content from "./Content";
import AddingItem from "./AddingItem";
const key="items";
const initialItems = JSON.parse(localStorage.getItem(key)) || [];
const updateLocalStorage = (items) => {
  localStorage.setItem(key, JSON.stringify(items));
};
function App() {
  const [items, setItems] = useState(initialItems);
  function loadData() {
    setItems(JSON.parse(localStorage.getItem(key)) || []);
  }

  return (
    <>
      <Header />
      <AddingItem
        items={items}
        setItems={setItems}
        updateLocalStorage={updateLocalStorage}
      />
      <Content
        items={items}
        setItems={setItems}
        loadData={loadData}
        updateLocalStorage={updateLocalStorage}
      />
    </>
  );
}

export default App;
