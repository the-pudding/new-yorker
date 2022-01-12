<script>

</script>



<section>
    <p class="date">January 11, 2022</p>
    <p>We were hopeful that we could get GPT-3—an AI program that can shockingly produce writing that’s indistinguishable from humans—to produce a winning caption for the venerated New Yorker Cartoon Caption Contest.</p>    
</section>
<section>
    <p><span class="bolded">We were impressed by what an AI could generate. </span>Here’s one of our favorite captions authored by GPT-3.</p>

    <div class="wide-mode white">
        <img src="https://media.newyorker.com/cartoons/61327f4b4bc5f041092d873b/master/w_580,c_limit/210913_a25275_771.jpg" alt="captionless cartoon by Drew Dernavich">
        <p class="caption">“Don't worry, dear. It's just the magnetism of my personality.”</p>
    </div>
    <p>What a masterpiece! Even I would be skeptical that a computer could pull off a double entendre, so here’s how we generated it:</p>
    <div class="wide-mode white">
        <video muted alt="Video of GPT-3 generating a caption for the cartoon of a 'A couple are sitting on a couch and surrounded by five guys who have metal detectors who are sweeping the floor around the couch, looking for metal. What is the woman saying to the man?'" src="/assets/videos/playground.mp4" controls autoplay loop></video>
    </div>
    <p>GPT-3 is an open-to-the-public tool (just create an account <a href="https://beta.openai.com/playground" target="_blank">here</a> ). The “playground” mode is just a text box. Enter some text and GPT-3 generates a response, wielding a model that’s trained on THE ENTIRE INTERNET. In this case we write,</p>
    <p><i>“A couple are sitting on a couch and surrounded by five guys who have metal detectors who are sweeping the floor around the couch, looking for metal. What is the woman saying to the man?”</i></p>
    <p>And it responds with the caption,</p>
    <p><i>“Don't worry, dear. It's just the magnetism of my personality.”</i></p>
    <p>The New Yorker receives thousands of entries for each week’s contest. It runs a <a href="https://s3.us-west-2.amazonaws.com/mlnow-newyorker/captioncontest_s3.html" target="_blank">survey</a> where people are asked whether a caption is funny, and they <a href="https://nextml.github.io/caption-contest-data2/" target="_blank">publish</a> the results (the magazine’s editors then choose the finalists from this ranked list).</p>
</section>
<section>
    <p><span class="bolded">We submitted computer-generated captions for 10 different contests. One caption ranked in the top 100.</span> <span class="smaller">Captions, ranked by votes from the New Yorker’s Cartoon Caption Contest Survey</span></p>
    <div class="wide-mode">placeholder</div>
    <p>For each of the contests to which we submitted, we tweaked our approach each time based on how funny the captions were (both based on official voting and our own instincts).</p>
</section>
<section class="colorful">
    <div class="contest wide-mode">
        <div class="date-header">
            <div class="line"></div>
            <span>Contest 727 / May 27, 2021</span>
            <div class="line"></div>
        </div>
        <div class="contest-left">
            <img src="https://media.newyorker.com/cartoons/612042cfae85db0a03039b7d/master/w_580.jpg" alt="">
        </div>
        <div class="contest-right">
            <div class="submitted">
                <p class="greyed">Submitted: ranked #X of Y entries</p>
                <p>“I’m sorry about this whole climate change thing.” (Submitted to contest, ranking #X of Y submissions)</p>
            </div>
            <div class="others">
                <p class="greyed">Also generated:</p>
                <p>The weather was awful and he was so boring.</p>
                <p>“The best case scenario is that those are just rainclouds. If not, I'll have to figure out how to keep my margarita from spilling.”</p>
            </div>
        </div>
        <div class="line"></div>
    </div>
    <p>We started with the most basic approach, called the <a href="contest/757">Zero-Shot</a>.</p>
</section>


<style>

    .contest-left {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background:#FFF;
    }
    .contest-right {
        width: 50%;
        padding-left: 1rem;
    }
    .contest-right p{
        font-size: 16px;
    }
    .contest-right .greyed {
        color: rgba(0,0,0,.7);
        margin-bottom: 0;
    }
    .submitted {
        margin-bottom: 2rem;
    }
    .contest-left img {
        width: calc(100% - 2rem);
    }

    .colorful {
        background: var(--backgroundGradient,var(--backgroundColor));
        min-height: 1000px;
    }
    .smaller {
        font-size: 18px;
    }
    .wide-mode {
        max-width: 730px;
        padding: 2rem;
        margin: 3rem auto;
    }

    .caption {
        font-size: 18px;
        font-family: var(--serif);
        text-align: center;
        margin: 0 auto;
        margin-top: 2rem;
        margin-bottom: 0rem;
    }

    .wide-mode img {
        max-width: 460px;
        margin: 0 auto;
    }
    .white {
        background: #FFF;
    }
    .wide-mode p {
        max-width: none;
    }

    .bolded {
        font-weight: 600;
    }
    section {
        padding: 1rem 0 3rem;
        background: #F5F6F0;
    }

    .date {
        text-align:center;
        font-size: 18px;
        margin-bottom: 50px;
        margin-top: 90px;
    }

    p {
        width: calc(100% - 2rem);
        margin: 0 auto;
        max-width: 560px;
        margin-bottom: 1.5rem;
        font-size: 22px;
        color: #000;
        line-height: 1.3;
    }
    .contest {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
    }


    .date-header{
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
    }

    .line{
        height: 1px;
        width: 1px;
        flex-grow: 1;
        background: rgba(0,0,0,.4);
        align-self: center;
        margin-top: 2rem;
    }

    .date-header .line {
        margin: 0;
    }

    .date-header span {
        font-size: 16px;
        font-weight: 600;
        margin: 0 1rem;
        align-self: center;
    }
</style>