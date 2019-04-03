
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import { LoadData } from './../actions'
function mapStateToProps(state){
    return {
        posts : state.posts
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({LoadData}, dispatch)
}
class Posts extends React.Component{
    componentDidMount(){
        this.props.LoadData()
    }
    render(){
        return(
            <div>
                <ul>
                {
                    this.props.posts.map(data => {
                        return <li key={data.id}>{data.title}</li>
                    })
                }
                </ul>
            </div>
            
        )
    }
}

export const AllPosts = connect(mapStateToProps, mapDispatchToProps)(Posts);