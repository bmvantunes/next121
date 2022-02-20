import { GetStaticProps } from 'next';

export default function ISR(props: unknown) {
  return (
    <>
      <pre>
        Incremental Static Regeneration 10 seconds:{' '}
        {JSON.stringify(props, null, 4)}
      </pre>
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    revalidate: 10,
    props: {
      versions: process.versions,
      data: new Date().toISOString(),
    },
  };
};