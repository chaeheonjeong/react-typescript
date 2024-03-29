import React, { useState } from "react";

export type Props = {
  imgUrl: string;
  text: string;
};

type ComplexCount = {
  value: number;
  mutation: number;
};

export default function CaptionImage({ imgUrl, text }: Props) {
  const [count, setCount] = useState<ComplexCount>({ value: 0, mutation: 0 });
  console.log(count.value);
  console.log(count.mutation);

  return (
    <div>
      <img src={imgUrl} alt={text} />
      <p>{text}</p>
    </div>
  );
}
