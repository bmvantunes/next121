import { GetServerSideProps } from 'next';

export default function SSR(props: unknown) {
  return (
    <>
      <pre>Server Side Rendering {JSON.stringify(props, null, 4)}</pre>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {

  return {
    props: {
      versions: await Promise.resolve(process.versions),
      date: new Date().toISOString(),
    },
  };
};