export const query = graphql`
  query {
    prismic {
      test_open_page(uid:"behold-the-lamb-2019", lang:"en-us") {
        title1
        summary
        cover
        body{
          ... on PRISMIC_Test_open_pageBodyBlob {
            type
            primary {
              title
              lead
              content
              call_to_action {
                _linkType
                ... on PRISMIC__ExternalLink{
                  url
                }
                ... on PRISMIC__FileLink{
                  name
                  url
                  size
                }
                ... on PRISMIC_Test_open_page{
                  title1
                  _meta{
                    uid
                  }
                }
              }
            }
          }
          ... on PRISMIC_Test_open_pageBodySpread {
            type
            primary {
              title1
              lead
              content
              figure
              call_to_action {
                _linkType
                ... on PRISMIC__ExternalLink{
                  url
                }
                ... on PRISMIC__FileLink{
                  name
                  url
                  size
                }
                ... on PRISMIC_Test_open_page{
                  title1
                  _meta{
                    uid
                  }
                }
              }
            }
          }
          ... on PRISMIC_Test_open_pageBodyFlier {
            type
            primary {
              title1
              content
              figure
              call_to_action {
                _linkType
                ... on PRISMIC__ExternalLink{
                  url
                }
                ... on PRISMIC__FileLink{
                  name
                  url
                  size
                }
                ... on PRISMIC_Test_open_page{
                  title1
                  _meta{
                    uid
                  }
                }
              }
            }
          }
          ... on PRISMIC_Test_open_pageBodyTiles {
            type
            primary{
              title1
              introduction
              tile_type
            }
            fields {
              figure
              label
              sublabel
              content
              call_to_action {
                _linkType
                ... on PRISMIC__ExternalLink{
                  url
                }
                ... on PRISMIC__FileLink{
                  name
                  url
                  size
                }
                ... on PRISMIC_Test_open_page{
                  title1
                  _meta{
                    uid
                  }
                }
              }
            }
          }
          __typename
        }
      }
    }
  }
`;
