import React from "react";
import { Modal, Input, Button } from "antd";

const PostModal = ({ open, onClose, post, onChange, onSave }) => {
  return (
    <Modal
      title={post.id ? "Edit Post" : "Create Post"}
      visible={open}
      onCancel={onClose}
      footer={null}
      width={400}
    >
      <Input
        name="title"
        value={post.title || ""}
        onChange={onChange}
        placeholder="Enter post title"
        className="mb-4"
      />
      <Input.TextArea
        name="content"
        value={post.content || ""}
        onChange={onChange}
        placeholder="Enter post content"
        rows={4}
        className="mb-4"
      />
      <div className="flex justify-end space-x-2">
        <Button onClick={onClose} className="bg-gray-200 hover:bg-gray-300">
          Cancel
        </Button>
        <Button
          onClick={onSave}
          type="primary"
          className="bg-blue-500 hover:bg-blue-600"
        >
          {post.id ? "Update" : "Create"}
        </Button>
      </div>
    </Modal>
  );
};

export default PostModal;
