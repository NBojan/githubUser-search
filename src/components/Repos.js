import { useGlobalContext } from "../context";
import {PieChart, BarChart, ColumnChart, DoughnutChart} from "./Charts/index";

const Repos = () => {
    const {gitRepos} = useGlobalContext();

    /*language instances and stars*/
    const languages = gitRepos.reduce((total, item) => {
        const {language, stargazers_count} = item;
        if(!language) return total;
        if(!total[language]){
            total[language] = {label: language, value: 1, stars: stargazers_count};
        } else {
            total[language] = {...total[language], value: total[language].value + 1, stars: total[language].stars + stargazers_count};
        }
        return total;
    }, {});

    /*Stars and Forks*/
    let {stars, forks} = gitRepos.reduce((total, item) => {
        const {forks, stargazers_count, name} = item;
        total.stars.push({label: name, value: stargazers_count}); 
        total.forks.push({label: name, value: forks}); 
        return total;
    }, {stars:[], forks:[]});

    const mostUsed = Object.values(languages).sort((a,b) => b.value - a.value).slice(0, 5);
    const starsPerLang = Object.values(languages).sort((a,b) => b.stars - a.stars).slice(0, 5).map(item => {
        return {...item, value: item.stars};
    });
    stars = stars.sort((a,b) => b.value - a.value).slice(0,5);
    forks = forks.sort((a,b) => b.value - a.value).slice(0,5);

    return (  
        <section className="repos flex-wrap d-flex space-between">
            <PieChart data={mostUsed} />
            <ColumnChart data={stars} />
            <DoughnutChart data={starsPerLang} />
            <BarChart data={forks} />
        </section>
    );
}
 
export default Repos;