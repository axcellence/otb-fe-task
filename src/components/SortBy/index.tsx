import {
  ArrowDownAZIcon,
  BadgePoundSterlingIcon,
  StarIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useSortStore } from "@stores/sort-store";

const sorts = [
  {
    id: "alphabetical",
    label: (
      <span>
        Sort <strong>alphabetically</strong>
      </span>
    ),
    icon: <ArrowDownAZIcon />,
  },
  {
    id: "price",
    label: (
      <span>
        Sort by <strong>price</strong>
      </span>
    ),
    icon: <BadgePoundSterlingIcon />,
  },
  {
    id: "rating",
    label: (
      <span>
        Sort by <strong>star rating</strong>
      </span>
    ),
    icon: <StarIcon />,
  },
] as const;

export function SortBy() {
  return (
    <div className={styles.sortByGroup}>
      {sorts.map((sort) => (
        <SortByItem key={sort.id} {...sort} />
      ))}
    </div>
  );
}

type SortByItemProps = {
  id: (typeof sorts)[number]["id"];
  label: React.ReactNode;
  icon?: React.ReactNode;
};

function SortByItem({ id, label, icon }: SortByItemProps) {
  const { sortBy, actions } = useSortStore();
  const isActive = sortBy === id;

  return (
    <button
      className={`${styles.sortByItem} ${isActive ? styles.active : ""}`}
      onClick={() => {
        actions.setSortBy(id);
      }}
    >
      {label}
      {icon && <div className={styles.sortByItemIcon}>{icon}</div>}
    </button>
  );
}
