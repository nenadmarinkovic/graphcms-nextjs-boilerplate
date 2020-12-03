import Link from "next/link";
import { GraphQLClient } from "graphql-request";

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    'https://api-eu-central-1.graphcms.com/v2/cki8mdzoy0vn701z4cejsbbdy/master'
  );

  const { products } = await graphcms.request(
    `
      { 
        products {
          slug
          name
        }
      }
    `
  );

  const { posts } = await graphcms.request(
    `
    { 
      posts {
        slug
        title
        id
        content {
          html
        }
      }
    }
    
    `
  );

  return {
    props: {
      products,
      posts,
    },
  };
}

export default function Home({ products, posts }) {
  return (
    <>
      <div>
        {products.map(({ slug, name }) => (
          <Link key={slug} href={`/products/${slug}`}>
            <div style={{ marginTop: "30px" }}>
              <a>{name}</a>
            </div>
          </Link>
        ))}
      </div>
      <div style={{ marginTop: "30px" }}>
        {posts.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    </>
  );
}
