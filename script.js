const list = document.getElementById("project-list");

const projectNames = [
    "Learn Introductory JavaScript by Building a Pyramid Generator",
    "Review JavaScript Fundamentals by Building a Gradebook App",
    "Learn Basic JavaScript by Building a Role Playing Game",
    "Learn Basic Debugging by Building a Random Background Color Changer",
    "Learn Form Validation by Building a Calorie Counter",
    "Review DOM Manipulation by Building a Rock, Paper, Scissors Game",
    "Learn Basic String and Array Methods by Building a Music Player",
    "Build a Palindrome Checker Project",
    "Learn the Date Object by Building a Date Formatter",
    "Learn Modern JavaScript Methods by Building Football Team Cards",
    "Learn localStorage by Building a Todo App",
    "Learn Recursion by Building a Decimal to Binary Converter",
    "Build a Roman Numeral Converter Project",
    "Learn Regular Expressions by Building a Spam Filter",
    "Learn Basic Algorithmic Thinking by Building a Number Sorter",
    "Learn Advanced Array Methods by Building a Statistics Calculator",
    "Learn Functional Programming by Building a Spreadsheet",
    "Build a Telephone Number Validator Project",
    "Learn Basic OOP by Building a Shopping Cart",
    "Learn Intermediate OOP by Building a Platformer Game",
];

const projectsWithJSOnly = [
    "Learn Introductory JavaScript by Building a Pyramid Generator",
    "Review JavaScript Fundamentals by Building a Gradebook App",
];

function createURLs(basePath, projectName) {
    const urlFriendlyName = projectName.split(" ").join("%20");
    return `${basePath}/${urlFriendlyName}`;
}

function createURLsJSOnly(basePath, projectName) {
    const urlFriendlyName = projectName.split(" ").join("%20");
    return `${basePath}/${urlFriendlyName}/script.js`;
}

function createLocalLink(projectName, projectsWithJSOnly) {
    const localLink = document.createElement("a");
    const localIcon = document.createElement("i");
    localIcon.className = "link";
    localLink.appendChild(localIcon);

    if (projectsWithJSOnly.includes(projectName)) {
        localLink.href = createURLsJSOnly(".", projectName);
    } else {
        localLink.href = createURLs(".", projectName);
    }

    return localLink;
}

function createGitHubLink(projectName) {
    const githubLink = document.createElement("a");
    const githubIcon = document.createElement("i");
    githubIcon.className = "gh";
    githubLink.appendChild(githubIcon);
    githubLink.href = createURLs(
        "https://github.com/anhkhoakz/freeCodeCamp-JavaScript-Algorithms-and-Data-Structures-Beta/tree/main",
        projectName
    );
    githubLink.target = "_blank";

    return githubLink;
}

function createProjectListItem(projectName, projectsWithJSOnly) {
    const projectListItem = document.createElement("li");
    const projectText = document.createTextNode(projectName);

    const localLink = createLocalLink(projectName, projectsWithJSOnly);
    const githubLink = createGitHubLink(projectName);

    projectListItem.appendChild(projectText);
    projectListItem.appendChild(document.createTextNode("\u00A0"));
    projectListItem.appendChild(localLink);
    projectListItem.appendChild(document.createTextNode("\u00A0"));
    projectListItem.appendChild(githubLink);

    return projectListItem;
}

projectNames.forEach((projectName) => {
    const projectListItem = createProjectListItem(
        projectName,
        projectsWithJSOnly
    );
    list.appendChild(projectListItem);
});

function searchProject() {
    const input = document.getElementById("search");
    const filter = input.value.toUpperCase();
    const ul = document.getElementById("project-list");
    const li = ul.getElementsByTagName("li");

    for (let i = 0; i < li.length; i++) {
        let txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

window.onload = document.getElementsByTagName("form")[0].reset();
