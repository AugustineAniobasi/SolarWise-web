/**
 * Banner component to display a banner with optional content.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The content to display inside the banner.
 */

import "./Banner.css";

export default function Banner(props) {
  function hide() {
    const banner = document.getElementById("banner");
    banner.style.display = "none";
  }

  return (
    <>
      {props.children ? (
        <div id="banner">
          <p>{props.children}</p>
          <button onClick={hide}></button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
