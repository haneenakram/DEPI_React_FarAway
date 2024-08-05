import { useState } from "react";

export default function BottomFooter({ items }) {
  let checkedItems = 0;
  function cntChecked() {
    items.forEach((element) => {
      if (element.checked) checkedItems++;
    });
  }
  cntChecked();
  return (
    <>
      <div className=" bg-warning-subtle w-100 d-flex align-items-center justify-content-center text-center p-2">
        {items.length > 0 ? (
          <p>
            <span role="img" aria-label="suitcase">
              💼
            </span>
            you have {items.length} items in your list and you already packed{" "}
            {checkedItems} ({((checkedItems / items.length) * 100).toFixed(2)}%)
          </p>
        ) : (
          <p>
            start adding some items to your list
            <span aria-label="a rocket blasting off" role="img">
              🚀
            </span>
          </p>
        )}
      </div>
    </>
  );
}
