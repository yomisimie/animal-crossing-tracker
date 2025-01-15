import { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import bugs from "json/ac/bugs.json";
import months from "json/months.json";
import { useState } from "react";
import Bug from "~/types/Bug";

export let loader: LoaderFunction = async () => {
  return bugs;
};

export const meta: MetaFunction = () => {
  return [
    { title: "Bugs (GCN)" },
    { name: "description", content: "Track your progress" },
  ];
};

export default function Index() {
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedMonths, setSelectedMonths] = useState<number[]>([]);

  let data = useLoaderData<typeof loader>();
  // Filter bugs based on selected time and months
  if (selectedTime) {
    data = data.filter((bug: Bug) => {
      return selectedTime >= bug.time.from && selectedTime <= bug.time.to;
    });
  }

  if (selectedMonths.length > 0) {
    data = data.filter((bug: Bug) =>
      selectedMonths.some((month) => bug.months.includes(month))
    );
  }

  return (
    <div>
      <h1 className="mx-auto text-center text-3xl font-[FinkHeavy] text-primary py-5">
        Bugs (GCN)
      </h1>
      <div className="flex justify-start gap-2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn">
            <i className="icon-stopwatch text-2xl"></i>
            {selectedTime ? selectedTime : "--:--"}
            <svg
              width="12px"
              height="12px"
              className="inline-block h-2 w-2 fill-current opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
            >
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl max-h-80 overflow-auto"
          >
            {Array.from({ length: 24 }, (_, i) => (
              <li key={i}>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  checked={
                    selectedTime === `${i.toString().padStart(2, "0")}:00`
                  }
                  aria-label={`${i.toString().padStart(2, "0")}:00`}
                  value={`${i.toString().padStart(2, "0")}:00`}
                  onClick={() =>
                    setSelectedTime(`${i.toString().padStart(2, "0")}:00`)
                  }
                />
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          className="btn btn-error"
          disabled={!selectedTime}
          onClick={() => setSelectedTime("")}
          title="Clear time"
          aria-description="Clear time"
        >
          <i className="icon-cancel"></i>
        </button>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn">
            <i className="icon-calendar text-2xl"></i>
            {selectedMonths.length
              ? selectedMonths
                  .map(
                    (monthId) =>
                      months.find((month) => month.id === monthId)?.shortName
                  )
                  .join(", ")
              : "---"}
            <svg
              width="12px"
              height="12px"
              className="inline-block h-2 w-2 fill-current opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
            >
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl max-h-80 overflow-auto"
          >
            {months.map((month) => (
              <li key={month.id}>
                <input
                  type="checkbox"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block justify-start btn-ghost"
                  checked={selectedMonths.includes(month.id)}
                  aria-label={month.name}
                  value={month.name}
                  onClick={() =>
                    setSelectedMonths((prev) =>
                      prev.includes(month.id)
                        ? prev.filter((id) => id !== month.id)
                        : [...prev, month.id]
                    )
                  }
                />
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          className="btn btn-error"
          disabled={!selectedMonths.length}
          onClick={() => setSelectedMonths([])}
          title="Clear months"
          aria-description="Clear months"
        >
          <i className="icon-cancel"></i>
        </button>
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Location</th>
            <th>Time</th>
            <th>Months</th>
          </tr>
        </thead>
        <tbody>
          {data.map((bug: Bug) => (
            <tr key={bug.id}>
              <td>{bug.name}</td>
              <td>
                <img src={bug.image} alt={bug.name} />
              </td>
              <td>{bug.price}</td>
              <td>{bug.location}</td>
              <td>{bug.weather}</td>
              <td>{`${bug.time.from} - ${bug.time.to}`}</td>
              <td>
                <ul className="flex gap-1">
                  {months.map((month) => (
                    <li
                      key={month.name}
                      className={`badge  ${
                        bug.months.includes(month.id)
                          ? "badge-primary"
                          : "badge-neutral"
                      }`}
                    >
                      {month.shortName}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
