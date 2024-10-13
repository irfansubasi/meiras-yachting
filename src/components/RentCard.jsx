import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
export default function RentCard({ elementID }) {
  return (
    <Card
      style={{
        width: '18rem',
      }}
    >
      <img src={`../../assets/yachtspics/${elementID}/cover.png`} />
      <CardBody>
        <CardTitle tag="h5">Card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card‘s content.
        </CardText>
      </CardBody>
    </Card>
  );
}
