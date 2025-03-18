export default function Banner(props) {
  function hide() {
    const banner = document.getElementById("banner");
    banner.style.display = "none";
  }

  return (
    <div id="banner">
      <p>{props.children}</p>
      <button onClick={hide}></button>
    </div>
  );
}
