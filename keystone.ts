// Welcome to Keystone!
//
// This file is what Keystone uses as the entry-point to your headless backend
//
// Keystone imports the default export of this file, expecting a Keystone configuration object
//   you can find out more at https://keystonejs.com/docs/apis/config

import { config } from "@keystone-6/core";

import User from "./schemas/user";
import Product from "./schemas/product";

// authentication is configured separately here too, but you might move this elsewhere
// when you write your list-level access control functions, as they typically rely on session data
import { withAuth, session } from "./auth";

export default withAuth(
  config({
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      // provider: "sqlite",
      // url: "file:./keystone.db",
      provider: "postgresql",
      url:
        process.env.DATABASE_URL ||
        "postgres://postgres:1111@localhost:5432/keystonedb",
    },
    lists: {
      User,
      Product,
    },
    session,
    graphql: {
      playground: true,
      apolloConfig: {
        introspection: true,
      },
    },
  })
);
