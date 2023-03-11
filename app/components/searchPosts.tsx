import { useState } from "react";
import { PostMetadata } from "./PostMetadata";

const SearchPosts = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<PostMetadata[]>([]);

  return (
    <div className="flex justify-center py-200 pb-2 items-center bg-black">
      <form className="flex items-center">
        <input
          className="border rounded py-2 px-3 mr-2 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Buscar"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default SearchPosts;
