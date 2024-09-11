import { Card, CardBody } from "@nextui-org/react";

export default function ChildCard({child, deleteButton}) {
  return (
    <Card radius="sm" shadow="md" className="max-w-40">
      <CardBody>
        <p>Name: {child.name}</p>
        <p>Date of Birth: {child.dob}</p>
        <p>Homeschooled: {child.homeschooled ? 'yes' : 'no'}</p>
        <p>Health Information: {child.healthInfo}</p>
        {deleteButton}
      </CardBody>
    </Card>
  )
}