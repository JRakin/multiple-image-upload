import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./FormAddProduct.css";
import { postAddProduct } from "./redux/actions/api";
import { connect } from "react-redux";

const schema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().positive().integer().required(),
  size: yup.string().required(),
  description: yup.string().required(),
});

const FormAddProduct = ({ postData, add }) => {
  const [images, setImages] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data, e) => {
    if (data && images) {
      console.log(data);
      const formData = new FormData();
      for (const key of Object.keys(images)) {
        formData.append(`images`, images[key]);
      }
      formData.append("name", data.name);
      formData.append("price", data.price);
      formData.append("size", data.size);
      formData.append("description", data.description);

      for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }
      postData(formData);
      e.preventDefault();
    } else {
      alert("All field is required");
    }
  };

  return (
    <div className="form-container">
      <h2 style={{ textAlign: "center" }}>Add Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="form-body">
          <div>
            <label style={{ display: "block" }}>Name</label>
            <input {...register("name", { required: true, maxLength: 20 })} />
            {errors.name && <span>Name is required</span>}
          </div>
          <div>
            <label style={{ display: "block" }}>Price</label>
            <input
              type="number"
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
            <label style={{ display: "block" }}>Product Image</label>
            <input
              onChange={(e) => {
                console.log(e.target.files);
                setImages(e.target.files);
              }}
              type="file"
              accept="image/*"
              multiple
              // {...register("images", { required: true })}
            />
            {errors.images && <span>Image is required</span>}
          </div>
          <div>
            <label style={{ display: "block" }}>Description</label>
            <textarea
              {...register("description", { required: true, maxLength: 200 })}
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
            <input
              style={{
                color: "white",
                background: "tomato",
                padding: "4px 10px",
                fontSize: "18px",
                width: "50%",
                border: "none",
                outline: "none",
                borderRadius: "30px",
                cursor: 'pointer  '
              }}
              type="submit"
              value="Add"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    add: state.addProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postData: (data) => dispatch(postAddProduct(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAddProduct);
