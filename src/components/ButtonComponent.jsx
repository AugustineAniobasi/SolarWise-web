export default function Button(props) {
  const className =
    props.type === "primary"
      ? "text-primary-500 border-1 border-primary-500 rounded-lg font-semibold"
      : "text-neutral-50 border-1 border-primary-500 bg-primary-500 rounded-lg font-semibold hover:bg-primary-400 hover:border-primary-400";

  return (
    <a
      href={props.link}
      className={`py-2 px-4 inline-block font-semibold ${className}`}
    >
      {props.children}
    </a>
  );
}
