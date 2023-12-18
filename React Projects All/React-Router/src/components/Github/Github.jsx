/** @format */
import { useLoaderData } from "react-router-dom";

export const Github = () => {
  const data = useLoaderData();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <img
        className="rounded-full mb-7"
        src={data.avatar_url}
        width={300}
        alt="Bidhan Deb Nath"
      />
      <h1 className="text-black text-3xl mb-4 text-center">{data.name}</h1>
      <h1 className="text-black  text-2xl text-center">
        Github Followers: {data.followers}
      </h1>
    </div>
  );
};
