import React, { WheelEvent } from "react";
import "./Corousel.css";

interface IItemsProps {
  title: string;
  order: number;
  image: string;
  link: string;
}

interface ICorouselProps {
  items: IItemsProps[];
}

const Corousel: React.FC<ICorouselProps> = (props) => {
  const { items } = props;

  const mouseWheel = (event: WheelEvent) => {
    if (event.deltaY > 0) return event.currentTarget.scrollBy(300, 0);
    else return event.currentTarget.scrollBy(-300, 0);
  };

  const sortItems = (items: IItemsProps[]) =>
    items.sort((a, b) => a.order - b.order);

  return (
    <div id="items-wrapper">
      <div onWheel={mouseWheel} id="items">
        {sortItems(items).map((item) => {
          return (
            <div key={item.order} className="item" onClick={() => window.open(item.link)}>
              <img alt="item" src={item.image}></img>
              <h2>{item.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Corousel;
