import PropTypes from "prop-types";

// Assets
import magnifyingGlass from "../../../../assets/Icons/search.svg";

// styles
import styles from "./search.module.sass";

export default function SearchFriends({ handledSearch }) {
  return (
    <div className={styles.containerSearchFriends}>
      <div className={styles.containerInput}>
        <input
          className={styles.searchInput}
          type="text"
          name="search"
          placeholder="Buscar jugadores"
          onChange={handledSearch}
        />
        <div className={styles.containerSearchIcon}>
          <img
            className={styles.magnifyingGlassIcon}
            src={magnifyingGlass}
            alt="magnifying glass"
          />
        </div>
      </div>
    </div>
  );
}

SearchFriends.propTypes = {
  handledSearch: PropTypes.func
};
