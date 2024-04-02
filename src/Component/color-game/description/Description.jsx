import { memo } from "react";
import Explanation from "./Explanation";
import Movie from "./Movie";


const texts = {
    header: ['this is a famous game among developers. and now, our team try to presenting it in a creatively and fun package.'],
    gameDescription: [`color game haves three different level and in one round you can use one of those for gaining more score.`, `any of levels have different features::`, `easy::   two chance and one score.`, `normal::   three chance and two score.`, `hard::   four chance and three score.`],
    playersDescription: ['But about players section for an attractive competition we added this part.',`First you should sign up or if you've signed up already, you should log in and try to set the highest score in game.`, 'Good luck and have a dream year.']
};

export default memo(function Decription() {

    return (
        <div className="w-full h-[calc(100%-4rem)] text-lg flex justify-center flex-wrap py-[50px] overflow-y-scroll">
            <Explanation text={texts.header} />
            <Movie />
            <Explanation text={texts.gameDescription} />
            <Explanation text={texts.playersDescription} />
        </div>
    );
});