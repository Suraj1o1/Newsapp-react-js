import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-red navbar-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            1o1 Newsapp
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  <strong>Home</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  <strong>Business</strong>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  <strong>Entertainment</strong>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  <strong>general</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  <strong>health</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  <strong>science</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  <strong>sports</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  <strong>technology</strong>
                </Link>
              </li>
            </ul>
            <div className="d-flex flex-column sim">
              <h5 className="text-warning">With 1o1</h5>
              <h5 className="text-info">Enlight your Knowledge</h5>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
