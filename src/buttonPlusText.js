/* function myFirstComponent() {
  return <div>This is my first React component.</div>;
}

export default myFirstComponent; */

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    /* console.log("Rákattintottak a linkre."); */
    document
      .getElementById("root")
      .querySelectorAll("button")
      .item(0)
      .insertAdjacentHTML("afterend", `<p>Text on Click!</p>`);
  }

  return <button onClick={handleClick}>Kattints rám</button>;
}

export default ActionLink;
