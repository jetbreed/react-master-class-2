import React from 'react';

function MissedGoal(){
    return <h1>MissedGoal</h1>;
}

function ScoredGoal(){
    return <h1>ScoredGoal</h1>;
}

function Goal(props) {
    const isGoal = false;
    if (isGoal != true) {
      return <ScoredGoal/>;
    }
    else{
    return <MissedGoal/>;
    }
  }
  
export default Goal;