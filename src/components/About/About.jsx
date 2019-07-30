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
      <p>My family didn&apos;t play very many board games when I was a kid. We played <u>Monopoly</u> some, but we were never really serious board gamers. But I remember getting a game called <u>Hero Quest</u> that changed my mind about the whole thing. My sister and I played that game for hours, making the little plastic heroes explore the dungeon and smash the little plastic monsters. I carried that love forward to the time that I first played a tabletop roleplaying game. My first TTRPG was <u>Vampire: The Masquerade</u>, because that was what my friend wanted to run. From there I went on to <u>Dungeons &amp; Dragons</u>, <u>Savage Worlds</u>, and probably my favorite, <u>Shadowrun</u>. Roleplaying games are like a collaborative storytelling experience. I love getting together with friends, either in person or over the internet, and telling stories.</p>
      <p>Crafting can mean a lot of different things, but what it comes down to is building something physical with your own hands. I&apos;ve tried my hand at leatherworking, beading, sewing, but the medium that I enjoy the most is woodworking. I enjoy making furniture, game boards, accessories for my tabletop games, and even occasionally jewelry.</p>
    </section>
    <section>
      <h2>Scouting</h2>
      <p>Scouting has been a big part of my life. I joined the Cub Scouts when I was in 2<sup>nd</sup> grade, and I stayed with the Scouts until I was about 17. I earned my Eagle rank when I was 15 and I have carried the lessons that I learned as a scout through my whole life.</p>
      <p>Now that I am a parent, I am back into scouting in a big way. I have been an Assistant Den Leader, a Den Leader, and a Popcorn Kernel. I help organize community service projects for my pack. I lead scouts in how to be a Color Guard. I try to be as good a leader as I can be for the young people who will shape the world&apos;s future.</p>
    </section>
    <section>
      <h2>Career</h2>
      <p>I didn&apos;t always want to be a computer programmer. When I was a kid, like many kids, I wanted to be an astronaut. When that fire died down, I looked at the video games that I loved so much, and I wanted to make more. I wanted to make the games that other people would love. But I lived in the midwest, and there weren&apos;t a lot of opportunities in that field, so I took what there was.</p>
      <p>My first job out of college was as a COBOL programmer, maintaining a system that had been in place for about 20 years. While I was working there, the company needed to make some changes to the interface that the customer service representatives in the field used. They asked if anybody had JavaScript experience, and I had more than just about anybody in the department. That was how I got into front end development. While I was there I did a project in Google Web Toolkit, at my next employer I was exposed to AngularJS and Aurelia. Then I did a few projects in ReactJS</p>
      <p>One of my early projects was in Google Web Toolkit, which was written in Java then transpiled into JavaScript. That was when i was exposed to jUnit and the world of automated testing. Ever since I worked on that project, I have been a proponent of automated testing. It does take time to write the tests, but in my experience it saves more time than it costs.</p>
    </section>
    <section>
      <h2>History</h2>
      <p>I was born in Indianapolis, Indiana, and grew up in a suburb called Plainfield. I had what most would consider a pretty good childhood. I had friends, school, Cub Scouts, and a great family. One time, I was riding my bike in the parking lot of a church across the street from my house. A branch fell in front of my bike as I was riding, and I rode straight through it. I got a twig through the white part of my eye and had to go to the hospital in Indianapolis to get it cleaned out and get stitches. I was very lucky not to lose the eye.</p>
      <p>When I was about 12 we moved to Bloomington, Indiana. I left friends behind, but I adapted and made new friends. I got into Scouts again, joined a children&apos;s choir, and got a job as a newspaper carrier.</p>
      <p>In high school I met the woman I would end up marrying. I graduated from high school, went into college, got married, grduated college, and entered the workforce. I had kids, moved jobs a couple of times, and now it&apos;s the present.</p>
    </section>
  </div>
);

export default about;