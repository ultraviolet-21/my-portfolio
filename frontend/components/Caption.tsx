interface CaptionProps {
  caption: string;
}

//displays generated caption
export default function Caption({ caption }: CaptionProps) {
  return <p className="mt-4 text-white">{caption}</p>;
}