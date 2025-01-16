import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Animal Crossing (GCN)" },
    { name: "description", content: "Track your progress" },
  ];
};

export default function Index() {
  return (
    <div>
      <div className="flex py-5">
        <a href="/" className="btn btn-primary">
          <i className="icon-arrow-left"></i>
        </a>
        <h1 className="mx-auto text-center text-3xl font-[FinkHeavy] text-primary self-center">
          Animal Crossing (GCN)
        </h1>
      </div>
      <nav className="flex flex-col items-center justify-center gap-2 rounded-3xl border p-6 max-w-xs mx-auto border-gray-700">
        <ul className="w-full my-2">
          <li key="ac/bugs" className="my-2">
            <a
              className="flex items-center gap-3 self-stretch p-2 btn btn-primary"
              href="ac/bugs"
              rel="noreferrer"
            >
              <i className="icon-bug-net text-2xl"></i>
              Bugs
            </a>
          </li>
          <li key="ac/fish" className="my-2">
            <a
              className="flex items-center gap-3 self-stretch p-2 btn btn-primary"
              href="ac/fish"
              rel="noreferrer"
            >
              <i className="icon-fishing-pole text-2xl"></i>
              Fish
            </a>
          </li>
          <li key="ac/fossils" className="my-2">
            <a
              className="flex items-center gap-3 self-stretch p-2 btn btn-primary"
              href="ac/fossils"
              rel="noreferrer"
            >
              <i className="icon-fossil text-2xl"></i>
              Fossils
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
