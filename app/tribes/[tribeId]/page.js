import prisma from "@/lib/prisma"

const getData = async (tribeId) => {
  const data = await prisma.tribe.findUnique({
    where: {
      id: tribeId,
    },
  })
  return data;
  // console.log(data);
};

export default async function Page({ params }) {
  const id = Number(params.tribeId);
  const tribeData = await getData(id);

  return <div>This is the tribe page for {tribeData.name}</div>
}