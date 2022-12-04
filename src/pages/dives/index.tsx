import { type NextPage } from "next";
import { trpc } from "../../utils/trpc";

const Home: NextPage = () => {
  const dives = trpc.dive.getAll.useQuery();

  return (
    <>
    <h3 className="text-2xl font-bold">Dives list</h3>
      <p className="text-2xl">
        {
        !dives.data ? "Loading dives..." : dives.data.map((dive) => <div key={dive.id}>
          { JSON.stringify(dive, null, 2) }
        </div>)
        }
      </p>
    </>
  );
};

export default Home;

