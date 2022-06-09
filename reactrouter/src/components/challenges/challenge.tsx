import { getChallenge } from "../../data/challenges";
import { IChallenge } from "../../models/challenge"
import { ChallengeStyles } from "./challenge.jss"

interface IChallengeProps {
    challenge?: IChallenge,
    id?: number
}

export const Challenge = (props: IChallengeProps) => {
    const styles = ChallengeStyles();
    var challengeId = -1;
    var challengeTitle = "Challenge no encontrado";
    var challenge = null;

    if (props.challenge || props.id) {
        challenge = props.challenge 
                            ? props.challenge 
                            : getChallenge(props.id as number)
    }   
    challengeId = challenge ? challenge.id : -1;
    challengeTitle = challenge ? challenge.title : "No encontrado";

    return (
        <>
            <div className={styles.challengeContainer}>
                <div>Id: {challengeId}</div>
                <div>Title: {challengeTitle}</div>
            </div>
        </>
    )
}