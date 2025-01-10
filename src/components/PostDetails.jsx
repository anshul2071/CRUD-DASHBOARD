import React from "react";
import { Modal, Button } from "antd";

const PostDetails = ({ open, onClose, post }) => {
  return (
    <Modal
      title="Post Details"
      visible={open}
      onCancel={onClose}
      footer={null}
      width={400}
    >
      <p>
        <strong>ID:</strong> {post.id}
      </p>
      <p>
        <strong>Title:</strong> {post.title}
      </p>
      <p>
        <strong>Content:</strong> {post.content}
      </p>
      <div className="flex justify-end">
        <Button onClick={onClose} type="primary">
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default PostDetails;
