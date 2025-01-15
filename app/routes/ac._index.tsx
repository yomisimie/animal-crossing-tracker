import { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export let loader: LoaderFunction = async () => {
  return { message: "Animal Crossing (GCN)" };
};

export const meta: MetaFunction = () => {
  return [
    { title: "Animal Crossing (GCN)" },
    { name: "description", content: "Track your progress" },
  ];
};

export default function Index() {
  let data = useLoaderData();

  return (
    <div>
      <h1 className="mx-auto text-center text-3xl font-[FinkHeavy] text-primary py-5">
        Animal Crossing (GCN)
      </h1>
      <nav className="flex flex-col items-center justify-center gap-2 rounded-3xl border border-gray-200 p-6 dark:border-gray-700">
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
              href="ac/fish"
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
