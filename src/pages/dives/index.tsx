import { type NextPage } from "next";
import { trpc } from "../../utils/trpc";

const Home: NextPage = () => {
  const {data: dives} = trpc.dive.getAll.useQuery();

  return (
    <>
      <h3 className="text-2xl font-bold">Dives list</h3>
      {!dives ? <p className="text-2xl">Loading dives...</p> : dives.map((dive) => <div key={dive.id}>
        <p className="text-2xl">{ JSON.stringify(dive, null, 2) }</p>
      </div>)}
    </>
  );
};

export default Home;

