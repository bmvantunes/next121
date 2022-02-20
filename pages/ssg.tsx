import { GetStaticProps } from "next"

export default function Hello({props} : any) {
    return <pre>{JSON.stringify(props, null, 4)}POIS</pre>
}

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            a: new Date().toISOString(),
            b:  5
        }
    }
}