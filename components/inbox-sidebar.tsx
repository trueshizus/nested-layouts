import Link from "next/link";

const inboxes = [
  { id: 1, name: "Inbox" },
  { id: 2, name: "Starred" },
  { id: 3, name: "Sent" },
];

export default async function InboxSidebar() {
  return (
    <div className="w-1/4 p-4">
      <h2>Inboxes</h2>
      {inboxes.map((inbox) => (
        <div key={inbox.id}>
          <Link href={`/inbox/${inbox.id}`} className="text-blue-500">
            {inbox.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
