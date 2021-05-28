// Allows node.js to use fetch
// const fetch = require("node-fetch");

const getGithub = async (user, skill) => {
    // URL for fetch request, searching skill as keyword for specified user
    const githubUrl = `https://api.github.com/search/code?q=${skill}+user:${user}`;

    const response = await fetch(githubUrl, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        },
    })

    const skillData = await response.json();
    // console.log(skillData.total_count);
    return skillData;
};

const checkSkillHandler = async () => {
    console.log("CHECK SKILL CLICKED");

    const github = document.querySelector('#github').value.trim();
    const skill = document.querySelector('#skill').value.trim();
    // console.log(github);
    // console.log(skill);

    const skillUser = document.querySelector('#skill-user');
    const skillName = document.querySelector('#skill-name');
    const skillProf = document.querySelector('#skill-proficiency');
    const skillDetail = document.querySelector('#skill-detail');

    const skillData = await getGithub(github, skill);
    console.log(skillData);
    skillUser.innerHTML = github;
    skillName.innerHTML = `Skill: ${skill}`;
    skillProf.innerHTML = `Proficiency: ${skillData.total_count}`;
    skillDetail.innerHTML = `Repositories: <br>${listRepos(skillData)}`;
}

const listRepos = (skillData) => {
    const length = skillData.items.length;
    let repoList = '';
    for (let i = 0; i < length; i++) {
        repoList += skillData.items[i].repository.name + '<br>';
    }
    return repoList;
}

// getGithub('yilunxiao', 'mysql');
document
    .getElementById('check-skill')
    .addEventListener('click', checkSkillHandler);