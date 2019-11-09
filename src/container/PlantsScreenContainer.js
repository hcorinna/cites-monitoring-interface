import { connect } from 'react-redux'
import PlantsScreen from '../components/PlantsScreen'

const mapStateToProps = state => {
  return {
    plants: state.plants
  }
}

const PlantsScreenContainer = connect(
  mapStateToProps,
  null
)(PlantsScreen)

export default PlantsScreenContainer
