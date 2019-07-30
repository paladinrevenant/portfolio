import React            from "react";
import SampleAngular    from "Components/samples/SampleAngular";
import SampleAurelia    from "Components/samples/SampleAurelia";
import SampleC          from "Components/samples/SampleC";
import SampleCpp        from "Components/samples/SampleCpp";
import SampleHtml       from "Components/samples/sampleHtml";
import SampleJava       from "Components/samples/sampleJava";
import SampleJavascript from "Components/samples/sampleJavascript";
import SamplePhp        from "Components/samples/samplePhp";
import SampleReact      from "Components/samples/sampleReact";
import SampleSlim       from "Components/samples/sampleSlim";
import { SKILL_TYPES }  from "Source/constants";

/**
 * A collection of skills for display in the skill list
 * 
 *        name: Name of the skill
 *        type: Type of the skill used for grouping. Valid types: ["FRAMEWORK_SKILL", "LANGUAGE_SKILL"]
 *  experience: A number 1-10 indicating my level of experience
 * description: A description of my experience in the skill
 */
const skills = [
  {
    name: "C",
    type: SKILL_TYPES.LANGUAGE,
    experience: 4,
    description: "C was my first programming language. I wrote a number of small, text-based programs in C when I was in college. While I have not actively developed in C in a number of years, I will always be grateful of the lessons that I learned from using the language.",
    selected: false,
    sample: <SampleC />
  },
  {
    name: "C++",
    type: SKILL_TYPES.LANGUAGE,
    experience: 3,
    description: "C++ was my introduction to objects and to object oriented programming. Working with C++ helped me to internalize the concept that any object variable is simply a pointer. I have not developed anything in C++ in quite a while, but it taught me lessons that I have used throughout my career.",
    selected: false,
    sample: <SampleCpp />
  },
  {
    name: "Java",
    type: SKILL_TYPES.LANGUAGE,
    experience: 6,
    description: "I programmed in Java professionally for a couple of years after college. Since then I've toyed around a little bit with Minecraft mods. I like working with Java, but my career sent me down a different path.",
    selected: false,
    sample: <SampleJava />
  },
  {
    name: "JavaScript",
    type: SKILL_TYPES.LANGUAGE,
    experience: 9,
    description: "Javascript has been the backbone of my career for the past 5 years.",
    selected: false,
    sample: <SampleJavascript />
  },
  {
    name: "PHP",
    type: SKILL_TYPES.LANGUAGE,
    experience: 7,
    description: "PHP Description",
    selected: false,
    sample: <SamplePhp />
  },
  {
    name: "ReactJS",
    type: SKILL_TYPES.FRAMEWORK,
    experience: 8,
    description: "React Description",
    selected: false,
    sample: <SampleReact />
  },
  {
    name: "Angular",
    type: SKILL_TYPES.FRAMEWORK,
    experience: 2,
    description: "Angular Description",
    selected: false,
    sample: <SampleAngular />
  },
  {
    name: "Aurelia",
    type: SKILL_TYPES.FRAMEWORK,
    experience: 4,
    description: "Aurelia Description",
    selected: false,
    sample: <SampleAurelia />
  },
  {
    name: "Slim",
    type: SKILL_TYPES.FRAMEWORK,
    experience: 4,
    description: "Slim Description",
    selected: false,
    sample: <SampleSlim />
  },
  {
    name: "HTML",
    type: SKILL_TYPES.LANGUAGE,
    experience: 9,
    description: "HTML Description",
    selected: false,
    sample: <SampleHtml />
  }
];

export default skills;