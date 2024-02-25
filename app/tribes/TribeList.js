import prisma from "@/lib/prisma";
import Link from 'next/link';

// async function getTribes() {
//   const tribes = await prisma.tribe.findMany()
//   console.log(tribes);
//   return tribes;
// }

export default async function TribeList() {
  // const listOfTribes = await getTribes();
  // console.log('this is console.log of listOfTribes')
  // console.log(listOfTribes);

  // return (
  //   <>
  //     {listOfTribes && listOfTribes.map((tribe) => (
  //       <div key={tribe.id} className="border-solid border-black border-2 p-2 m-4">
  //         <Link href={`/tribes/${tribe.id}`}>
  //           <h3 className="font-semibold text-lg">{tribe.name}</h3>
  //           <p className="text-sm">{tribe.description}</p>
  //         </Link>
  //       </div>
  //     ))}
  //     {(listOfTribes === 0 || listOfTribes === null) && (
  //       <p>There arent any tribes currently registered.</p>
  //     )}
  //   </>
  // )
}
