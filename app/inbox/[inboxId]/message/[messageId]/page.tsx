export default async function MessagePage({
  params,
}: {
  params: { inboxId: string; messageId: string };
}) {
  return (
    <fieldset className="border border-solid border-1 border-slate-700 p-4">
      <legend>/inbox/[inboxId]/message/[messageId]/page.tsx</legend>
      <div>
        <h2>Message Content</h2>
        <p>{`Content of message ${params.messageId}`}</p>
      </div>
    </fieldset>
  );
}
