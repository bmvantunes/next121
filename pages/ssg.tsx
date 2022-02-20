import { GetStaticProps } from "next"

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            a: new Date().toISOString(),
            b:  5
        }
    }
}


export default function SSR(props: unknown) {
  return (
    <>
      <pre>Server Side Rendering {JSON.stringify(props, null, 4)}</pre>
    </>
  );
}