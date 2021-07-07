import React from "react";
import { Select } from "antd";

const { Option } = Select;

const ProductCreateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleCategoryChange,
  subOptions,
  showSub,
}) => {
  //destructure
  const {
    title,
    description,
    price,
    categories,
    category,
    subs,
    shipping,
    quantity,
    images,
    colors,
    color,
    piles,
    pile,
    weigth,
    height_feet,
    height_inch,
    width_feet,
    width_inch,
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={description}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>

      <div className="row">
        <div className="form-group col">
          <label>Price</label>
          <input
            type="number"
            name="price"
            className="form-control"
            value={price}
            onChange={handleChange}
          />
        </div>

        <div className="form-group col">
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            className="form-control"
            value={quantity}
            onChange={handleChange}
          />
        </div>

        <div className="form-group col">
          <label>Weigth</label>
          <input
            type="number"
            name="weigth"
            className="form-control"
            value={weigth}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="">
        <div className="row">
          <div className="form-group col">
            <label>Height feet</label>
            <input
              type="number"
              name="height_feet"
              className="form-control"
              value={height_feet}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col">
            <label>Height inch</label>
            <input
              type="number"
              name="height_inch"
              className="form-control"
              value={height_inch}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col">
            <label>Width feet</label>
            <input
              type="number"
              name="width_feet"
              className="form-control"
              value={width_feet}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col">
            <label>Width_inch</label>
            <input
              type="number"
              name="width_inch"
              className="form-control"
              value={width_inch}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label>Shipping</label>
        <select
          name="shipping"
          className="form-control"
          onChange={handleChange}
        >
          <option>Please select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="form-group">
        <label>Color</label>
        <select name="color" className="form-control" onChange={handleChange}>
          <option>Please select</option>
          {colors.map((x) => (
            <option key={x} value={x}>
              {x}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Pile</label>
        <select name="pile" className="form-control" onChange={handleChange}>
          <option>Please select</option>
          {piles.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Category</label>
        <select
          name="category"
          className="form-control"
          onChange={handleCategoryChange}
        >
          <option>Please Select</option>
          {categories.length > 0 &&
            categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>

      {showSub && (
        <div>
          <label>Sub Categories</label>
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please select"
            value={subs}
            onChange={(value) => setValues({ ...values, subs: value })}
          >
            {subOptions.length &&
              subOptions.map((s) => (
                <Option key={s._id} value={s._id}>
                  {s.name}
                </Option>
              ))}
          </Select>
        </div>
      )}
      <br />
      <button className="btn btn-outline-info">Save</button>
    </form>
  );
};

export default ProductCreateForm;
