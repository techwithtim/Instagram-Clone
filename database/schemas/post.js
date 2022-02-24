export default {
  title: "Post",
  name: "post",
  type: "document",
  fields: [
    {
      title: "Photo",
      name: "photo",
      type: "image",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "Created At",
      name: "created_at",
      type: "datetime",
    },
    {
      title: "Author",
      name: "author",
      type: "reference",
      to: [{ type: "user" }],
    },
  ],
};
