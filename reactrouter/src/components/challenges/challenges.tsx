import { NavLink, Outlet } from "react-router-dom";
import { getChallenges } from "../../data/challenges"
import { Challenge } from "./challenge";

export const Challenges = () => {
    const challenges = getChallenges();

    return (
        <>
            <div>
                {challenges.map((challenge) => (
                    <>
                        <NavLink to={`/challenges/${challenge.id}`} 
                                key={challenge.id}>
                            {challenge.title}
                        </NavLink>
                        {/* <Challenge challenge={challenge} /> */}
                    </>
                ))}
            </div>
            <Outlet/>
        </>
    )
}