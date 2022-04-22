array = [1, 5, 2, 6, 3, 7, 4];
commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

function solution(commands) {
let answer = [];

    answer = commands.map(v => {
        // console.log(v[0]);
        return array.slice(v[0]-1, v[1]).sort((a,b) => a-b)[v[2]-1]
    })

    console.log(answer);
    return answer;
//     let a = array.slice(commands[0] - 1, commands[1]).sort()[commands[2]-1];
// console.log(a);

}

solution(commands);