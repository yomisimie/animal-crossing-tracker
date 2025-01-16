import { useEffect, useState } from "react";

export default function ACNHIndex() {
  const [data, setData] = useState<{ message: string } | null>(null);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      const response = await fetch("/api/message");
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{data.message}</h1>
    </div>
  );
}
