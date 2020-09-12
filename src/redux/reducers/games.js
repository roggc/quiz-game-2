import {games,scores,questions,answers,play} from '../../data/games'
import { GAMES_JOIN, GAMES_SETGID, gamesSetGId, GAMES_SETSCORE, gamesSetScore } from '../actions/games'

const initialState={
    games:games,
    scores:scores,
    play:play,
    questions:questions,
    answers:answers,
    gid:undefined
}

const join=(state,action)=>{
    const mutableGames=state.games.filter(g=>true)
    const uid=action.uid
    const gid=action.gid
    const game=mutableGames.find(game=>game.id===gid)
    const users=game.users
    users.splice(0,0,uid)
    return {
        ...state,
        games:mutableGames
    }
}

const setGId=(state,action)=>{
    return {
        ...state,
        gid:action.gid
    }
}

const setScore=(state,action)=>{
    let newScores
    
    if(state.scores.some(sc=>sc.gid===action.gid&&sc.uid===action.uid)){
        const mutableScores=state.scores.filter(sc=>true)
        const theScore=
        mutableScores.find(sc=>sc.gid===action.gid&&sc.uid===action.uid)
        theScore.score=action.score
        newScores=mutableScores
    }else{
        newScores=state.scores.concat({
            gid:action.gid,
            uid:action.uid,
            score:action.score
        })
    }

    return {
        ...state,
        scores: newScores
    }
}


export default (state=initialState,action)=>{
    switch(action.type){
        case GAMES_JOIN:
            return join(state,action)
        case GAMES_SETGID:
            return setGId(state,action)
        case GAMES_SETSCORE:
            return setScore(state,action)
        default:
            return state
    }
}