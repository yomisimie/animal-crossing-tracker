import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export let loader: LoaderFunction = async () => {
    return { message: "Hello from Animal Crossing Tracker!" };
};

export default function Index() {
    let data = useLoaderData();

    return (
        <div>
            <h1>{data.message}</h1>
        </div>
    );
}