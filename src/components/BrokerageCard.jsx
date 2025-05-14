import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

export default function BrokerageCard(props) {
  const { elementID, name, type, length, people } = props;

  const { t } = useTranslation();

  return (
    <Card
      style={{
        width: '100%',
      }}
    >
      <Link to={`/brokerage/${elementID}`}>
        <div className="card-img">
          <img
            className="img-fluid coverImg"
            src={`../../assets/brokerage/${elementID}/cover.webp`}
            loading="lazy"
            alt={`${name} - ${type} yat satış görseli`}
          />
        </div>

        <CardBody className="text-white" style={{ backgroundColor: '#092649' }}>
          <CardTitle className="fw-medium text-center" tag="h6">
            {name.toUpperCase()}
          </CardTitle>
          <CardText className="d-flex justify-content-evenly">
            <span>{type.toUpperCase()}</span>|<span>{length}M</span>|
            <span>
              {people} {t('rent.card.people').toUpperCase()}
            </span>
          </CardText>
        </CardBody>
      </Link>
    </Card>
  );
}
