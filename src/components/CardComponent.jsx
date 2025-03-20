import Button from "./ButtonComponent";

/**
 * Card component to display content with optional hover effect.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.for - The type of card, either "blog" or "category".
 * @param {string} props.image - The URL of the image to display in the card.
 * @param {string} props.title - The title of the card.
 * @param {string} props.content - The content or description of the card.
 * @param {string} props.link - The URL to link to when the card is clicked.
 */

export default function Card(props) {
  const cardContent = (
    <div
      className={`flex h-[415px] max-w-[304px] flex-col items-start gap-6 overflow-hidden rounded-[1rem] ${props.for === "blog" ? "bg-white tracking-[-0.18px] text-neutral-800" : "bg-[#f4f4f4] transition-transform duration-300 hover:scale-105"}`}
    >
      <img src={props.image} alt="" />
      <div className="px-[18px] text-left">
        <h3 className="text-primary-500 mb-4 flex-1 text-lg font-bold">
          {props.title}
        </h3>
        <p>{props.content}</p>
      </div>
      {props.for === "blog" ? (
        <div className="px-[18px]">
          <Button type="primary" link={props.link}>
            Read more
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );

  return props.for !== "blog" ? (
    <a href={props.link}>{cardContent}</a>
  ) : (
    cardContent
  );
}
