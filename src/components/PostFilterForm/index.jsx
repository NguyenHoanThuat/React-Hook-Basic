import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

PostFilterForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFilterForm.defaultProps = {
  onSubmit: null,
};

function PostFilterForm(props) {
  const { onSubmit } = props;
  const [search, setSearch] = useState("");
  const typingTimeoutRef = useRef(null);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValue = {
        search: value,
      };
      onSubmit(formValue);
    }, 500);
  };

  return (
    <form>
      <input type="text" value={search} onChange={handleSearch} />
    </form>
  );
}

export default PostFilterForm;
