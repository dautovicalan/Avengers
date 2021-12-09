import React from 'react'
import '../Styles/Story.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import pic1 from '../Pictures/StoryPictures/Samuel_Wilson.png'
import pic2 from '../Pictures/StoryPictures/aot.png'
import pic3 from '../Pictures/StoryPictures/scott.png'
import pic4 from '../Pictures/StoryPictures/parker.png'
import pic5 from '../Pictures/StoryPictures/end.png'
import pic6 from '../Pictures/StoryPictures/travelling.png'
import pic7 from '../Pictures/StoryPictures/battle.jpg'
import pic8 from '../Pictures/StoryPictures/frigga.png'
import pic9 from '../Pictures/StoryPictures/ifc.jpg'
import pic10 from '../Pictures/StoryPictures/hawk.png'
import pic11 from '../Pictures/StoryPictures/pop.png'
import pic12 from '../Pictures/StoryPictures/army.png'
import pic13 from '../Pictures/StoryPictures/bttl.png'
import pic14 from '../Pictures/StoryPictures/pots.png'
import pic15 from '../Pictures/StoryPictures/rip.jpg'
import pic16 from '../Pictures/StoryPictures/funeral.png'
import pic17 from '../Pictures/StoryPictures/ende.png'

const StoryPage = () => {
    AOS.init({
         // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of data-aos as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // Settings that can be overridden on per-element basis, by data-aos-* attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 2000, // values from 0 to 3000, with step 50ms
            easing: 'linear', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
    return (
        <div>
            <div className="flexbox-container">
                <div className="flexbox-item-1" data-aos="zoom-in">
                    <h2 className="intro-text">Intro</h2>
                </div>
                <div className="flexbox-item-2" data-aos="fade-up">
                    <p>Avengers: Endgame is a 2019 superhero film, based on the Marvel Comics superhero team of the same name.
                        The film is a sequel to The Avengers, Avengers: Age of Ultron, Avengers: Infinity War, Ant-Man and the Wasp, and Captain Marvel.
                        It is the twenty-second film in the Marvel Cinematic Universe, and the tenth installment of Phase Three.
                        The film was released in the United States on April 26, 2019 and re-released under the title Avengers: Endgame - With Bonus Content on June 28, 2019.
                    </p>
                </div>
                <div className="flexbox-item-3" data-aos="zoom-in">
                    <h2 className="story-text">Story</h2>
                </div>
                <div className="flexbox-item-4" data-aos="fade-up">
                    <p>
                       The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels 
                       the remaining Avengers to take one final stand in Marvel Studios' grand conclusion to twenty-two films, Avengers: Endgame.  
                    </p>
                </div>
                <div className="flexbox-item-4" data-aos="fade-up">
                    <p>
                       In 2018, Clint Barton guides his daughter Lila in archery at his homestead while his wife Laura and his two sons prepare a picnic, 
                       when everyone except Clint suddenly vanishes into dust.
                        Twenty-three days later, Tony Stark and Nebula are adrift in space on the Benatar, 
                        their fuel and supplies dwindling. As Stark records a message for his fiancée Pepper Potts in preparation for 
                        his demise, Carol Danvers locates the spaceship and brings them back to Earth. Stark reunites with Potts, 
                        Steve Rogers, Natasha Romanoff, Bruce Banner, and James Rhodes; Rocket Raccoon joins Nebula as they mourn the 
                        fall of their fellow Guardians of the Galaxy.
                        It has been three weeks since Thanos decimated half the universe's population with a Snap of his fingers. 
                        Stark furiously confronts Rogers on the notion that the Avengers remained fractured during their conflict with the Mad Titan, 
                        accusing him of lying on keeping the group together before passing out due to exhaustion. With a tip from Nebula about her father's location, 
                        along with a Snap-like energy signature 
                        from two days prior, the team head into space for the Garden, intending to take the Infinity Stones back and reverse the destruction.
                        
                    </p>
                </div>
                <div className="flexbox-item-5" data-aos="fade-up">
                     <img src={pic1}></img> 
                </div>
                <div className="flexbox-item-6" data-aos="fade-right">
                    <p>
                        They discover Thanos alone and undefended cooking a meal when they launch an ambush, but they find the Infinity Gauntlet emptied of its Stones. 
                        Thanos revealed that he had destroyed them using their own powers, which nearly killed him. Although suspected of lying by Rhodes, 
                        Nebula vouches for her father, as he is never a liar. Surprised with the affirmation, Thanos reconsiders his torturous treatment on his daughter, 
                        but he is then immediately beheaded by Thor. 
                        Although the Mad Titan is dead, they failed to accomplish their mission of resurrecting his victims. 
                        Thus, they could do no more but walk away in defeat.
                    </p>
                </div>
                <div className="flexbox-item-7" data-aos="fade-up">
                     <img src={pic2}></img> 
                </div>
                <div className="flexbox-item-8" data-aos="fade-right">
                    Five years pass, and the surviving population have yet to cope with their losses. In San Francisco, 
                    Scott Lang escapes from the Quantum Realm when a rat activates controls left behind by the van Dyne family before they vanished. 
                    Lang struggles to comprehend the disheveled state of the city, and approaches the Wall of the Vanished, where he encounters his own name. 
                    Fearful for the fate of his daughter Cassie, Scott rushes to her house and finds her alive and well. 
                    Father and the grown daughter tearfully reunite.
                </div>
                <div className="flexbox-item-9" data-aos="fade-right">
                    <p>
                        At the Avengers Facility, Romanoff now commands the the team as they perform various assignments. 
                        Rhodes informs her of a recent cartel massacre carried out by Barton, expressing his concern over how far their former comrade had fallen. 
                        Lang arrives at the compound and reveals to Romanoff and Rogers that although five years had passed, he spent five hours in the realm. 
                        He proposes that they could find a way to exploit the realm's time-bending nature to travel into the past and retrieve the Stones from different times. 
                        But since the three have no knowledge with the handling with quantum physics, they sought out Stark.
                    </p>
                </div>
                <div className="flexbox-item-10" data-aos="fade-up">
                     <img src={pic3}></img> 
                </div>
                <div className="flexbox-item-11" data-aos="fade-right">
                    <p>
                        Initially declining to help them, as he believes it would mean putting his daughter Morgan in danger of being erased from existence, 
                        Stark later decides to spring into action after coming across an old photo of him and his late protégé Peter Parker. 
                        He successfully develops a time-space GPS based on an inverted Möbius strip. Stark consults with Potts on his new discovery, 
                        who encourages him to do what's right for everyone else. Meanwhile, the other Avengers recruit Banner, who merged his intellect
                         with the Hulk's physique, to run time travel tests on Lang using his van. The experiment does not turn out as expected, as 
                         Lang constantly shifts between different ages. 
                        Afterwards, Stark arrives at the facility with the GPS and returns Rogers' shield to him, signifying their reconciliation.
                    </p>
                </div>
                <div className="flexbox-item-12" data-aos="fade-up">
                    <img src={pic4}></img> 
                </div>
                <div className="flexbox-item-13" data-aos="fade-right">
                    <p>
                        The remaining Avengers begin to regroup. As Nebula returns to New York, Banner and Rocket travel to 
                        New Asgard and recruit Thor, who has become an overweight drunkard traumatized with his perceived failure 
                        to stop Thanos. Romanoff goes to Tokyo and finds Barton, who massacred a group of Yakuza as part of his vengeful 
                        crusade against criminals who survived the Snap. Rocket and Stark build a time machine, while Barton volunteers to 
                        submit himself for a test run into the past. 
                        Grabbing a baseball mitt, he successfully carries it back to the present as evidence that their plan works.
                    </p>
                </div>
                <div className="flexbox-item-14" data-aos="fade-up">
                    <img src={pic5}></img> 
                </div>
                <div className="flexbox-item-15" data-aos="fade-right">
                    <p>
                        The Avengers plan out their Time Heist, using points from their past to pinpoint destinations for Infinity Stones: the Space, 
                        Mind, and Time Stones are found in 2012 New York, the Reality Stone in 2013 Asgard, 
                        and the Power and Soul Stones on Morag and Vormir respectively in 2014. They split into three teams and travel back in time to begin their missions.
                    </p>
                </div>
                <div className="flexbox-item-16" data-aos="fade-up">
                    <img src={pic6}></img>
                </div>
                <div className="flexbox-item-17" data-aos="fade-right">
                    <p>
                        Rogers, Stark, Banner and Lang arrive in an alternate 2012 in the midst of the Battle of New York. 
                        Banner approaches the New York Sanctum and finds the Ancient One, who refuses to lend the Time Stone to him. 
                        However, she relents after learning that Doctor Strange had given it away to Thanos in the future, fearing that it was done for a reason. 
                        At Stark Tower, Lang and Stark attempt to steal the Tesseract, but loses it to Loki, who uses it to teleport away. 
                        Rogers obtains the Scepter from STRIKE possession by feigning HYDRA affiliation, 
                        but is forced to fight his 2012 self who confuses him for Loki. After defeating his past self, Rogers rendezvous with Stark and Lang.
                    </p>
                </div>
                <div className="flexbox-item-18" data-aos="fade-up">
                    <img src={pic7}></img>
                </div>
                <div className="flexbox-item-19" data-aos="fade-right">
                    <p>
                        With only enough Pym Particles for one more trip each, Stark and Rogers decide to go back further to Camp Lehigh to an alternate 1970, 
                        where they have another shot to grab the Tesseract and more Pym Particles. Lang is left with the Scepter to return to the present day. 
                        At the S.H.I.E.L.D. base, Rogers stealthily obtains the Particles from Hank Pym, but runs into Peggy Carter's office while evading security.
                        He tearfully observes er as she works. Meanwhile, Stark encounters his father Howard after obtaining the Tesseract. 
                        With the latter's wife Maria expecting a baby, Tony (under the guise of "Howard Potts") offers parenting advice, saying that the good times he had 
                        with his father is what all that mattered.
                        Before they part ways, Tony hugs his father, having finally obtained his closure.
                        Arriving on Asgard in an alternate 2013, Thor experiences a panic attack after seeing his mother Frigga, 
                        recalling this is the day of her demise. Rocket attempts to encourage him to settle his grief and help him 
                        extract the Aether from Jane Foster's body, but Thor runs away, leaving the raccoon to do it himself. Thor unsuccessfully attempts 
                        to hide from Frigga and runs into her, who knows that her son is from the future. Sharing a talk, Frigga lectures her son on the importance 
                        of failure, advising him to follow his own path rather than try and live up to what he was supposed to be. Thor attempts to warn his mother about 
                        her impending death, but she silences him. As Rocket returns with the Aether in hand, 
                        Thor shares one last hug with Frigga before reaching out to retrieve Mjølnir, finding that he remains worthy of wielding the hammer.
                    </p>
                </div>
                <div className="flexbox-item-20" data-aos="fade-up">
                    <img src={pic8}></img>
                </div>
                <div className="flexbox-item-21" data-aos="fade-right">
                    <p>
                        In an alternate 2014, Barton and Romanoff board the Benatar for Vormir, while Nebula and Rhodes remain on Morag and wait for 
                        Peter Quill to arrive and lead them to the Orb's chamber. They knock Quill out and collect the Stone, but when the two attempt 
                        to travel back, Nebula is left behind when her memories are entangled with those of her past self. The Thanos of that time uses the 
                        link to see into the future, learning that the same humans who had foiled his 2012 invasion are returning to reverse his ultimate victory. 
                        Determined to know more, Thanos captures Nebula as she attempts to warn Barton and Romanoff of his newfound involvement. 
                        Past Nebula confronts her future self and collects her GPS and Pym Particles, handing it over to her father.
                    </p>
                </div>
                <div className="flexbox-item-22" data-aos="fade-up">
                    <img src={pic9}></img>
                </div>
                <div className="flexbox-item-23" data-aos="fade-right">
                    <p>
                        Meanwhile, Barton and Romanoff arrive on Vormir. They meet Red Skull, who informs them that the sacrifice 
                        of a loved one must be carried out in order for one to retrieve the stone. Barton laughs at the concept, 
                        but Romanoff deduces that it is indeed the truth, as Thanos had murdered his daughter Gamora there in their time. 
                        Understanding the severity of the situation, the two struggle to decide who should give their life for the cause, 
                        while Barton insists he should do it due to the carnage he left behind in the wake of his grief as Romanoff declares 
                        that her life's work has led her to this moment. As they dash to the cliff, they wrestle to keep each other away from 
                        sacrificing themselves. Ultimately, Romanoff made the jump, leaving the Soul Stone with Barton.
                    </p>
                </div>
                 <div className="flexbox-item-24" data-aos="fade-up">
                    <img src={pic10}></img>
                </div>
                <div className="flexbox-item-25" data-aos="fade-right">
                    <p>
                        The Avengers return to the present day. Stricken with the loss of one of their own, 
                        they realize that her death cannot be undone, and that their efforts to save the universe 
                        must not leave her death in vain. They construct a new gauntlet and load the six Stones onto it. 
                        Thor attempts to volunteer to perform the snap, but Banner steps in due to the Stones' gamma radiation. 
                        While severely scarring his arm, he successfully snaps his fingers and brings the victims of the Snap back to life. 
                        Elsewhere, Past Nebula-- who traveled to the present in place of her future self-- opens a time portal, allowing Thanos to bring 
                        Sanctuary II forward from 2014. The Avengers barely have time to celebrate their success when the ship abruptly opens 
                        fire on the compound with a barrage of missiles, leveling the facility to a pile of rubble.
                    </p>
                </div>
                <div className="flexbox-item-26" data-aos="fade-up">
                    <img src={pic11}></img>
                </div>
                <div className="flexbox-item-27" data-aos="fade-right">
                    <p>
                        As Thanos sends Past Nebula to retrieve the Stones, her future self reveals to Gamora their improved relationship in the future. 
                        Gamora decides to join Nebula to stop her father. Meanwhile, Rhodes, Rocket and Banner are trapped in a flooding area, 
                        forcing Lang to come and save them. Barton lands next to the gauntlet in the sewers, which is infested with Outriders. 
                        After escaping them, he unknowingly passes the apparatus to Past Nebula, who is then confronted by Gamora and Nebula; the 
                        latter kills her past self once she threatens her sister. Stark, Rogers and Thor confront Thanos on the ground, who intends to 
                        rebuild the entire universe using the Stones. After Stark and Thor are overpowered and knocked aside in the ensuing fight, 
                        Rogers wields Mjølnir against the time-displaced Titan. However, Thanos severely injures him and nearly destroys his shield with his sword.
                        Thanos summons the rest of his army, which include the Chitauri and the Black Order, to lay siege on Earth. 
                        Just as Rogers prepares to face them alone, a series of portals appear behind him. The Masters of the Mystic 
                        Arts have arrived with reinforcements from Kamar-Taj, Wakanda, Contraxia and New Asgard, along with the Avengers' 
                        resurrected allies from Wakanda, Titan and San Francisco. Lang, growing to giant size, retrieves Banner, 
                        Rhodes and Rocket from the flooded depths. With the scales now balanced, Rogers leads his allies into the battle for the fate of the universe.
                    </p>
                </div>
                <div className="flexbox-item-28" data-aos="fade-up">
                    <img src={pic12}></img>
                </div>
                <div className="flexbox-item-29" data-aos="fade-right">
                    <p>
                        Banner tells Barton that they must get the Stones back to their respective times and away from Thanos. With their main time 
                        machine destroyed in the initial attack, their only other option is the van; Ant-Man and Wasp jump to hotwire the dead vehicle. 
                        As Thanos' forces close in on Barton. he passes the gauntlet onto Black Panther. As Thanos prepares to charge at T'Challa, he 
                        suddenly finds his path blocked by a vengeful Wanda Maximoff, seeking revenge for his 2018 self's murder of Vision. 
                        As Wanda engages Thanos, T'Challa runs, only to become entrapped by Ebony Maw. Seeing T'Challa's predicament, Spider-Man swoops in 
                        and snatches the gauntlet.
                        Meanwhile, Wanda's attacks leave Thanos at her mercy, as she effortlessly breaks his sword and lifts him into the air, 
                        the whole time ripping chunks of armor from his body. In order to escape her grasp, Thanos orders another missile barrage 
                        from Sanctuary II (against Corvus Glaive's protests) that deals great damage to both sides. One of the missiles takes out a dam, 
                        forcing Doctor Strange out of the fight to prevent the battlefield from flooding.
                    </p>
                </div>
                <div className="flexbox-item-30" data-aos="fade-up">
                    <img src={pic13}></img>
                </div>
                <div className="flexbox-item-31" data-aos="fade-right">
                    <p>
                        Suddenly, Sanctuary II redirects its fire to an object arriving from outer space. It was Carol Danvers, 
                        who comes to single-handedly destroy the warship. Retrieving the gauntlet from Parker, she enlists the aid 
                        of her fellow female combatants as she dashes to the now-activated van. However, Thanos uses his sword to destroy 
                        the vehicle and the quantum portal. With the gauntlet in Thanos' reach, Stark, Rogers, Thor and Danvers make their 
                        last stand to keep it out of his hands. However, he manages to shake all of his opposition aside and equip the gauntlet. 
                        Strange informs Stark that this is the one future that ends in their victory. Determined, Stark dashes at Thanos one last time, 
                        but he is knocked aside as the Titan snaps his fingers. Nothing happens, as the Stones have been stolen by Stark and transferred onto his suit. 
                        With the very being that has haunted him for the past eleven years now at his mercy, Stark snaps his own fingers.
                    </p>
                </div>
                <div className="flexbox-item-32" data-aos="fade-up">
                    <img src={pic14}></img>
                </div>
                <div className="flexbox-item-33" data-aos="fade-right">
                    <p>
                        Thanos watches in horror as his own forces crumble to dust in front of him, only to meet that same fate soon after. 
                        Stark is mortally wounded from his usage of the Stones, and is greeted by Rhodes, Parker and Potts as he lays dying. 
                        Potts assures her husband that they are going to be alright, and allows him to rest. 
                        Stark's Arc Reactor then permanently shuts off, Potts giving him one last kiss. Rogers and Thor mournfully watch at a distance.
                    </p>
                </div>
                <div className="flexbox-item-34" data-aos="fade-up">
                    <img src={pic15}></img>
                </div>
                <div className="flexbox-item-35" data-aos="fade-right">
                    <p>
                        he Mad Titan's final defeat and the return of the Vanished calls for celebrations all around the world, 
                        including in Wakanda and San Francisco. At Stark's funeral, he leaves a final holographic message for his 
                        family and closest friends, including a heartfelt goodbye for Morgan. Stark's original Arc Reactor is set 
                        adrift in the lake outside their cabin, with the Avengers and their allies in attendance, 
                        including those who had past grievances with Stark, such as the Pym family, Wanda, and Bucky Barnes.
                    </p>
                </div>
                <div className="flexbox-item-36" data-aos="fade-up">
                    <img src={pic16}></img>
                </div>
                <div className="flexbox-item-37" data-aos="fade-right">
                    <p>
                        Outside New Asgard, Thor names Valkyrie as Asgard's new ruler while he abdicates to join the Guardians of the Galaxy, 
                        following his mother's advice. Meanwhile, Rogers prepares to go back in time to return the Stones and Mjølnir, 
                        bidding goodbye to Barnes. As Banner is unable to bring him back when prompted, Barnes alerts Sam Wilson to the 
                        presence of an elderly man nearby. It is an aged up Rogers, who had chosen to remain in the past and live out a full life 
                        with Peggy Carter. He presents Wilson with a new shield, passing the mantle of Captain America unto him.
                    </p>
                </div>
                <div className="flexbox-item-38" data-aos="fade-up">
                    <img src={pic17}></img>
                </div>
            </div>
        </div>
    )
}

export default StoryPage
