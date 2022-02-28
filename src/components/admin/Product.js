import { Button, Table, Tag } from "antd";
import axios from "axios";
import _ from "lodash";
import React, { useCallback, useEffect, useMemo, useState } from "react";

function Product() {
  const [product, setProduct] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (selectedRowKeys) => {
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
        id: product[i].id,
        name: product[i].name,
        brand: product[i].brand,
        ingredient_list: product[i].ingredient_list,
      });
    }
    return data;
  }, [product]);

  const brand = useMemo(() => {
    const brand = [];
    for (let i = 0; i < product.length; i++) {
      brand.push(product[i].brand);
    }
    return _.uniq(brand);
  }, [product]);

  const dataBrand = useMemo(() => {
    const dataBrand = [];
    for (let i = 0; i < brand.length; i++) {
      dataBrand.push({
        text: brand[i],
        value: brand[i],
      });
    }
    return _.uniq(dataBrand);
  }, [brand]);

  const conlumn = [
    {
      key: "name",
      title: "Name",
      width: 200,
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      key: "brand",
      title: "Brand",
      dataIndex: "brand",
      filters: dataBrand,
      onFilter: (value, record) => record.brand.indexOf(value) === 0,
    },
    {
      title: "Ingredient list",
      key: "tags",
      dataIndex: "ingredient_list",
      sorter: (a, b) => a.ingredient_list.length - b.ingredient_list.length,
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
      sorter: (a, b) => a.ingredient_list.length - b.ingredient_list.length,
      render: (tags) => (
        <>
          {tags.length < 30 ? (
            <Tag key={tags} color="green">
              Low
            </Tag>
          ) : tags.length < 50 ? (
            <Tag key={tags} color="geekblue">
              Medium
            </Tag>
          ) : (
            <Tag key={tags} color="volcano">
              High
            </Tag>
          )}
        </>
      ),
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "delete",
      render: (id) => (
        <>
          <Button type="button" onClick={(value) => onDeleteProduct(value, id)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  const onChangeSorter = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const onDeleteProduct = useCallback(
    (value, id) => {
      setProduct(
        product.filter((item) => {
          return item.id !== id;
        })
      );
    },
    [product]
  );

  return (
    <div>
      <Table
        rowSelection={rowSelection}
        columns={conlumn}
        dataSource={data}
        className="table-product"
        onChange={onChangeSorter}
      ></Table>
    </div>
  );
}
export default Product;
