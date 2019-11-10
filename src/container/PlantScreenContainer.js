import { connect } from 'react-redux'
import PlantScreen from '../components/PlantScreen'

const getPlant = (plants, props) => {
  return plants.find(plant => plant.id == props.match.params.plantId);
}

const getPlantNames = (names, props) => {
  return names.find(plantNames => plantNames.id == props.match.params.plantId);
}

const mapStateToProps = (state, ownProps) => {
  return {
    plant: getPlant(state.plants, ownProps),
    names: getPlantNames(state.names, ownProps)
  }
}

const PlantScreenContainer = connect(
  mapStateToProps,
  null
)(PlantScreen)

export default PlantScreenContainer
