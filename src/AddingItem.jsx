import uniqid from "uniqid";
import Swal from "sweetalert2";

export default function AddingItem({ items, setItems, updateLocalStorage }) {
  var uniqid = require("uniqid");
  function addItem() {
    const value = document.getElementById("quantityInput").value;
    const text = document.getElementById("tripInput").value;
    if (value===""||text==="") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please enter your item",
      });
    } 
    else if (Number(value) <= 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "value must be greater than 0",
      });
    } 
    else if (Number(value) > 100) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "value must be less than 100",
      });
    } 
    else {
      const newItem = {
        number: parseInt(value),
        text: text,
        checked: false,
        id: uniqid(),
      };
      const newItems = [...items, newItem];
      setItems(newItems);
      updateLocalStorage(newItems);
          document.getElementById("quantityInput").value="";
          document.getElementById("tripInput").value="";
    }
  }

  return (
    <>
      <div className="bg-warning-subtle d-flex w-100 gap-2  justify-content-center p-2 align-items-center">
        <p className=" p-0 m-0">
          what do you need for your
          <span role="img" aria-label="smiley face">
            😃
          </span>
          trip ?
        </p>
        <input
          type="number"
          className=" rounded-pill border-0 text-center "
          id="quantityInput"
          min="0"
          max="100"
        ></input>
        <input
          type="text"
          className=" rounded-pill border-0 text-center"
          id="tripInput"
          placeholder="Enter item"
        ></input>
        <button
          type="button"
          className=" btn btn-success rounded-pill"
          onClick={addItem}
        >
          Add
        </button>
      </div>
    </>
  );
}
