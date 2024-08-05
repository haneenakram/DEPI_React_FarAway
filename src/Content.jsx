import Footer from "./Footer";
import Swal from "sweetalert2";

export default function Content({
  items,
  setItems,
  loadData,
  updateLocalStorage,
}) {
  return (
    <>
      <div className="main-bg w-100 vh-100 d-flex justify-content-between flex-column position-relative flex-grow-1">
        <div className="p-3 d-flex  gap-3 m-4 overflow-x-auto">
          {items.map((item, index) => (
            <div
              className="rounded-pill item bg-warning-subtle p-1 d-flex justify-content-between align-items-center gap-1"
              id={index}
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  const updatedItems = items.map((existingItem, i) =>
                    item.id === existingItem.id
                      ? { ...existingItem, checked: isChecked }
                      : existingItem
                  );
                  updateLocalStorage(updatedItems);
                  setItems(updatedItems);
                }}
              />
              <p className={item.checked ? "strikethrough m-0" : "m-0"}>
                {item.number} {item.text}
              </p>
              <span
                role="img"
                aria-label="red X"
                className="fs-6 btn"
                onClick={(e) => {

                  Swal.fire({
                    title: "Are you sure you want to delete this item?",
                    showCancelButton: true,
                    confirmButtonText: "Delete",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      const updatedItems = items.filter(
                        (existingItem) => item.id !== existingItem.id
                      );
                      updateLocalStorage(updatedItems);
                      setItems(updatedItems);
                      Swal.fire("item deleted successfully!", "", "success");
                    } else if (result.isDenied) {
                      Swal.fire("Changes are not saved", "", "info");
                    }
                  });
                }}
              >
                ❌
              </span>
            </div>
          ))}
        </div>
        <Footer
          items={items}
          setItems={setItems}
          loadData={loadData}
          updateLocalStorage={updateLocalStorage}
        />
      </div>
    </>
  );
}
