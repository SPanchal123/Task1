import React, { Component } from "react"
import { connect } from "react-redux"
import { getScorelist } from "../redux/actions/scorelistaction"
import back from "../assets/back.jpg"
import league from "../assets/league.png"
import sharks from "../assets/sharks.png"
import knights from "../assets/knights.png"

import "../css/overlay.css"



class Overlay extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    componentDidMount() {
        this.props.getScorelist()
    }
    render() {
        const scoreData=this.props.Scorelist.Scorelist
        console.log("Scorelist", scoreData)


        return (
            <div>
                <div className="backImg">
                    <img src={back} />

                </div>
                <div className="container">
                    <div className="league-card">
                        <img src={league} width="150px" />

                        <div className="crd1"></div>
                        <div className="crd2"></div>
                        <div className="crd3"></div>
                        <div className="crd4"></div>
                        <div className="crd5"></div>

                    </div>
                    <div className="title-text">
                        <span>Netional Basketboll Association</span>
                    </div>
                    <div className="score-container">
                        <div className="team1-container">
                            <div className="team1">
                                <img src={knights} height="40px" width="40px" />
                                <span>{scoreData?.home_team?.name}</span>
                            </div>

                        </div>
                        <div className="score">
                            <span>{`${scoreData?.home_team?.score}/${scoreData?.away_team?.score}`}</span>
                        </div>
                        <div className="team2-container">
                            <div className="team2">
                                <img src={sharks} height="40px" width="40px" />
                                <span>{scoreData?.away_team?.name}</span>
                            </div>
                        </div>
                    </div>
                    <div className="time">
                        <span>SECOND QUARTER 14:37</span>
                    </div>


                </div>
                <div className="location">
                    <span>UNITED CENTER</span>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {

    return {
        Scorelist: state.getScorelistReducer


    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getScorelist: () => dispatch(getScorelist()),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
