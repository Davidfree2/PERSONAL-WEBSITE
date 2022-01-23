<script>
</script>

<div class='container' id='Experience'>
    <div class='heroText'>
        <h1>Experience</h1>
        <h2>A collection of projects that ive created from scratch over the past few years</h2>
        <h2>There are only ten projects on this website but ive built many more and you can see them on my github!</h2>
        <button><a href='https://github.com/Davidfree2' target='blank'>Github</a></button>
    </div>
    <div class='heroPhoto'>
        <img src='/Images/portfolioImage.png' />
    </div>
</div>

<style>
    .container {
        background-color: #f8f9fa;
        width: 100vw;
        height: 80vh;
        display: flex;
        justify-content: space-around;
        padding: .5rem 2rem .5rem 2rem;
    }


    .heroText {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 48vw;
        text-align: center;
        padding: 5rem;
    }

    .heroPhoto {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50vw;
    }

    img {
        width: 100%;
        margin: auto;
        border-radius: 10px;
    }

    h1 {
        margin-bottom: 2rem;
        font-size: 3rem;
    }

    h2 {
        margin-bottom: 1.4rem;
        font-weight: lighter;
        font-size: 2rem;
    }

    h2:nth-child(3) {
        font-weight: bold;
        font-size: 1.8rem;
        margin-bottom: 1rem;
    }

    button {
        padding: 1.5rem 2.5rem 1.5rem 2.5rem;
        border: none;
        font-weight: bolder;
        font-size: 1.4rem;
        background-color: #0468d7;
        border-radius: 50px;
        color: white;
    }

    button:hover {
        background-color: blue;
    }

    a {
        text-decoration: none;
        color: white;
    }


    @media screen and (max-width: 1250px) {

        .container {
            background-color: #f8f9fa;
            width: 100vw;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding: 3.5rem 1rem 1rem 0rem;
        }
    
    
        .heroText {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100vw;
            text-align: center;
            padding: 1rem;
        }
    
        .heroPhoto {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 90%;
            margin: auto;
        }
    
        img {
            width: 100%;
            margin: auto;
            border-radius: 10px;
        }
    
        h1 {
            margin-bottom: 2rem;
            font-size: 2.1rem;
        }
    
        h2 {
            margin-bottom: .8rem;
            font-weight: lighter;
            font-size: 1.5rem;
            width: 95%;
        }
    
        h2:nth-child(3) {
            font-weight: bold;
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
    
        button {
            padding: 1rem 2.3rem 1rem 2.3rem;
            border: none;
            font-weight: bolder;
            font-size: 1.1rem;
            background-color: #0468d7;
            border-radius: 50px;
            color: white;
        }
    
        button:hover {
            background-color: blue;
        }
    }

</style>
