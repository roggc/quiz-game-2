import {Game,Score,Question,Answer,Play} from '../model/game'

export const games= [
    new Game('g1',[
        'u1@gmail.com',
        'u2@gmail.com',
        'u3@gmail.com',
        'u4@gmail.com',
        'u5@gmail.com',
    ]),
]

export const scores=[
    new Score('g1','u1@gmail.com',100),
    new Score('g1','u3@gmail.com',50)
]

export const questions=[
    new Question('q1','how much is 2 plus 2'),
    new Question('q2','how much is 1 plus 5'),
    new Question('q3','how much is 6 minus 10'),
]

export const answers=[
    new Answer('q1','3',false),
    new Answer('q1','4',true),
    new Answer('q1','2',false),
    new Answer('q1','1',false),

    new Answer('q2','9',false),
    new Answer('q2','7',false),
    new Answer('q2','4',false),
    new Answer('q2','6',true),

    new Answer('q3','-1',false),
    new Answer('q3','0',false),
    new Answer('q3','4',false),
    new Answer('q3','-4',true),
]

export const play=[
    new Play('g1','q1'),
    new Play('g1','q2'),
    new Play('g1','q3')
]

