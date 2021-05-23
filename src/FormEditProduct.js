import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./FormAddProduct.css";
import { editProduct } from "./redux/actions/api";
import { connect } from "react-redux";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const schema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().positive().integer().required(),
  size: yup.string().required(),
  description: yup.string().required(),
});

const FormEditProduct = ({ editProduct, product }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data, e) => {
    if (data) {
      editProduct(data, product._id);
      e.preventDefault();
    } else {
      alert("All field is required");
    }
  };

  console.log(product);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        style={{
          color: "#fff",
          background: "tomato",
          padding: "6px 22px",
          border: "none",
          outline: "none",
          fontSize: "16px",
          borderRadius: "30px",
          cursor: 'pointer'
        }}
        onClick={openModal}
      >
        Edit
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{ width: "80%" }} className="form-container">
          <h2 style={{ textAlign: "center" }}>Edit Product</h2>
          <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <div className="form-body">
              <div>
                <label style={{ display: "block" }}>Name</label>
                <input
                  defaultValue={product.name}
                  {...register("name", { required: true, maxLength: 20 })}
                />
                {errors.name && <span>Name is required</span>}
              </div>
              <div>
                <label style={{ display: "block" }}>Price</label>
                <input
                  type="number"
                  defaultValue={product.price}
                  {...register("price", { required: true, min: 1 })}
                />
                {errors.price && <span>Price should be greater than zero</span>}
              </div>
              <div>
                <label style={{ display: "block" }}>Size</label>
                <select {...register("size")}>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
                {errors.size && <span>Size is required</span>}
              </div>
              <div>
                <label style={{ display: "block" }}>Description</label>
                <textarea
                  defaultValue={product.description}
                  {...register("description", {
                    required: true,
                    maxLength: 200,
                  })}
                />
                {errors.description && <span>Description is required</span>}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <input type="submit" />
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    editProduct: state.editProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editProduct: (data, id) => dispatch(editProduct(data, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormEditProduct);
