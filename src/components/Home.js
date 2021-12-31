import useFetch from "../hooks/useFetch";

function Home() {
  const { response, loading, error } = useFetch(
    "https://iffa-quotes.herokuapp.com/random"
  );

  return (
    <div className="bg-slate-300 text-slate-800 rounded p-2">
      {/* <h1 className="text-2xl"></h1> */}
      <div className="flex flex-col">
        {loading && (
          <div className="text-center text-slate-600 text-xl">
            يرجى الانتظار...
          </div>
        )}
        {error && (
          <div className="bg-red-200 border-red-600 border-2 p-2 rounded w-full">
            {error}
          </div>
        )}
        {response && (
          <div>
            <p id="content" className="text-2xl text-center text-slate-700">
              "{response.content}"
            </p>
            <p id="source" className="text-lg text-center text-slate-600">
              - {response.source}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
