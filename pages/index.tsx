import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext
} from 'next';
// import { services } from '../data';

const index = ({ services }) => {
  return (
    <div>
      <h1>bye bye</h1>
    </div>
  )
}
export default index;

// export const getServerSideProps = async (context: GetServerSidePropsContext) => {
//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();
//   console.log('SERVER:',data);
//   return {
//     props: {
//       services: data
//     }
//   }
// }

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/21/')
  const data = await res.json()
  const {sprites} = data;
  console.log(sprites)
  return { props: { services: data } }
}
