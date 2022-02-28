import { Table, Tag } from "antd";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

function Product() {
  const [product, setProduct] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (selectedRowKeys) => {
    console.log("select: ", selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changaleRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changaleRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changaleRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changaleRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  useEffect(() => {
    axios
      .get("/product?q=rose&limit=25&page=1")
      .then((response) => {
        if (response.status === 200) {
          setProduct(response.data);
        } else {
          console.log("Connect fail");
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    return () => {};
  }, []);

  const data = useMemo(() => {
    const data = [];
    for (let i = 0; i < product.length; i++) {
      data.push({
        key: i,
        name: product[i].name,
        brand: product[i].brand,
        ingredient_list: product[i].ingredient_list,
      });
    }
    return data;
  }, [product]);

  const conlumn = [
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "brand",
      title: "Brand",
      dataIndex: "brand",
    },
    {
      title: "Ingredient list",
      key: "tags",
      dataIndex: "ingredient_list",
      render: (tags) => (
        <>
          <div keyy={tags} className="ingredient-list-table">
            {tags.toString()}
          </div>
        </>
      ),
    },
    {
      title: "Quality",
      key: "quantity",
      dataIndex: "ingredient_list",
      render: (tags) => (
        <>
          {tags.length > 50 ? (
            <Tag key={tags} color="green">
              GOOD
            </Tag>
          ) : (
            <Tag key={tags} color="geekblue">
              NORMAL
            </Tag>
          )}
        </>
      ),
    },
  ];
  return (
    <div>
      <Table
        rowSelection={rowSelection}
        columns={conlumn}
        dataSource={data}
        className="table-product"
      ></Table>
    </div>
  );
}
export default Product;
