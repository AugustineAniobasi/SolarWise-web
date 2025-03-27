/**
 * Button component to display a styled button with optional types.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.type - The type of button, either "primary" or "secondary".
 * @param {string} props.link - The URL to link to when the button is clicked.
 * @param {React.ReactNode} props.children - The content to display inside the button.
 */

export default function Button(props) {
  const className =
    props.type === "primary"
      ? "text-primary-500 border-1 border-primary-500 rounded-lg font-semibold hover:text-primary-400 hover:border-primary-400"
      : "text-white border-1 border-primary-500 bg-primary-500 rounded-lg font-semibold hover:bg-primary-400 hover:border-primary-400";

  return (
    <a
      href={props.link}
      className={`flex w-fit items-center justify-center px-4 py-2 font-semibold ${className}`}
    >
      {props.children}
    </a>
  );
}
