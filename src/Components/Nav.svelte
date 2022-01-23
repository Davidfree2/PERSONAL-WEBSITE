<script>
    let dropDown;
    var isOpen = false;

    const handleClick = async () =>{
        if (isOpen == false) {
            isOpen = true;
            dropDown.style.display = 'block';
        } else {
            isOpen = false;
            dropDown.style.display = 'none';
        }
    }

</script>

<div class='nav'  >
    <ul>
        <li><i class="material-icons">call</i><a href='#Contact'>Contact</a></li>
        <li><a href='#Home'>Home</a></li>
        <li><a href='#About'>About</a></li>
        <li><a href='#Skills'>Skills</a></li>
        <li><a href='#Experience'>Experience</a></li>
    </ul>
    <div class='dropdown'>
        <button on:click={handleClick} ><i class="material-icons">menu</i></button>
        <div class='dropdownContent' bind:this={dropDown} >
            <li><a href='#Contact'></a></li>
            <li><a href='#Contact'>Contact</a></li>
            <li><a href='#Home'>Home</a></li>
            <li><a href='#About'>About</a></li>
            <li><a href='#Skills'>Skills</a></li>
            <li><a href='#Experience'>Experience</a></li>
        </div>
    </div>
</div>

<style>

    .dropdown {
        display: none;
    }

    .nav {
        position: absolute;
        top: 0;
        width: 100vw;
        padding: 1.2rem;
        background-color: white;
        box-shadow: 0 0 50px 0 #888;
    }

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 85%;
        margin: auto;
    }

    li {
        list-style-type: none;
    }

    li:hover {
        color: blue;
    }

    li:nth-child(1) {
        width: 60%;
        display: flex;
        align-items: center;
    }

    a {
        text-transform: uppercase;
        color: black;
        text-decoration: none;
        font-size: 1.5rem;
    }

    a:hover {
        color: blue;
    }

    i {
        margin-right: .8rem;
        font-size: 1.8rem;
    }


    @media screen and (max-width: 1250px) {
        .nav {
            position: absolute;
            top: 0;
            width: 100vw;
            padding: .4rem;
            background-color: white;
            box-shadow: 0 0 50px 0 #888;
        }
    
        ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 85%;
            margin: auto;
        }
    
        li {
            list-style-type: none;
        }
    
        li:hover {
            color: blue;
        }
    
        li:nth-child(1) {
            width: 60%;
            display: flex;
            align-items: center;
        }
    
    
        a {
            text-transform: uppercase;
            color: black;
            text-decoration: none;
            font-size: 1.5rem;
        }
    
        a:hover {
            color: blue;
        }
    
        i {
            margin-right: 1rem;
            font-size: 1.8rem;
        }

        .dropdown {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
    
        .dropdown i {
            font-size: 2rem;
        }
    
        .dropdown button {
            width: 100%;
            border: none;
            border-radius: 10px;
            background-color: white;
        }
   
   /* 
        .dropdown:hover .dropdownContent {
            display: block;
        }
        */
    
        .dropdownContent {
            display: none;
        }

        .nav ul:nth-child(1) {
            display: none;
        }
    
    }
</style>
