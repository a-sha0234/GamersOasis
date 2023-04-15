import { AiFillHeart } from "react-icons/ai";
import * as React from "react";

interface Props {
  data: any;
}

const GameCard: React.FC<Props> = ({ data }) => {
  console.log(data.id);
  return (
    <div className={data.id}>
      <a href={`/store/${data.id}`}>
        <img />
      </a>
      <button>Add to cart +</button>
      <button>
        <AiFillHeart />
      </button>
    </div>
  );
};

export default GameCard;
