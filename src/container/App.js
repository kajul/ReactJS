import React , {Component} from 'react';
import movie_List from '../action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Displaylist from '../component/displaylist';


class App extends Component{

    componentDidMount(){

        this.props.movie_List();
    }
render(){

    return(
        <div>
        <h1>Redux App</h1>

        <Displaylist dataList={this.props.myData}></Displaylist>
            </div>
    )
}

}
function mapStateToProps(state){
    //return the state
    console.log('mapStateToProps',state);
    return {
            myData:state.movieReducer

    }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({movie_List},dispatch);

}
export default connect(mapStateToProps,mapDispatchToProps)(App);
