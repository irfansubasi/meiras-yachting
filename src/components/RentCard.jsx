import { Link } from 'react-router-dom';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
export default function RentCard(props) {
  const { elementID, name, type, length, people, cabin, currentYacht } = props;
  return (
    <Card
      style={{
        width: '100%',
      }}
    >
      <Link to={`/rent/${elementID}`} state={{ currentYacht }}>
        <div className="card-img">
          <img
            className="img-fluid coverImg"
            src={`../../assets/yachtspics/${elementID}/cover.png`}
          />
        </div>

        <CardBody className="text-white" style={{ backgroundColor: '#092649' }}>
          <CardTitle className="fw-semibold fs-6 text-center" tag="h5">
            {name.toUpperCase()}
          </CardTitle>
          <CardText className="d-flex justify-content-evenly">
            <span>{type.toUpperCase()}</span>|<span>{length}M</span>|
            <span>{people} GUESTS</span>|<span>{cabin} CABINS</span>
          </CardText>
        </CardBody>
      </Link>
    </Card>
  );
}
