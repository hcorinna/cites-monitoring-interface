import { connect } from 'react-redux'
import PlantsScreen from '../components/PlantsScreen'

const mapStateToProps = state => {
  return {
    details: state.details
  }
}

const PlantsScreenContainer = connect(
  mapStateToProps,
  null
)(PlantsScreen)

export default PlantsScreenContainer
