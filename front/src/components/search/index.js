import s from "./s.module.css"
import { SearchOutlined } from '@ant-design/icons';


export const SearchBar  = (props) => {
    return (
      <div>
        <div className={s.searchBarBar} type="search">
          <input  placeholder="Поиск..." {...props} />
          <button> <SearchOutlined /> </button>
        </div>
      </div>
    );
  };
  
export default SearchBar;