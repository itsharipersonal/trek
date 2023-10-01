interface Props {
  threadId: string;
  currentUserImg: string;
  currentUserId: string;
}
function Comment({ threadId, currentUserImg, currentUserId }: Props) {
  return (
    <div>
      <h1>Comment Form</h1>
    </div>
  );
}

export default Comment;
