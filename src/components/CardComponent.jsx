import Button from "./ButtonComponent";

export default function Card(props) {
  return (
    <div className="flex h-[415px] max-w-[304px] flex-col items-start gap-6 overflow-hidden rounded-[1rem] bg-white">
      <img src={props.image} alt="" />
      <div className="px-[18px] text-left">
        <h3 className="text-primary-500 mb-4 flex-1 text-lg font-bold">
          {props.title}
        </h3>
        <p>{props.content}</p>
      </div>
      <div className="px-[18px]">
        <Button type="primary" link="#">
          Read more
        </Button>
      </div>
    </div>
  );
}
