

function solution() {

    let answer;

    // participant = ["leo", "kiki", "eden"];
    participant = ["mislav", "stanko", "mislav", "ana"];

    // completion = ["eden", "kiki"];
    completion = ["stanko", "ana", "mislav"];

    participant.sort();
    completion.sort();

    console.log(participant);
    console.log(completion);


    for(let i = 0; i < participant.length; i++){
        if(participant[i] != completion[i]) {
            answer = participant[i];
            break;
        }
    }
    console.log(answer);
    return answer;
}

solution();