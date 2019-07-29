import React from "react";
import classes from "./About.less";
import image from "Assets/300x400.png";

const about = (props) => (
  <div className={ classes.About }>
    <h1>About Mike Maxson</h1>
    <img src={image} />
    <section>
      <h2>Hobbies</h2>
      <p>My hobbies can be broken down generally into three categories: Tabletop Games, Video Games, and Crafting.</p>
      <p>My love of video games dates back to the early days of home computing. The first computer game that I remember playing as a kid was <u>Dream House</u> for the Commodore 64. From that early game I eventually moved on to games like <u>Super Mario Bros.</u>, <u>The Legend of Zelda</u>, and <u>Final Fantasy</u>. Video games have been a big part of my life. I&apos;ve always enjoyed the stories that they tell. I also think that the fascination with making something on the screen move with the controller in my hand is what sent me down the road to being a software developer.</p>
      <p>My family didn&apos;t play very many board games with I was a kid. We played <u>Monopoly</u> some, but we were never really serious poard gamers. But I remember getting a game called <u>Hero Quest</u> that changed my mind about the whole thing. My sister and I played that game for hours, making the little plastic heroes explore the dungeon and smash the little plastic monsters. I carried that love forward to the time that I first played a tabletop roleplaying game. My first TTRPG was <u>Vampire: The Masquerade</u>, because that was what my friend wanted to run. From there I went on to <u>Dungeons &amp; Dragons</u>, <u>Savage Worlds</u>, and probably my favorite, <u>Shadowrun</u>.</p>
    </section>
    <section>
      <h2>Scouting</h2>
      <p></p>
    </section>
    <section>
      <h2>Career</h2>
      <p></p>
    </section>
    <section>
      <h2>History</h2>
      <p></p>
    </section>
  </div>
);

export default about;