import { useEffect, useState } from "react";
import { fetchParagraphs } from "../store/ParagraphsSlice";
import { useDispatch } from "react-redux";

const Inputs = () => {
  const [paras, setParas] = useState(4);
  const [format, setFormat] = useState("no");
  console.log(paras, format);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchParagraphs(paras, format));
  }, [paras, format, dispatch]);

  return (
    <div className="mt-8 flex items-center justify-start gap-10">
      <div className="flex flex-col items-start gap-1">
        <label htmlFor="paras">Paragraphs</label>
        <input
          type="number"
          name="paras"
          id="paras"
          max={10}
          min={1}
          value={paras}
          onChange={(e) => setParas(e.target.value || 1)}
          className="w-40 h-6 text-theme-light-black placeholder-theme-light-black pl-1 rounded-sm"
        />
      </div>
      <div className="flex flex-col items-start gap-1">
        <label htmlFor="html">include HTML</label>
        <select
          type=""
          name="html"
          id="html"
          value={format}
          onChange={(e) => setFormat(e.target.value || "no")}
          className="w-28 h-6 text-theme-light-black placeholder-theme-light-black pl-1 rounded-sm"
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
    </div>
  );
};

export default Inputs;
