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
      className={`flex h-full w-full flex-col overflow-hidden rounded-xl shadow-md transition-transform duration-300 md:max-w-[320px] ${
        props.for === "blog"
          ? "bg-white text-neutral-800"
          : "bg-[#f4f4f4] hover:scale-[1.03]"
      }`}
    >
      {/* Image Part */}
      <div className="flex h-[150px] w-full items-center justify-center bg-gray-100 ">
        <img
          src={props.image}
          alt={props.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content Part */}
      <div className="flex flex-1 flex-col px-5 py-4 text-left">
        <div className="flex h-full flex-col justify-between">
          {/* Text Content */}
          <div className="mb-auto flex-1">
            <h3 className="text-primary-500 mb-3 text-lg leading-tight font-semibold">
              {props.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              {props.content}
            </p>
          </div>

          {/* Read More Button */}
          {props.for === "blog" && (
            <div className="mt-4">
              <Button type="primary" link={props.link}>
                Read more
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return props.for !== "blog" ? (
    <a href={props.link}>{cardContent}</a>
  ) : (
    cardContent
  );
}