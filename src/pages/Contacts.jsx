import React from "react";

function Contacts() {
  return (
    <>
      <main className="section">
        <div className="container">
          <h1 className="title-1">Contacts</h1>

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Location</h2>
              <p>Odessa, Ukraine</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Telegram / Viber</h2>
              <p>
                <a href="tel:+380689976620">+380 (68) 99-76-620</a>
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Email</h2>
              <p>
                <a href="mailto:envy7321@gmail.com">envy7321@gmail.com</a>
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default Contacts;
