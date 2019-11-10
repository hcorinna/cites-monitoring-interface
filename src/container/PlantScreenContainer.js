import { connect } from 'react-redux'
import PlantScreen from '../components/PlantScreen'

const getPlantOffers = (offers, props) => {
  var plantOffers = offers.find(plantOffer => plantOffer.id == props.match.params.plantId);
  plantOffers = plantOffers !== undefined? plantOffers : {"id": props.match.params.plantId, "all_offers": []};
  return plantOffers;
}

const getPlantDetails = (details, props) => {
  return details.find(plantDetails => plantDetails.id == props.match.params.plantId);
}

const mapStateToProps = (state, ownProps) => {
  return {
    offers: getPlantOffers(state.offers, ownProps),
    details: getPlantDetails(state.details, ownProps)
  }
}

const PlantScreenContainer = connect(
  mapStateToProps,
  null
)(PlantScreen)

export default PlantScreenContainer
