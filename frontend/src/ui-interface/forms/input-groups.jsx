 
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";

const FormInputGroups = () => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
      <Header onMenuClick={() => toggleMobileMenu()} />
      <Sidebar />
      {/* Page wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="content-page-header">
              <h5>Input Groups</h5>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Basic Examples</h5>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="input-block mb-3 row">
                      <label className="col-form-label col-lg-2">
                        Group Left
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text" id="basic-addon1">
                            @
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-block mb-3 row">
                      <label className="col-form-label col-lg-2">
                        Group Right
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                          />
                          <span className="input-group-text" id="basic-addon2">
                            @example.com
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="input-block mb-3 row">
                      <label className="col-form-label col-lg-2">
                        URL Example
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text" id="basic-addon3">
                            https://example.com/users/
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            id="basic-url"
                            aria-describedby="basic-addon3"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-block mb-3 row">
                      <label className="col-form-label col-lg-2">
                        Group with Price
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text">$</span>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Amount (to the nearest dollar)"
                          />
                          <span className="input-group-text">.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="input-block mb-3 row mb-0">
                      <label className="col-form-label col-lg-2">
                        Group with Price (Left)
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text">$</span>
                          <span className="input-group-text">0.00</span>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Sizing</h5>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="input-block mb-3 row">
                      <label className="col-form-label col-lg-2">
                        Input Group Large
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group input-group-lg">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-lg"
                          >
                            Large
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-lg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-block mb-3 row">
                      <label className="col-form-label col-lg-2">
                        Input Group Default
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-default"
                          >
                            Default
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-block mb-3 row mb-0">
                      <label className="col-form-label col-lg-2">
                        Input Group Small
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group input-group-sm">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            Small
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Checkbox and Radio Addons</h5>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="input-block mb-3 row">
                      <label className="col-form-label col-lg-2">
                        Checkbox
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <div className="input-group-text">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              aria-label="Checkbox for following text input"
                            />
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Text input with checkbox"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-block mb-3 row mb-0">
                      <label className="col-form-label col-lg-2">Radio</label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <div className="input-group-text">
                            <input
                              className="form-check-input"
                              type="radio"
                              defaultValue=""
                              aria-label="Radio button for following text input"
                            />
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Text input with radio button"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Multiple Addons</h5>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="input-block mb-3 row">
                      <label className="col-form-label col-lg-2">
                        Radio and Text Addons
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text">
                            <input type="checkbox" />
                          </span>
                          <span className="input-group-text">$</span>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="input-block mb-3 row mb-0">
                      <label className="col-form-label col-lg-2">
                        Two Addons
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text">$</span>
                          <span className="input-group-text">0.00</span>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Buttons with dropdowns</h5>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="input-block mb-3 row">
                      <label className="col-form-label col-lg-2">
                        Left Dropdown Text Addons
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Dropdown
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <Link className="dropdown-item" to="#">
                                Action
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                Another action
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                Something else here
                              </Link>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                Separated link
                              </Link>
                            </li>
                          </ul>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Text input with dropdown button"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-block mb-3 row mb-0">
                      <label className="col-form-label col-lg-2">
                        Right Dropdown Text Addons
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Text input with dropdown button"
                          />
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Dropdown
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <Link className="dropdown-item" to="#">
                                Action
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                Another action
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                Something else here
                              </Link>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                Separated link
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page wrapper */}
    </div>
  );
};
export default FormInputGroups;
