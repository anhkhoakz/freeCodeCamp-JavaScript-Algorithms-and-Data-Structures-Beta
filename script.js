const list = document.getElementById("project-list");

const items = [
    {
        text: "Learn Introductory JavaScript by Building a Pyramid Generator",
        href: "./Learn Introductory JavaScript by Building a Pyramid Generator",
    },
    {
        text: "Review JavaScript Fundamentals by Building a Gradebook App",
        href: "./Review JavaScript Fundamentals by Building a Gradebook App",
    },
    {
        text: "Learn Basic JavaScript by Building a Role Playing Game",
        href: "./Learn Basic JavaScript by Building a Role Playing Game",
    },
    {
        text: "Learn Basic Debugging by Building a Random Background Color Changer",
        href: "./Learn Basic Debugging by Building a Random Background Color Changer",
    },
    {
        text: "Learn Form Validation by Building a Calorie Counter",
        href: "./Learn Form Validation by Building a Calorie Counter",
    },
    {
        text: "Review DOM Manipulation by Building a Rock, Paper, Scissors Game",
        href: "./Review DOM Manipulation by Building a Rock, Paper, Scissors Game",
    },
    {
        text: "Learn Basic String and Array Methods by Building a Music Player",
        href: "./Learn Basic String and Array Methods by Building a Music Player",
    },
    {
        text: "Build a Palindrome Checker Project",
        href: "./Build a Palindrome Checker Project",
    },
    {
        text: "Learn the Date Object by Building a Date Formatter",
        href: "./Learn the Date Object by Building a Date Formatter",
    },
    {
        text: "Learn Modern JavaScript Methods by Building Football Team Cards",
        href: "./Learn Modern JavaScript Methods by Building Football Team Cards",
    },
    {
        text: "Learn localStorage by Building a Todo App",
        href: "./Learn localStorage by Building a Todo App",
    },
];

items.forEach((item) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");

    link.href = item.href;
    link.textContent = item.text;

    listItem.appendChild(link);
    list.appendChild(listItem);
});
