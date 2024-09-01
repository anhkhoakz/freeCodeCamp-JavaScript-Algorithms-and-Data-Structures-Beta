const list = document.getElementById("project-list");
const githubList = document.getElementById("github-list");

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
];

function createURLs(basePath, projectName) {
    const urlFriendlyName = projectName.split(" ").join("%20");
    return `${basePath}/${urlFriendlyName}`;
}

function createURLsJSOnly(basePath, projectName) {
    const urlFriendlyName = projectName.split(" ").join("%20");
    return `${basePath}/${urlFriendlyName}/script.js`;
}

projectNames.forEach((projectName) => {
    const githubUrl = createURLs(
        "https://github.com/anhkhoakz/freeCodeCamp-JavaScript-Algorithms-and-Data-Structures-Beta/tree/main",
        projectName
    );

    const localListItem = document.createElement("li");

    const projectText = document.createTextNode(projectName);

    const localLink = document.createElement("a");
    projectsWithJSOnly = [
        "Learn Introductory JavaScript by Building a Pyramid Generator",
        "Review JavaScript Fundamentals by Building a Gradebook App",
    ];
    if (projectsWithJSOnly.includes(projectName)) {
        localLink.href = createURLsJSOnly(".", projectName);
    } else {
        localLink.href = createURLs(".", projectName);
    }

    const localIcon = document.createElement("i");
    localIcon.className = "link";

    localLink.appendChild(localIcon);

    localListItem.appendChild(projectText);
    localListItem.appendChild(document.createTextNode("\u00A0"));
    localListItem.appendChild(localLink);
    list.appendChild(localListItem);

    const githubListItem = document.createElement("li");

    const githubText = document.createTextNode(projectName);

    const githubLink = document.createElement("a");
    githubLink.href = `${githubUrl}`;
    githubLink.target = "_blank";

    const githubIcon = document.createElement("i");
    githubIcon.className = "link";

    githubLink.appendChild(githubIcon);

    githubListItem.appendChild(githubText);
    githubListItem.appendChild(document.createTextNode("\u00A0"));
    githubListItem.appendChild(githubLink);
    githubList.appendChild(githubListItem);
});
