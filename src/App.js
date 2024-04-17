import "./App.css";
import { Spinner } from "./components/Spinner";
import { Filter } from "./components/Filter";
import { Courses } from "./components/Courses";
import { Navbar } from "./components/Navbar";
import { useEffect, useState } from "react";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";

function App() {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState(null);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("Something is wrong.......");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>
      <div className="">
        <div className="p-3">
          <Filter
            filterData={filterData}
            setCategory={setCategory}
            category={category}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-col justify-center items-center">
          {loading ? (
            <Spinner />
          ) : (
            <Courses courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
