<script>
</script>

<div class='container' id='Skills'>
    <div class='title'>
        <h1>Skills</h1>
        <h2>Built tons of projects using all these technologies</h2>
    </div>
    <div class='firstContainer'>
        <ul>
            <li><img src='/Images/Skills/resized/electr_small.png' /><h1>electron</h1></li>
            <li><img src='/Images/Skills/resized/mongoDb.png' /><h1>mongoDB</h1></li>
            <li><img src='/Images/Skills/resized/cs_small.png' /><h1>css</h1></li>
            <li><img src='/Images/Skills/resized/htm_small.png' /><h1>html5</h1></li>
            <li><img src='/Images/Skills/resized/js_small.png' /><h1>json</h1></li>
        </ul>
    </div>
    <div class='secondContainer'>
            <li><img src='/Images/Skills/resized/javascri_small.png' /><h1>Nodejs</h1></li>
            <li><img src='/Images/Skills/resized/expre_small.png' /><h1>express</h1></li>
            <li><img src='/Images/Skills/resized/lin_small.png' /><h1>linux</h1></li>
    </div>
    <div class='thirdContainer'>
            <li><img src='/Images/Skills/resized/javascript.png' /><h1>javascript</h1></li>
            <li><img src='/Images/Skills/resized/pyth_small.png' /><h1>python</h1></li>
    </div>
    <div class='fourthContainer'>
            <li><img src='/Images/Skills/resized/svel_small.png' /><h1>svelte</h1></li>
            <li><img src='/Images/Skills/resized/v_small.png' /><h1>vim</h1></li>
            <li><img src='/Images/Skills/resized/windo_small.png' /><h1>windows</h1></li>
    </div>
    <div class='fifthContainer'>
            <li><img src='/Images/Skills/resized/rea_small.png' /><h1>React</h1></li>
            <li><img src='/Images/Skills/resized/a_small.png' /><h1>aws</h1></li>
            <li><img src='/Images/Skills/resized/postgr_small.png' /><h1>postgres</h1></li>
            <li><img src='/Images/Skills/resized/g_small.png' /><h1>git</h1></li>
            <li><img src='/Images/Skills/resized/vsco_small.png' /><h1>VS code</h1></li>
    </div>
</div>

<style>

    .container {
        width: 100vw;
        background-image: linear-gradient(rgba(35,113,213, .2), #f8f9fa);
        padding: 3rem 2.5rem 1.3rem 2.5rem;
        display: grid;
        grid-template-areas:
        'first hero hero hero fifth'
        'first hero hero hero fifth'
        'first second third fourth fifth';
        text-align: center;
    }

    .container > div {
        width: 100%;
    }

    .title {
        color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        grid-area: hero;
        text-align: center;
        font-size: 1.9rem;
    }

    .firstContainer {
        grid-area: first;
    }

    .secondContainer {
        grid-area: second;
    }

    .thirdContainer {
        grid-area: third;
        margin-top: 3rem;
    }

    .fourthContainer {
        grid-area: fourth;
    }

    .fifthContainer {
        grid-area: fifth;
    }

    img {
        width: 50%;
    }

    li {
        list-style-type: none;
        border: none;
        border-radius: 10px;
        padding: 1.5rem;
        margin: 1.1rem;
        box-shadow: 0px 0px 30px 3px #e1e1e1;
        background-color: white;
    }

    li h1 {
        font-weight: lighter;
    }

    h2 {
        font-weight: lighter;
        font-size: 2.2rem;
        margin-bottom: .4rem;
    }
    
    h1 {
        margin-bottom: 1rem;
    }

    @media screen and (max-width: 1250px) {

    .container {
        background-image: linear-gradient(rgba(35,113,213, .2), #f8f9fa);
        padding: 3.5rem 1rem 1rem 1rem;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
    }

    .container > div {
        width: 100%;
    }

    .title {
        color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 1.2rem;
    }

    .firstContainer ul {
        grid-area: first;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .secondContainer {
        grid-area: first;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .thirdContainer {
        margin-top: 0rem;
        grid-area: first;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .fourthContainer {
        grid-area: first;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .fifthContainer {
        grid-area: first;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    img {
        width: 50%;
    }

    li {
        list-style-type: none;
        border: none;
        border-radius: 10px;
        padding: .2rem;
        margin: .2rem;
        box-shadow: 0px 0px 30px 3px #e1e1e1;
        background-color: white;
        width: 46%;
    }

    li h1 {
        font-weight: lighter;
        width: 100%;
        font-size: 1.4rem;
    }

    h2 {
        font-weight: lighter;
        font-size: 1.45rem;
        margin-bottom: .4rem;
        width: 100%;
    }
    
    h1 {
        width: 100%;
        margin-bottom: 1rem;
        font-size: 2rem;
    }

    }

</style>
