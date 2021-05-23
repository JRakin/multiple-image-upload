import React, { useEffect } from "react";
import { deleteProduct, getAllProducts } from "./redux/actions/api";
import { connect } from "react-redux";
import FormEditProduct from "./FormEditProduct";
import "./TableAllProduct.css";

function TableAllProduct({
  getAllProducts,
  products,
  deleteSingleProduct,
  deleteProduct,
  addProduct,
  editProduct,
}) {
  useEffect(() => {
    getAllProducts();
  }, [deleteProduct.message, addProduct.message, editProduct.message]);

  console.log(addProduct);

  const handleDelete = (id) => {
    deleteSingleProduct(id);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        All Products
      </h1>
      <div>
        <table className="product-table" width="100%">
          <tr style={{ textAlign: "center" }}>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Size</th>
            <th>Images</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>

          {products && products.products && products.products.length
            ? products.products.map((product) => {
                return (
                  <tr style={{ textAlign: "center" }} key={product._id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.description}</td>
                    <td>{product.size}</td>
                    <td>
                      <img
                        src={product.images ? product.images[0] : ""}
                        alt="product"
                        width="30%"
                      ></img>
                    </td>
                    <td>
                      <button
                        style={{
                          color: "#fff",
                          background: "tomato",
                          padding: "6px 22px",
                          border: "none",
                          outline: "none",
                          fontSize: "16px",
                          borderRadius: "30px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleDelete(product._id)}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <FormEditProduct product={product} />
                    </td>
                  </tr>
                );
              })
            : ""}
        </table>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    deleteProduct: state.deleteProduct,
    addProduct: state.addProduct,
    editProduct: state.editProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
    deleteSingleProduct: (id) => dispatch(deleteProduct(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableAllProduct);
