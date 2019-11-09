import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'

const mapStateToProps = (state) => {
  return {
    plants: state.plants
  }
}

const DashboardContainer = connect(
  mapStateToProps,
  null
)(Dashboard)

export default DashboardContainer
