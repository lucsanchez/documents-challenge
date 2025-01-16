interface SortByDropdownProps {
  sortBy: "name" | "version" | "date";
  onChange: (criteria: "name" | "version" | "date") => void;
}

export function SortByDropdown({ sortBy, onChange }: SortByDropdownProps) {
  return (
    <div>
      <label htmlFor="sortBy">Sort By: </label>
      <select
        id="sortBy"
        value={sortBy}
        onChange={(e) =>
          onChange(e.target.value as "name" | "version" | "date")
        }
      >
        <option value="name">Name</option>
        <option value="version">Version</option>
        <option value="date">Date</option>
      </select>
    </div>
  );
}
