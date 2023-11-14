const DepartmentSubHeader=({name,inputValue,setInputValue,addToSub,addTo})=>{

    return (
      <div className="d-flex align-items-center gap-2 mt-1">
        <input
          //id="search"
          type="text"
          placeholder={`${name} Adı Giriniz...`}
          aria-label="Search Input"
          style={{ margin: "inherit" }}
          className="form-control"
          name={inputValue}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() =>
            addTo ? addTo(inputValue) : addToSub(inputValue)
          }
        >
          {name} Ekle
        </button>
      </div>
    );
  }

  export default DepartmentSubHeader;