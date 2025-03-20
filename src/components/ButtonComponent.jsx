export default function Button(props) {
  // Add the necessary classes to the button based on the type prop
  // type prop should be either "primary" or "secondary"
  const className =
    props.type === "primary"
      ? "text-primary-500 border-1 border-primary-500 rounded-lg font-semibold"
      : "text-white border-1 border-primary-500 bg-primary-500 rounded-lg font-semibold hover:bg-primary-400 hover:border-primary-400";

  return (
    <a
      href={props.link}
      className={`inline-block px-4 py-2 font-semibold ${className}`}
    >
      {props.children}
    </a>
  );
}
