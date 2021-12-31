import { useState } from "react";

const AddQuote = () => {
  const [content, setContent] = useState("");
  const [source, setSource] = useState("");

  const [fetchState, setFetchState] = useState({
    loading: false,
    error: null,
    success: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFetchState({ ...fetchState, loading: true });
    fetch("https://iffa-quotes.herokuapp.com/add-quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: content, source: source }),
    })
      .then((res) => {
        if (res.ok) setFetchState({ ...fetchState, success: true });
      })
      .catch((err) => setFetchState({ ...fetchState, error: err }));
  };

  return (
    <div className="bg-slate-300 text-slate-800 rounded p-2">
      <h1 className="text-2xl mb-2">أضف مقولة</h1>
      <p>
        ينبغي أن تكون المقولة متعلقة بموضوع العفة أو غض البصر، وتكتب المقولة في
        مكانها والمصدر أو القائل في مكانه.
      </p>
      <form onSubmit={handleSubmit}>
        <label className="text-lg" htmlFor="content">
          محتوى / نص المقولة
        </label>
        <input
          type="text"
          id="content"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          className="w-full rounded p-2 bg-slate-200 my-2 focus:outline-slate-800"
        />
        <label className="text-lg" htmlFor="source">
          المصدر / القائل
        </label>
        <input
          type="text"
          id="source"
          value={source}
          onChange={(e) => {
            setSource(e.target.value);
          }}
          className="w-full rounded p-2 bg-slate-200 my-2 focus:outline-slate-800"
        />
        {!fetchState.loading && (
          <button
            type="submit"
            className="p-2 w-20 my-2 bg-slate-800 hover:bg-slate-600 text-slate-200 hover:transition-all duration-200 rounded"
          >
            إضافة
          </button>
        )}
        {fetchState.loading && (
          <div>
            <button
              type="submit"
              className="p-2 w-20 my-2 ml-2 bg-slate-600 text-slate-200 hover:transition-all duration-200 rounded"
              disabled
            >
              إضافة
            </button>
            <span>تتم الإضافة ...</span>
          </div>
        )}
      </form>
      {fetchState.error && (
        <div className="bg-red-200 border-red-600 border-2 p-2 rounded w-full">
          {fetchState.error}
        </div>
      )}
      {fetchState.success && (
        <div className="bg-green-200 border-green-600 border-2 p-2 rounded w-full">
          تمت إضافة المقولة.
        </div>
      )}
    </div>
  );
};

export default AddQuote;
