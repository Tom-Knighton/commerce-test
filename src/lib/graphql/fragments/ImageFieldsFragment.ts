import { graphql } from "../graphql";

const ImageFieldsFragment = graphql(`
  fragment ImageFields on Image {
    url320wide: url(width: 320)
    url640wide: url(width: 640)
    url960wide: url(width: 960)
    url1280wide: url(width: 1280)
  }
`);

export { ImageFieldsFragment };
