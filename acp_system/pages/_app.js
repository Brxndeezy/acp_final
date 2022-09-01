import '../styles/globals.css'
import '../styles/form.css'
import Register from './account/register'
import { MongoClient } from "mongodb";

function MyApp({ Component, pageProps }) {
  return(
    <Register />
  )
  }

  async function getStaticProps() {
    const client = await MongoClient.connect(
      "mongodb+srv://BrandonHarlies:<acp-master>@acp-cluster.uy7vxhl.mongodb.net/?retryWrites=true&w=majority"
    );
  
    const db = client.db();
  
    const collection = db.collection("acp-cluster.auth");
  
    const mydata = await collection.find({}, {}).toArray();
  
    client.close();
  
    return {
      props: data,
    };
  }

export default MyApp;
