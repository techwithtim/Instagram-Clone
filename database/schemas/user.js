export default {
  title: "User",
  name: "user",
  type: "document",
  fields: [
    {
      title: "First Name",
      name: "first_name",
      type: "string",
    },
    {
      title: "Last Name",
      name: "last_name",
      type: "string",
    },
    {
      title: "Username",
      name: "username",
      type: "string",
    },
    {
      title: "Photo",
      name: "photo",
      type: "image",
    },
    {
      title: "Bio",
      name: "bio",
      type: "text",
    },
    {
      title: "Following",
      name: "following",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "user" }],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: "Created At",
      name: "created_at",
      type: "datetime",
    },
  ],
};
