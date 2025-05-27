import { v4 as uuidv4 } from 'uuid';

export default function Languages() {
    const languages = [
        "Python",
        "JavaScript",
        "C",
        "C++",
        "Java",
        "Go",
        "Rust",
        "Ruby",
        "TypeScript",
        "Swift",
        "Kotlin",
        "PHP",
        "Perl",
        "Scala",
        "Haskell",
        "Dart",
        "R",
        "MATLAB",
        "Lua",
        "Assembly"
    ];
const language = languages.map(name=>({
        id:uuidv4(),
        name: name
    }

));
    return console.log(languages);
}
