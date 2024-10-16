import Link from "next/link";

type Inbox = {
  id: number;
  headline: string;
};

const inboxes: Record<number, Inbox[]> = {
  1: [
    { id: 1, headline: "Hello, world!" },
    { id: 2, headline: "Another message" },
  ],
  2: [
    { id: 3, headline: "Starred message" },
    { id: 4, headline: "Important message" },
  ],
  3: [
    { id: 5, headline: "Sent message" },
    { id: 6, headline: "Another sent message" },
  ],
};

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { inboxId: string };
}) {
  return (
    <fieldset className="border border-solid border-1 border-slate-700 p-4">
      <legend>/inbox/[inboxId]/layout.tsx</legend>
      <div className="flex flex-1">
        <div className="flex-1">
          <h1>Inbox {params.inboxId}</h1>

          {inboxes[Number(params.inboxId)].map((message) => (
            <div key={message.id}>
              <Link href={`/inbox/${params.inboxId}/message/${message.id}`}>
                {message.headline}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </fieldset>
  );
}
