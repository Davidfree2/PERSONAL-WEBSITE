<script>
</script>

<div class='container' id='About'>
    <div class='aboutContainer'>
        <div class='helloWorld'>
            <h1>Nice to meet you! Let me tell you about myself.</h1>
            <h2>My name is David Esquerra. And i am a full stack software engineer. I started my journey two years ago when i first discovered python (my first programming language). I immediatly fell in love with programming and building things from complete scratch. After learning python i decided to learn javascript, html , and css to bring my ideas to life with public web apps!.</h2>
            <span>(see porfolio for all these projects)</span>
        </div>
        <div class='SideContainer'>
            <h1>What you'll find down below.</h1>
            <h2>Down below you'll find all the skills i have and a few highlight projects that ive created myself. Thank you for looking at my resume. And hopefully i get the oppurtunity to be considered by you.</h2>
            <h2>Also you can download my resume PDF file here.</h2>
            <div class='SideBottom'>
                <div class='resume'>
                    <button><a href='./Resume.pdf' Download>Download PDF Resume</a></button>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .container {
        width: 100vw;
        text-align: center;
        background-image: linear-gradient(#2371d5, rgba(35,113,213, .2));
    }

    .aboutContainer {
        margin-top: 2.3rem;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 2rem;
    }

    .aboutContainer > div {
        width: 48%;
        margin-top: .5rem;
        padding: 3rem;
        border: none;
        border-radius: 10px;
        background-color: #f8f9fa;
    }

    h1 {
        margin-bottom: 4rem;
        font-size: 3rem;
    }

    h2 {
        font-size: 1.6rem;
    }

    span {
        color: blue;
        font-size: 1.5rem;
    }

    .SideBottom {
        text-align: center;
        margin-top: 2rem;
        font-size: 1.7rem;
        text-transform: uppercase;
    }

    button {
        margin-top: 2rem;
        padding: 1rem;
        border: none;
        background-color: #0468d7;
        border-radius: 50px;
    }

    a {
        font-size: 1.4rem;
        font-weight: bolder;
        text-decoration: none;
        color: white;
    }

    @media screen and (max-width: 1250px) {

    .container {
        padding: 0px;
        width: 100vw;
        text-align: center;
        background-image: linear-gradient(#2371d5, rgba(35,113,213, .2));
    }

    .aboutContainer {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .aboutContainer > div {
        width: 100%;
        margin-top: .4rem;
        padding: 1rem;
        border: none;
        border-radius: 10px;
        background-color: #f8f9fa;
    }

    h1 {
        margin-bottom: 0rem;
        font-size: 1.6rem;
    }

    h2 {
        font-size: 1.4rem;
        padding: 1rem;
    }

    span {
        color: blue;
    }

    .SideBottom {
        text-align: center;
        margin-top: 0rem;
        font-size: 1.7rem;
        text-transform: uppercase;
    }

    button {
        margin-top: 1rem;
        padding: 1rem;
        border: none;
        background-color: #0468d7;
        border-radius: 50px;
    }

    a {
        font-size: 1.1rem;
        font-weight: bolder;
        text-decoration: none;
        color: white;
    }
    
    }

</style>
