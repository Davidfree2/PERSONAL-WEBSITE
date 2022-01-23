<script>
</script>

<div class='container' id='Home'>
    <div class='helloContainer'>
        <h1>Hello! My name is David Esquerra</h1>
        <h2>Im a full stack web developer</h2>
        <h3>Down below you'll find all my experience and skills. Make sure to use the NavBar above to get to things quickly!</h3>
        <button><a href='#Experience'>View My Experience</a></button>
    </div>
</div>

<style>
    .container {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: linear-gradient(#034EA3, #2371d5, #2371d5);
    }

    .helloContainer {
        text-align: center;
    }

    h1 {
        font-size: 3.2rem;
        margin-bottom: .6rem;
        color: white;
    }

    h2 {
        font-size: 2.6rem;
        margin-bottom: .3rem;
        color: white;
    }

    h3 {
        margin-top: 1rem;
        font-size: 2.1rem;
        margin-bottom: .3rem;
        color: white;
    }

    button {
        padding: 1.2rem;
        border: none;
        font-size: 1.6rem;
        font-weight: bolder;
        margin-top: 2rem;
        background-color: white;
        color: black;
        border-radius: 50px;
    }

    button:hover {
        background-color: #27f5dd;
    }

    a {
        color: black;
        text-decoration: none;
        font-size: 1.7rem;
    }

    @media screen and (max-width: 1250px) {
    
        .container {
            padding-top: 4rem;
            width: 100vw;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: linear-gradient(#034EA3, #2371d5, #2371d5);
        }
    
        .helloContainer {
            text-align: center;
        }
    
        h1 {
            padding: 1.4rem 1.4rem 0rem 1.4rem;
            font-size: 2rem;
            margin-bottom: 0rem;
            color: white;
        }
    
        h2 {
            padding: 1rem;
            font-size: 1.7rem;
            margin-bottom: 0rem;
            color: white;
        }
    
        h3 {
            margin-top: 0rem;
            font-size: 1.5rem;
            margin-bottom: .3rem;
            color: white;
            padding: 0rem 3rem 3rem 3rem;
        }
    
        button {
            padding: 1rem;
            border: none;
            font-size: 1rem;
            font-weight: bolder;
            margin-top: 0rem;
            background-color: white;
            color: black;
            border-radius: 50px;
        }
    
        button:hover {
            background-color: #27f5dd;
        }
    
        a {
            color: black;
            text-decoration: none;
            font-size: 1.2rem;
        }
    
    }

</style>
