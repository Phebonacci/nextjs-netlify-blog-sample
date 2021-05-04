import { AuthorContent } from "../lib/authors";

type Props = {
  author: AuthorContent;
};
const Author: React.FC<Props> = ({ author }: Props) => {
  return (
    <>
      <span>{author.name}</span>
      <style jsx>
        {`
          span {
            color: #9b9b9b;
          }
        `}
      </style>
    </>
  );
}

export default Author
