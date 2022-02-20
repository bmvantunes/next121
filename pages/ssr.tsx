import { GetServerSideProps } from "next"

export default function Hello({props} : any) {
    return <pre>{JSON.stringify(props, null, 4)}POIS</pre>
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            a: new Date(),
            b: await Promise.resolve(5)
        }
    }
}