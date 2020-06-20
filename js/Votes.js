class   Voter {
    constructor(){

    }

    getCount(){
        // take data form database
        var voterCountRef = database.ref('VoterCount');
        voterCountRef.on("value",function(data){
            voterCount = data.val();
        })
    }

    updateCount(count){
        // count the votes
        database.ref('/').update({
            voterCount : count
        });
    }

    update(Name){
        var voteIndex = "Vote"+voterCount;
        database.ref(voteIndex).set({
            Name : Name
        });
    }
}