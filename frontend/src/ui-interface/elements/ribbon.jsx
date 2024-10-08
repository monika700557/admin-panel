 
 
import React, { useState } from "react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";

const Ribbon = () => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
      <Header onMenuClick={() => toggleMobileMenu()} />

      <Sidebar />

      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="content-page-header">
              <h5>Ribbons</h5>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            {/* Ribbon */}
            <div className="col-md-4 col-sm-6">
              <div className="ribbon-wrapper card">
                <div className="card-body">
                  <div className="ribbon ribbon-primary">Ribbon</div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industries
                    standard dummy text. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            {/* /Ribbon */}
            {/* Ribbon */}
            <div className="col-md-4 col-sm-6">
              <div className="ribbon-wrapper card">
                <div className="card-body">
                  <div className="ribbon ribbon-secondary">Ribbon</div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industries
                    standard dummy text. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            {/* /Ribbon */}
            {/* Ribbon */}
            <div className="col-md-4 col-sm-6">
              <div className="ribbon-wrapper card">
                <div className="card-body">
                  <div className="ribbon ribbon-success">Ribbon</div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industries
                    standard dummy text. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            {/* /Ribbon */}
            {/* Ribbon */}
            <div className="col-md-4 col-sm-6">
              <div className="ribbon-wrapper card">
                <div className="card-body">
                  <div className="ribbon ribbon-primary ribbon-right">
                    Ribbon
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industries
                    standard dummy text. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            {/* /Ribbon */}
            {/* Ribbon */}
            <div className="col-md-4 col-sm-6">
              <div className="ribbon-wrapper card">
                <div className="card-body">
                  <div className="ribbon ribbon-secondary  ribbon-right">
                    Ribbon
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industries
                    standard dummy text. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            {/* /Ribbon */}
            {/* Ribbon */}
            <div className="col-md-4 col-sm-6">
              <div className="ribbon-wrapper card">
                <div className="card-body">
                  <div className="ribbon ribbon-success ribbon-right">
                    Ribbon
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industries
                    standard dummy text. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            {/* /Ribbon */}
            {/* Ribbon */}
            <div className="col-md-4 col-sm-6">
              <div className="ribbon-vertical-left-wrapper card">
                <div className="card-body">
                  <div className="ribbon ribbon-primary ribbon-vertical-left">
                    <i className="fas fa-gift" />
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industries
                    standard dummy text. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            {/* /Ribbon */}
            {/* Ribbon */}
            <div className="col-md-4 col-sm-6">
              <div className="ribbon-vertical-left-wrapper card">
                <div className="card-body">
                  <div className="ribbon ribbon-secondary  ribbon-vertical-left">
                    <i className="fas fa-gift" />
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industries
                    standard dummy text. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            {/* /Ribbon */}
            {/* Ribbon */}
            <div className="col-md-4 col-sm-6">
              <div className="ribbon-vertical-left-wrapper card">
                <div className="card-body">
                  <div className="ribbon ribbon-success ribbon-vertical-left">
                    <i className="fas fa-gift" />
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industries
                    standard dummy text. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            {/* /Ribbon */}
            {/* Ribbon */}
            <div className="col-md-4 col-sm-6">
              <div className="ribbon-vertical-right-wrapper card">
                <div className="card-body">
                  <div className="ribbon ribbon-primary ribbon-vertical-right">
                    <i className="fas fa-gift" />
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industries
                    standard dummy text. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            {/* /Ribbon */}
            {/* Ribbon */}
            <div className="col-md-4 col-sm-6">
              <div className="ribbon-vertical-right-wrapper card">
                <div className="card-body">
                  <div className="ribbon ribbon-secondary  ribbon-vertical-right">
                    <i className="fas fa-gift" />
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industries
                    standard dummy text. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            {/* /Ribbon */}
            {/* Ribbon */}
            <div className="col-md-4 col-sm-6">
              <div className="ribbon-vertical-right-wrapper card">
                <div className="card-body">
                  <div className="ribbon ribbon-success ribbon-vertical-right">
                    <i className="fas fa-gift" />
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industries
                    standard dummy text. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            {/* /Ribbon */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ribbon;
