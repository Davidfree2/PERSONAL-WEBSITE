<script>
    let submitButton;
    let emailButton;

    let preSubmit = 'submit';

    let name = '';
    let company = '';
    let email = '';
    let message = '';

    let myEmail = 'davidesquerra.de@gmail.com';
    let myEmailPlaceholder = '';


    let copyText = async()=>{
        navigator.clipboard.writeText(myEmail);
        myEmail = await 'davidesquerra.de@gmail.com Copied';
        emailButton.style.backgroundColor = await '#27f5dd';
    }

    let submitInfo = async()=>{
        preSubmit = 'loading...';
        const userName = await name;
        const userCompany = await company;
        const userEmail = await email;
        const userMessage = await message;

        const url = await 'http://18.211.187.190:8080/emailInfo';

        const options = await {
            method: 'post',
            credentials: 'omit',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                emailName: userName,
                emailCompany: userCompany,
                emailEmail: userEmail,
                emailMessage: userMessage,
            }),
        }

        const fetching = await fetch(url, options);
        const res = await fetching.json();
        const code = await res.code;
        if (code == 'success') {
            submitButton.style.backgroundColor = '#27f5dd';
            preSubmit = 'Sent Successfully!';
        } else {
            submitButton.style.backgroundColor = '#ff8686';
            preSubmit = 'error!';
            alert('There was an error sending :( Try Contacting me throught the gmail below instead :)');
        }
    }

</script>

<div class='container' id='Contact'>
    <div class='contactText'>
        <h1>Contact Me</h1>
        <button on:click={copyText} bind:this={emailButton}><i class='material-icons'>email</i>{myEmail}</button>
        <button><i class='material-icons'>developer_mode</i><a href='https://github.com/Davidfree2' target='blank' >https://github.com/Davidfree2</a></button>
    </div>
    <div class='contacts'>
        <h1>Or Contact Me Here</h1>
        <input placeholder='name' name='name' bind:value={name} />
        <input placeholder='company' name='company' bind:value={company} />
        <input placeholder='email' name='email' bind:value={email} />
        <textarea placeholder='message...' name='message' bind:value={message} ></textarea>
        <button bind:this={submitButton} on:click={submitInfo} >{preSubmit}</button>
    </div>
</div>

<style>
    .container {
        background-image: linear-gradient(rgba(35, 113, 213, .45), rgba(35, 113, 213, 1));
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: white;
    }

    .contactText {
        font-size: 2.3rem;
        width: 45%;
        text-align: center;
    }

    .contactText h1 {
        margin-bottom: 2rem;
    }

    button {
        margin: 2rem;
        background-color: white;
        font-size: 2rem;
        padding: 1.2rem 3rem 1.2rem 3rem;
        border: none;
        border-radius: 50px;
        text-transform: capitalize;
    }

    button:hover {
        background-color: #0468d7;
    }

    .contacts {
        width: 45%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1.4rem;
    }

    .contacts h1 {
        margin-bottom: 1rem;
        font-size: 2.8rem;
    }

    .contacts button {
        margin-top: 1rem;
        background-color: white;
        font-size: 2rem;
        padding: 1.2rem 3rem 1.2rem 3rem;
        border: none;
        border-radius: 50px;
        text-transform: capitalize;
    }

    .contacts button:hover {
        background-color: #0468d7;
    }


    input {
        border: none;
        font-size: 2rem;
        width: 85%;
        height: 1rem;
        padding: 2rem;
        border-radius: 10px;
        margin-bottom: 1rem;
    }

    textarea {
        border: none;
        font-size: 2rem;
        width: 85%;
        height: 14rem;
        padding: 12px 20px;
        border-radius: 10px;
        resize: none;
    }

    i {
        margin-right: 1rem;
        font-size: 1.6rem;
    }

    a {
        color: black;
        text-decoration: none;
    }

    @media screen and (max-width: 1250px) {

        .container {
            background-image: linear-gradient(rgba(35, 113, 213, .45), rgba(35, 113, 213, 1));
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            color: white;
            padding-top: 3.7rem;
        }
    
        .contactText {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 1.3rem;
            width: 100%;
            text-align: center;
        }
    
        .contactText h1 {
            margin-bottom: 0rem;
            width: 100%;
        }
    
        button {
            width: 65%;
            background-color: white;
            font-size: 1.1rem;
            padding: 1rem 3rem 1rem 3rem;
            border: none;
            border-radius: 50px;
            text-transform: capitalize;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    
        button:hover {
            background-color: #0468d7;
        }
    
        .contacts {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 1.4rem;
        }
    
        .contacts h1 {
            margin-bottom: .5rem;
            font-size: 2rem;
        }
    
        .contacts button {
            margin-top: 1rem;
            background-color: white;
            font-size: 1rem;
            padding: 1rem 2rem 1rem 2rem;
            border: none;
            border-radius: 50px;
            text-transform: capitalize;
        }
    
        .contacts button:hover {
            background-color: #0468d7;
        }
    
    
        input {
            border: none;
            font-size: 1.4rem;
            width: 85%;
            height: 1rem;
            padding: 1.7rem;
            border-radius: 10px;
            margin-bottom: 1rem;
        }
    
        textarea {
            border: none;
            font-size: 1.4rem;
            width: 85%;
            height: 13rem;
            padding: 12px 20px;
            border-radius: 10px;
            resize: none;
        }
    
        i {
            margin-right: 1rem;
            font-size: 1.4rem;
            margin-bottom: .5rem;
        }

        .contactText button {
            margin: .5rem;
            font-size: 70%;
            text-align: center;
        }

    }

</style>
