import { connect } from 'react-redux'
import PlantScreen from '../components/PlantScreen'

const getPlant = (plants, props) => {
  return plants.find(plant => plant.id == props.match.params.plantId);
}

const mapStateToProps = (state, ownProps) => {
  return {
    plant: getPlant(state.plants, ownProps)
  }
}

const PlantScreenContainer = connect(
  mapStateToProps,
  null
)(PlantScreen)

export default PlantScreenContainer
