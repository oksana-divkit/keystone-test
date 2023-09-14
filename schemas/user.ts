import { list } from "@keystone-6/core";
import {
  text,
  timestamp,
  relationship,
  password,
} from "@keystone-6/core/fields";
import { allowAll } from "@keystone-6/core/access";

export default list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),

    email: text({
      validation: { isRequired: true },
      isIndexed: "unique",
    }),

    password: password({ validation: { isRequired: true } }),
    products: relationship({ ref: "Product.seller", many: true }),

    createdAt: timestamp({
      defaultValue: { kind: "now" },
    }),
  },
});
