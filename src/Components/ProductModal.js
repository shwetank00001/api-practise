import React, { useState } from "react";
import "./productModal.css";
import { AiOutlineCopy,AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoNotificationsSharp } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
// import { VscFilePdf } from "react-icons/vsc";
import { BsFileEarmarkPdf } from "react-icons/bs";

const ProductModal = () => {
  const [show, setShow] = useState(false);


  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <>
      {show && (
        <div className="container">
          <div className="navBar">
            <div className="startNavBar">
              <div>
                <  RxHamburgerMenu className="icons"/>
              </div>
              <div>
                <h4>Product Name</h4>
              </div>
            </div>

            <div className="endNavBar">
              <div>
                <input
                  className="searchBar"
                  type="text"
                  placeholder="Search  ..."
                />
              </div>
              <div>
                <IoNotificationsSharp className="icons"/>
              </div>
              <div>
                <RxAvatar />
              </div>
              <div>
                <h6>Name</h6>
              </div>
              <div>
                <AiOutlineClose className="icons" type="button" onClick={closeModal}/>
              </div>
            </div>
          </div>

          <div className="belowNavbar">
            <h2 className="productText">PRODUCT LIST</h2>
          </div>

          <div className="navBar2">
            <div className="navBar2Start">
              <div className="show">
                <p>Show:</p>
              </div>
              <div className="productOptions">
                <select >
                  <option hidden>All</option>
                  <option>test 1</option>
                  <option>test 2</option>
                  <option>test 3</option>
                </select>
              </div>
              <div>
                <AiOutlineCopy className="icons"/>
              </div>
              <div>
                {/* <VscFilePdf className="icons"/> */}
              </div>
              <div>
                <BsFileEarmarkPdf className="icons"/>
              </div>
            </div>

            <div className="navBar2End">
              <div>
                <input
                  className="searchBar2"
                  type="text"
                  placeholder="Search by Name, Firm Name"
                />
              </div>
            </div>
          </div>

          <div className="productTable">
            <table>
              <tbody>
                <tr>
                  <th>Sr.No </th>
                  <th>Product Name</th>
                  <th>Brand</th>
                  <th>Category</th>
                  <th>Unit Packing</th>
                  <th>HSN/SAC Code </th>
                  <th>Action</th>
                </tr>
                <tr>
                  <td>1</td>
                </tr>
                <tr>
                  <td>2</td>
                </tr>
                <tr>
                  <td>3</td>
                </tr>
                <tr>
                  <td>4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      <button className="myBtn" onClick={openModal}>
        Products
      </button>
    </>
  );
};


export default ProductModal