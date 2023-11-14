import React from "react";
import { useState } from "react";

const CategoryModal = ({
  id,
  name,
  updateToCategory
}) => {
  const [categoryInputValue,setCategoryInputValue] = useState(name)

  console.log(categoryInputValue);
  return (
    <div
      className="modal fade"
      id={`exampleModal-${id}`}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Kategori Güncelleme Formu
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Kategori Adı :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-name"
                  name={name}
                  value={categoryInputValue}
                  onChange={(e) => setCategoryInputValue(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => updateToCategory(categoryInputValue,id)}
              data-bs-dismiss="modal"
            >
              Güncelle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
