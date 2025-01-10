import React from "react";
import { Table, Button } from "antd";

const PostTable = ({ posts, onEdit, onDelete, onViewDetails }) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, post) => (
        <div className="flex justify-center">
          <Button
            onClick={() => onViewDetails(post)}
            type="link"
            className="mr-2"
          >
            View
          </Button>
          <Button
            onClick={() => onEdit(post)}
            type="link"
            className="mr-2"
          >
            Edit
          </Button>
          <Button
            onClick={() => onDelete(post.id)}
            type="link"
            danger
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="overflow-x-auto">
      <Table
        dataSource={posts}
        columns={columns}
        rowKey="id"
        pagination={false}
      />
    </div>
  );
};

export default PostTable;
