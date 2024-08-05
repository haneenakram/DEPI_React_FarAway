import BottomFooter from "./BottomFooter";
import Swal from "sweetalert2";

export default function Footer({
  items,
  setItems,
  loadData,
  updateLocalStorage,
}) {
  function handleSelectChange(e) {
    const selectedValue = e.target.value;
    switch (selectedValue) {
      case "1":
        const sortedByPacked = [
          ...items.filter((item) => item.checked),
          ...items.filter((item) => !item.checked),
        ];
        setItems(sortedByPacked);
        break;
      case "2":
        loadData();
        break;
      case "3":
        const sortedByAlphabet = [...items].sort((a, b) => {
          return a.text.localeCompare(b.text);
        });
        setItems(sortedByAlphabet);

        break;
      case "4":
        const sortedByNumber = [...items].sort((a, b) => a.number - b.number);
        setItems(sortedByNumber);
        break;

      default:
        break;
    }
  }
  function clearItems() {
    Swal.fire({
      title: "Do you want to clear all items?",
      showDenyButton: true,
      confirmButtonText: "Clear all items",
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        setItems([]);
        updateLocalStorage([]);
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }
  return (
    <div className="position-fixed bottom-0 w-100">
      <div className="p-2   gap-2 d-flex  align-items-center justify-content-center buttom-25">
        <select
          className="main-text rounded-pill p-1 bg-warning-subtle p-2"
          id="itemSelect"
          onChange={handleSelectChange}
        >
          <option value="" disabled selected>
            Sort by..?
          </option>
          <option value="1">sort by packed status</option>
          <option value="2">sort by input order</option>
          <option value="3">sort by description</option>
          <option value="4" >
            sort by amount
          </option>
        </select>
        <button
          type="button"
          className="main-text btn bg-warning-subtle  rounded-pill"
          id="clear"
          onClick={() => clearItems()}
        >
          clear list
        </button>
      </div>
      <BottomFooter items={items} />
    </div>
  );
}
