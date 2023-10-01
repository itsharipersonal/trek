interface Props {
  id: string;
  currentUserId: string;
  parentId: string | null;
  author: {
    name: string;
    image: string;
    id: string;
  };
  content: string;
  community: {
    name: string;
    image: string;
    id: string;
  } | null;
  createdAt: string;
  comments: {
    author: {
      image: string;
    };
  }[];
  isComment?: boolean;
}
function ThreadCard({
  id,
  currentUserId,
  parentId,
  author,
  content,
  community,
  createdAt,
  comments,
}: Props) {
  return (
    <article className="flex w-full flex-col rounded-xl bg-dark-2 p-7">
      <h2 className="text-small-regular text-light-2">{content}</h2>
    </article>
  );
}

export default ThreadCard;
