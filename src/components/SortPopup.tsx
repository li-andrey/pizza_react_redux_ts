import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortType, SortProperty } from "../redux/slices/filterSlice";

type SortItem = {
  name: string;
  property: SortProperty;
}

const sortList: SortItem[] = [
  { name: "популярности (возрастанию)", property: SortProperty.Raiting_Desc },
  { name: "популярности (убыванию)", property: SortProperty.Raiting_Asc },
  { name: "цене (возрастанию)", property: SortProperty.Price_Desc },
  { name: "цене (убыванию)", property: SortProperty.Price_Asc },
  { name: "алфавиту (возрастанию)", property: SortProperty.Title_Desc },
  { name: "алфавиту (убыванию)", property: SortProperty.Title_Asc },
];

const SortPopup: React.FC = () => {
  const dispatch = useDispatch();
  const sortType = useSelector((state: any) => state.filter.sortType);
  const [open, setOpen] = React.useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const chooseSort = (s: SortItem) => {
    dispatch(setSortType(s));
    setOpen(!open);
  };

  useEffect(() => {
    const onClickSort = (e: MouseEvent) => {
      const _e = e as MouseEvent & {
        path: Node[]
      }
      if (sortRef.current && !_e.path.includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", onClickSort);
    return () => {
      document.body.removeEventListener("click", onClickSort);
    };
  }, []);

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{sortType.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortList.map((obj) => (
              <li
                key={obj.name}
                onClick={() => chooseSort(obj)}
                className={sortType === obj ? "active" : ""}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default SortPopup;
