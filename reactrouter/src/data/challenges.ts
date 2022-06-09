let challenges = [
    {
        id: 1,
        title: 'Challenge 1'
    },
    {
        id: 2,
        title: 'Challenge 2'
    },
    {
        id: 3,
        title: 'Challenge 3'
    },
    {
        id: 4,
        title: 'Challenge 4'
    },
    {
        id: 5,
        title: 'Challenge 5'
    }
]

export const getChallenges = () => {
    return challenges;
}

export const getChallenge = (id: number) => {
    return challenges.find(
        (challenge) => challenge.id === id
      );
}