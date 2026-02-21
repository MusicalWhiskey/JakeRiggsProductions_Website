import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Me</h1>
        <p className="subtitle">The Story Behind the Music</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>My Background</h2>
            <p>Music and code have always felt like two sides of the same coin to me—different languages, same goal: telling stories that stick with people long after the last note or line of dialogue fades.</p>
            <p>Growing up, I was obsessed with worlds that felt alive. The Legend of Zelda series taught me how melody and motif could carry emotion across hours of gameplay. BioShock showed me how sound design and music could make a decaying underwater city feel both beautiful and terrifying. Dark Souls proved that silence and restraint could be more powerful than any orchestral swell. And Skyrim… Skyrim let me wander for hundreds of hours with Jeremy Soule’s score as my constant companion, whispering that atmosphere and narrative could be built as much through sound as through visuals.</p>
            <p>Then there was Forrest Gump. That soundtrack—Alan Silvestri’s gentle, nostalgic themes woven through decades of American history—hit me hard. It wasn’t just background music; it was memory, loss, hope, and quiet triumph all at once. Instrumental storytelling at its purest.</p>
            <p>Those experiences didn’t just make me love music—they made me want to create it. I atteneded Berklee College of Music where I started composing my own pieces, experimenting with sound design, and teaching myself how to make audio respond to a player’s choices. What began as fan arrangements and original tracks slowly evolved into interactive music systems for video games. I learned to write adaptive scores that shift with gameplay—dynamic layers, real-time stems, vertical remixing, and state machines that let music breathe with the story.
            That work naturally pulled me deeper into programming. Interactive audio demanded logic, timing, parameter control, middleware integration (Wwise, FMOD), and eventually full interactive experiences. Games became my canvas, but the principles stretched further: museum installations, VR narratives, live performances, even web-based art projects. I realized I wasn’t just making music anymore—I was engineering emotion, pacing, and immersion through code and sound working in perfect sync.</p>
            <p>Today, my work lives at that intersection. Whether I’m scoring a tense boss fight, designing an adaptive ambient layer for a quiet forest, or building an interactive experience that reacts to a visitor’s presence, the same things drive me: narrative depth, emotional authenticity, and the quiet thrill of making something that feels alive.
                If any of those worlds—Zelda’s wonder, BioShock’s dread, Dark Souls’ perseverance, Skyrim’s vastness, or Forrest Gump’s bittersweet heart—ever moved you, then we probably speak the same language.</p>
            <p>I believe music should make you feel something—whether it's nostalgia, joy, or just the 
                urge to move. That's what drives me to create.</p>
        </div>

        <div className="about-section">
          <h2>Musical Style</h2>
          <p>I love writing giant orchestral hybrid scores that feel larger than life—massive string sections swelling under thunderous percussion, full choirs soaring through epic climaxes, brass cutting through like sunlight on steel, all layered with modern synths, distorted electric guitars, and pulsing electronic rhythms. These pieces are built for moments that demand scale: final boss battles, sweeping cinematic reveals, or the emotional crest of a story that’s been building for hours. The orchestra provides the emotional weight and grandeur, while guitars and electronics bring raw energy and contemporary bite.</p>
          <p>At the opposite end of the spectrum, I find just as much joy in intimate, stripped-back works—solo piano pieces that breathe quietly in empty rooms. A single instrument, a handful of notes, lots of space. These are the moments of reflection, melancholy, or fragile hope—music that doesn’t demand attention but rewards it.</p>
          <p>And then there’s the nostalgic side: 8-bit / chiptune-inspired music. Crisp square waves, triangle leads, tight arpeggios, and that unmistakable lo-fi warmth. I grew up on early game soundtracks, and I still love how much personality and emotion can be squeezed into a handful of channels and limited waveforms. Whether it’s a retro homage, a modern synthwave twist, or something deliberately pixelated and raw, 8-bit music lets me play with simplicity and memory in a way nothing else does.</p>
        </div>

        <div className="about-section">
          <h2>Philosophy</h2>
          <p>I believe the most powerful interactive experiences are the ones that disappear.</p>
          <p>My goal—whether I'm composing adaptive music, designing sound systems, programming interactive logic, or building entire worlds—is to create something so coherent, so seamless, and so emotionally honest that the person experiencing it forgets they're sitting in front of a machine.
          The technology should never announce itself. No visible seams, no jarring transitions, no "look how clever this code is." The moment someone notices the loop point in the music, the artificial boundary of a trigger zone, or the mechanical hand of the system nudging them, the illusion breaks. And once the illusion breaks, the story loses its grip.
          </p>
          <p>The highest compliment I can receive is when someone says:</p>
          <p>"I forgot I was playing a game."</p>
          <p>"I felt like I was really there."</p>
          <p>"I made that choice—I owned it."</p>
          <p>That feeling of agency—of truly being in charge of your destiny—is what turns a good interactive piece into something unforgettable. It's not about giving players infinite freedom (most people don't actually want that). It's about giving them the conviction that their decisions matter, that the world responds meaningfully to who they are and what they choose.
          When music swells at exactly the right emotional beat, when a sound cue arrives as naturally as breath, when the narrative branches feel inevitable yet personal, the boundary between player and story dissolves. The machine becomes invisible. What remains is just the experience—raw, human, alive.
          Everything I build—every line of code, every layered stem, every adaptive parameter—is in service of that single aim:
          </p>
          <p>Make them forget the machine exists.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
