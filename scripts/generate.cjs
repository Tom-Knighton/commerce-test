// @ts-check
const { generateSchema, generateOutput } = require('@gql.tada/cli-utils');
const { join } = require('path');

const graphqlApiDomain =
  process.env.BIGCOMMERCE_GRAPHQL_API_DOMAIN ?? "mybigcommerce.com";

const getStoreHash = () => {
  const storeHash = process.env.BIGCOMMERCE_STORE_HASH;

  if (!storeHash) {
    throw new Error("Missing store hash");
  }

  return storeHash;
};

const getChannelId = () => {
  const channelId = process.env.BIGCOMMERCE_CHANNEL_ID;

  return channelId;
};

const getToken = () => {
  const token = process.env.BIGCOMMERCE_STOREFRONT_TOKEN;

  if (!token) {
    throw new Error("Missing storefront token");
  }

  return token;
};

const getEndpoint = () => {
  const storeHash = getStoreHash();
  const channelId = getChannelId();

  return `https://store-${storeHash}-${channelId}.${graphqlApiDomain}/graphql`;
};

const generate = async () => {
  try {
    await generateSchema({
      input: getEndpoint(),
      headers: { Authorization: `Bearer ${getToken()}` },
      output: join(__dirname, "../bigcommerce.graphql"),
      tsconfig: undefined,
    });

    await generateOutput({
      disablePreprocessing: false,
      output: undefined,
      tsconfig: undefined,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    process.exit(1);
  }
};

generate();
