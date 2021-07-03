import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const AdminProductCard = ({ product }) => {
  //destructure
  const { title, description, images } = product;

  return (
    <Card
      cover={
        <img
          alt=""
          src={images && images.length ? images[0].url : ""}
          style={{ heigth: "150px", objectFit: "cover" }}
          className="m-2"
        />
      }
    >
      <Meta title={title} description={description} />
    </Card>
  );
};

export default AdminProductCard;