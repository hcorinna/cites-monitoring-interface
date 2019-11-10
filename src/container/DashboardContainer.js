import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'

const mapStateToProps = (state) => {
  return {
    details: state.details
  }
}

const DashboardContainer = connect(
  mapStateToProps,
  null
)(Dashboard)

export default DashboardContainer
