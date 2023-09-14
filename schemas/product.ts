import { list } from "@keystone-6/core";
import {
  text,
  timestamp,
  integer,
  relationship,
} from "@keystone-6/core/fields";
import { allowAll } from "@keystone-6/core/access";

export default list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    seller: relationship({
      ref: "User.products",
      many: true,
    }),
    price: integer({ validation: { isRequired: true }, defaultValue: 0 }),
    description: text({ validation: { isRequired: true } }),
    quantityInStock: integer({ validation: { isRequired: true } }),
    createdAt: timestamp({ validation: { isRequired: true } }),
  },
  ui: {},
});
