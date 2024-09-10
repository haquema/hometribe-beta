import { Card, CardBody } from "@nextui-org/react";

export default function ChildCard({child, deleteButton}) {
  return (
    <Card>
      <CardBody>
        <p>name: {child.name}</p>
        <p>date of birth: {child.dob}</p>
        <p>homeschooled: {child.homeschooled ? 'yes' : 'no'}</p>
        <p>health information: {child.healthInfo}</p>
        {deleteButton}
      </CardBody>
    </Card>
  )
}