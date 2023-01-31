import Layout from "../components/layout";
import Bar from "../components/bar"
import Classmenu from "../components/classmenu"

export default function Home() {
    return (
        <Layout>
        <Bar/>
        <Classmenu/>
        <div className='flex h-full flex-col justify-center items-center'>
            <h1 className='text-ุุ10xl mb-5 font-bold'>Class</h1>
        </div>
      </Layout>
    );
  }