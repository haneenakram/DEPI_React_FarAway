import { useState } from "react";

export default function Header() {

  return (
    <>
      <div className="Header w-100 bg-warning text-center text-secondary-emphasis">
        <div className="d-flex text-center justify-content-center gap-3 p-2">
          <i className="jumping-item icon1 fa-solid fa-person-walking-luggage fs-1"></i>
          <h1>Far Away</h1>
          <i className="jumping-item icon2 fa-solid fa-suitcase-rolling fs-1"></i>
        </div>
      </div>
    </>
  );
}
